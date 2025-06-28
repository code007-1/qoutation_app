import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { AppProvider, useGlobalContext } from "./modules/gcontext";
import { useEffect } from "react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&display=swap",
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
  const { setAccessToken, setUserName } = useGlobalContext();

  useEffect(() => {
    //getAccessToken(setAccessToken, setUserName);
    async function getAccessToken() {
      const result = await fetch("/api/refresh/");
      if (result.status === 200) {
        const details = await result.json();
        setAccessToken(details.token); // Store the fetched data in state
        setUserName(details.username);
        console.log("asd", details);
      }
    }
    getAccessToken();
  }, []);

  return <Outlet />;
}
