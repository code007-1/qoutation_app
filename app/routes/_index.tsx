import packageJson from '../../package.json';
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
  const { accessToken, setAccessToken, setProfile, setQuote, theme, toggleTheme } = useGlobalContext();
  const { addNotifications } = useNotification();

  useEffect(() => {
    if (loginFetcher.data?.token) {
      setAccessToken(loginFetcher.data.token); // Store the fetched data in state
      addNotifications({
        title: "Logged In...",
        message: `Logged in successfully as ${loginFetcher.data?.profile.username?.toUpperCase()}`,
        //duration: 5000,
        //variant: "success"
      });
    }
    if (loginFetcher.data?.profile)
      setProfile(pre => { return { ...pre, ...loginFetcher.data?.profile } });
    if (loginFetcher.data?.quote)
      setQuote(loginFetcher.data?.quote);
  }, [loginFetcher.data]);

  useEffect(() => {
    if (accessToken) {
      if (loginFetcher.data?.quote)
        navigate("/welcome");
      else
        navigate("/dashboard/home");
    }
  }, [accessToken]);

  return (
    <>
      <div className='max-h-screen bg-background'>
        <div className="absolute w-full flex bg-headerBackground py-2">
          <div className='absolute left-1/2 -translate-x-1/2 text-2xl font-semibold text-textPrimary '>
            {packageJson.name[0].toUpperCase() + packageJson.name.slice(1)}
          </div>
          <div className='mr-0 ml-auto'>
            <button
              onClick={toggleTheme}
              className="py-1 px-2 border-none hover:bg-buttonHover mx-10"
            >
              <SunMoon color={`${theme === "light" ? "black" : "white"}`} />
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