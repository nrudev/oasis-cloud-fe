function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "오아시스",
        url: "https://cloud.oasisbot24.com",
        logo: "https://cloud.oasisbot24.com/logo.png",
        description:
          "검증된 전략과 자동거래 시스템, 누구나 쉽게 시작하는 오아시스. 가상자산 자동매매의 새로운 기준을 제시합니다.",
        sameAs: ["https://www.instagram.com/oasis_bot", "https://www.threads.com/@oasis_bot"],
      },
      {
        "@type": "WebSite",
        name: "오아시스 자동매매 플랫폼",
        url: "https://cloud.oasisbot24.com",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default JsonLd;
