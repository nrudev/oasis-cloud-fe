import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/pdfViewer/PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      PDF 로딩 중...
    </div>
  )
});

function WithdrawGuide() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="flex items-center justify-center h-96">로딩 중...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">출금 가이드</h1>
      <PDFViewer filePath="/pdf/upbit_to_okx_withdrawl_guide.pdf" />
    </div>
  );
}

export default WithdrawGuide;