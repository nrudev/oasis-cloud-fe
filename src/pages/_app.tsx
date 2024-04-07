import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAtom } from "jotai";
import { DevTools } from "jotai-devtools";
import { jwtDecode } from "jwt-decode";
import { SnackbarProvider } from "notistack";
import authAtom from "@/datas/auth";
import "@/styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [, setAuth] = useAtom(authAtom);

  useEffect(() => {
    const credential = localStorage.getItem("credential");
    if (credential) setAuth(jwtDecode(credential));
    else router.push("/");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <DevTools />
      <ReactQueryDevtools />
      <SnackbarProvider />
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID ?? ""}
      >
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
