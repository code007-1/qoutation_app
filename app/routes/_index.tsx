import { useFetcher, useNavigate } from "@remix-run/react";
import { Loader, SunMoon } from "lucide-react";
import { useEffect } from "react";
import { useGlobalContext } from "~/modules/gcontext";
import { useNotification } from "~/modules/notificationContext";
import { loginData } from "~/modules/utils";

export default function Index() {
  const loginFetcher = useFetcher<loginData>();
  const isSubmitting = loginFetcher.state === "submitting";
  const navigate = useNavigate();
  const { setAccessToken, setProfile, setGQuote, theme, toggleTheme, appName, setPermissions } = useGlobalContext();
  const { addNotifications } = useNotification();

  useEffect(() => {
    if (loginFetcher.data?.token) {
      setAccessToken(loginFetcher.data.token); // Store the fetched data in state
      localStorage.setItem("login", "y");
      setPermissions(loginFetcher.data.permissions || "read");
      if (loginFetcher.data?.quote)
        navigate("/dashboard/welcome");
      else
        navigate("/dashboard/home");

      addNotifications({
        title: "Logged In...",
        message: `Logged in successfully as ${loginFetcher.data?.profile.username?.toUpperCase()}`,
      });
    }

    if (loginFetcher.data?.profile)
      setProfile(pre => { return { ...pre, ...loginFetcher.data?.profile } });
    if (loginFetcher.data?.quote)
      setGQuote(loginFetcher.data?.quote);
    else if (typeof (loginFetcher?.data) === "string") {
      addNotifications({
        title: "Login error...",
        message: loginFetcher?.data || "",
      });
    }
  }, [loginFetcher.data]);

  useEffect(() => {
    localStorage.getItem("theme") || localStorage.setItem("theme", "dark");
  });

  return (
    <>
      <div className="max-h-screen bg-background">
        <div className="absolute w-full flex bg-headerBackground py-2">
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="flex text-4xl text-textPrimary justify-center font-Satisfy">
              <div>{appName.slice(0, 3)}</div>
              <div>{appName[3]}</div>
              <div>{appName.slice(4)}</div>
            </div>
          </div>
          <div className="mr-0 ml-auto">
            <button
              onClick={toggleTheme}
              className="py-1 px-2 border-none hover:bg-buttonHover mx-10"
            >
              <SunMoon className="text-textPrimary" />
            </button>
          </div>
        </div >

        <loginFetcher.Form method="post" action="/api/login/">
          <div className="min-h-screen flex justify-center items-center">

            {/* Login Form */}
            <div className="bg-headerBackground p-8 shadow-lg w-[25%]">
              <div className="flex justify-center font-bold text-2xl text-textPrimary">Login</div>
              <input
                name="username"
                type="text"
                placeholder="Username"
                className="w-full my-3 p-3 border border-border bg-background text-textPrimary"
                autoComplete="username"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full my-3 p-3 border border-border bg-background text-textPrimary"
                autoComplete="password"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-button text-buttonTextPrimary px-4 py-1 text-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-buttonTextPrimary" />
                    Logging in...
                  </span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </div>
        </loginFetcher.Form>
      </div>
    </>
  );
}