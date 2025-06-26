import type { MetaFunction } from "@remix-run/node";
import { useFetcher, useNavigate } from "@remix-run/react";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";

export const meta: MetaFunction = () => {
  return [
    { title: "Unnamed" },
    { name: "description", content: "Welcome to Unnamed" },
  ];
};

export async function getAccessToken(setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>, setUserName: React.Dispatch<React.SetStateAction<string | undefined>>) {
  try {
    const result = await fetch("/api/refresh");
    if (result.status === 200) {
      const details = await result.json();
      setAccessToken(details.token); // Store the fetched data in state
      setUserName(details.data?.username);
    }
  }
  catch (error) {
    console.log("error", error);
  }
}
export type loginData = {
  token?: string,
  username?: string,
};

export default function Index() {

  const loginFetcher = useFetcher<loginData>();
  const isSubmitting = loginFetcher.state === "submitting";
  const navigate = useNavigate();
  const { accessToken, setAccessToken, setUserName } = useGlobalContext();

  useEffect(() => {
    //getAccessToken(setAccessToken, setUserName);
  }, []);

  useEffect(() => {
    if (loginFetcher.data?.token) {
      setAccessToken(loginFetcher.data.token); // Store the fetched data in state
      setUserName(loginFetcher.data?.username);
      console.log("logged in");
    }
  }, [loginFetcher.data]);

  useEffect(() => {
    if (accessToken) {
      navigate("/dashboard");
    }
  }, [accessToken]);


  return (
    <loginFetcher.Form method="post" action="/api/login">
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