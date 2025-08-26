import { useGlobalContext } from "~/modules/gcontext";

export const useCentralFetcher = () => {
    const { accessToken, setAccessToken } = useGlobalContext();

    function isTokenExpired(token: string): boolean {
        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            const exp = payload.exp * 1000; // Convert to milliseconds
            return Date.now() >= exp;
        } catch (e) {
            //console.error("Invalid token format or expiration detail found : ", e);
            return true; // Assume expired if token is invalid0
        }
    }

    async function getAccessToken() {
        if (accessToken && !isTokenExpired(accessToken))
            return accessToken;

        const result = await fetch("/api/refresh");
        if (result.status === 200) {

            const access = await result.json();
            setAccessToken(access.token);
            localStorage.setItem("login", "y");
            return access.token;
        }
        setAccessToken(undefined);
        localStorage.setItem("login", "n");
        return undefined;
    }

    const centralFetcher = async (url: string, options: RequestInit = {}) => {
        const accessToken = await getAccessToken();
        if (!accessToken)
            throw new Response("Failed to refresh access token");

        const headers = { ...(options.headers || {}), Authorization: `Bearer ${accessToken}` };

        const response = await fetch(url, { ...options, headers });

        // if for some reason the access token is wrong, try to refresh it
        if (response.status === 401) {
            const result = await fetch("/api/refresh");
            if (result.status === 200) {

                const access = await result.json();
                setAccessToken(access.token);
                localStorage.setItem("login", "y");

                // Retry the original request with the new token
                const retryHeaders = { ...(options.headers || {}), Authorization: `Bearer ${access.token}` };
                return fetch(url, { ...options, headers: retryHeaders });
            } else {
                setAccessToken(undefined);
                localStorage.setItem("login", "n");
                throw new Response("Failed to refresh access token");
            }
        }
        return response;
    };

    return centralFetcher;
};
