import { Head, Html, Main, NextScript } from "next/document";

import JsonLd from "@/components/JsonLd";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>가상자산 자동매매의 새로운 기준, 오아시스</title>
      <meta
        name="description"
        content="검증된 전략과 자동거래 시스템, 누구나 쉽게 시작하는 오아시스. 가상자산 자동매매의 새로운 기준을 제시합니다."
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="가상자산 자동매매의 새로운 기준, 오아시스" />
      <meta
        property="og:description"
        content="검증된 전략과 자동거래 시스템, 누구나 쉽게 시작하는 오아시스. 가상자산 자동매매의 새로운 기준을 제시합니다."
      />
      <meta property="og:image" content="https://cloud.oasisbot24.com/logo/open_graph.png" />
      <meta property="og:url" content="https://cloud.oasisbot24.com/" />

      {process.env.NEXT_PUBLIC_MODE === "development" && (
        <meta name="robots" content="noindex, nofollow" />
      )}

      <link
        rel="stylesheet prefetch"
        href="https://gist.githubusercontent.com/mfd/614e2e80a22b878bde63cb471cbe677e/raw/eef2aabfd0d588d43285431186a0cf70305ceb80/sanfrancisco-font.css"
      />

      <link rel="shortcut icon" href="https://cloud.oasisbot24.com/logo/oasis.png" />

      <meta name="naver-site-verification" content="25ef148db53f27df80cc82365759cccb2db3c3fc" />
      <script src="https://static.okx.com/cdn/assets/okfe/libs/okxOAuth/index.js" async />
      <JsonLd />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
