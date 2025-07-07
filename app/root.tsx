import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { AppProvider, useGlobalContext } from "./modules/gcontext";
import { useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { NotificationProvider } from "./modules/notificationContext";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Calligraffitti&family=Kalam:wght@300;400;700&family=Kaushan+Script&family=Oxanium:wght@200..800&family=Playwrite+IN:wght@100..400&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta />
        <Links />
      </head>
      <body>
        <AppProvider>
          {children}
        </AppProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { setAccessToken, setProfile, theme } = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    async function getAccessToken() {
      const result = await fetch("/api/refresh/");
      if (result.status === 200) {
        const details = await result.json();
        setAccessToken(details.token); // Store the fetched data in state
        setProfile(pre => { return { ...pre, ...details.profile } });
      }
    }
    getAccessToken();
  }, []);

  const slideVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return <>
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={slideVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        transition={{ duration: 0.4 }}
      >
        <div className={`${theme}`}>
          <NotificationProvider>
            <Outlet />
          </NotificationProvider>
        </div>
      </motion.div>
    </AnimatePresence></>;
}
