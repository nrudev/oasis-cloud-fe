import { useEffect } from "react";

import type { AppProps } from "next/app";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAtom } from "jotai";
import { SnackbarProvider } from "notistack";

import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import authAtom from "@/datas/auth";
import exchangeAtom from "@/datas/exchange";
import "@/styles/custom.css";
import "@/styles/font/font-sans.css";
import "@/styles/font/font-sfp.css";
import "@/styles/globals.css";
import "@/styles/liquid.scss";
import theme from "@/styles/theme";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { Dialog, closeDialog } = useDialogGlobal();
  const [, setAuth] = useAtom(authAtom);
  const [, setExchange] = useAtom(exchangeAtom);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) setAuth(JSON.parse(auth));

    const exchange = localStorage.getItem("exchange");
    if (exchange) {
      if (exchange === "okx") setExchange("okx");
      else if (exchange === "bithumb") setExchange("bithumb");
      else localStorage.removeItem("exchange");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <SnackbarProvider />
      <CssBaseline />
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID ?? ""}>
        <ThemeProvider theme={theme}>
          {Dialog && (
            <Box
              className="fixed left-0 top-0 z-[99] flex h-screen w-screen items-center justify-center bg-[#00000033]"
              onClick={() => {
                closeDialog();
              }}
            >
              <Box
                onClick={e => {
                  e.stopPropagation();
                }}
              >
                {Dialog}
              </Box>
            </Box>
          )}
          <Component {...pageProps} />
          <GoogleAnalytics gaId="G-35VD71EPTP" />
          <GoogleTagManager gtmId="GTM-TBMTZ7W3" />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
