import { useGlobalContext } from "~/modules/gcontext";


export const useCentralFetcher = () => {
    const { accessToken, setAccessToken } = useGlobalContext();

    const centralFetcher = async (url: string, options: RequestInit = {}) => {
        const headers = { ...(options.headers || {}), Authorization: accessToken ? `Bearer ${accessToken}` : "" };

        const response = await fetch(url, { ...options, headers });

        // Check if token has expired
        if (response.status === 401) {
            const result = await fetch("/api/refresh");
            if (result.status === 200) {

                const access = await result.json();
                setAccessToken(access.token);

                // Retry the original request with the new token
                const retryHeaders = { ...(options.headers || {}), Authorization: `Bearer ${access.token}` };
                return fetch(url, { ...options, headers: retryHeaders });
            } else {
                setAccessToken(undefined);
                localStorage.clear();
                throw new Response("Failed to refresh access token");
            }
        }

        return response;
    };

    return centralFetcher;
};
