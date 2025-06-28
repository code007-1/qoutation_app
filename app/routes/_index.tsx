import { useFetcher, useNavigate } from "@remix-run/react";
import { Loader, UserMinus } from "lucide-react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { getAccessToken, loginData } from "~/modules/utils";


export default function Index() {

  const loginFetcher = useFetcher<loginData>();
  const isSubmitting = loginFetcher.state === "submitting";
  const navigate = useNavigate();
  const { accessToken, setAccessToken, setUserName, userName } = useGlobalContext();

  useEffect(() => {
    if (loginFetcher.data?.token) {
      setAccessToken(loginFetcher.data.token); // Store the fetched data in state
      setUserName(loginFetcher.data.username);
    }
  }, [loginFetcher.data]);

  useEffect(() => {
    if (accessToken) {
      navigate("/quote");
    }
  }, [accessToken]);


  return (
    <loginFetcher.Form method="post" action="/api/login/">
      <div className="flex items-center justify-center h-screen">

        {/* Login Form */}

        <div className="bg-white p-8 rounded-lg shadow-lg w-[25%]">
          <div className="flex justify-center font-bold text-2xl">Unnamed</div>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="w-full my-3 p-3 border border-gray-100 rounded-md"
            autoComplete="username"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full my-3 p-3 border border-gray-100 rounded-md "
            autoComplete="password"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-buttonSecond/80"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
    </loginFetcher.Form >
  );
}