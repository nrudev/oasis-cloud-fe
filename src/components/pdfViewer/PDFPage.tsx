import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/pdfViewer/PDFViewer"), {
  ssr: false,
  loading: () => <div className="flex h-96 items-center justify-center">PDF 로딩 중...</div>,
});

function PDFPage({ title, filePath }: { title: string; filePath: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="flex h-96 items-center justify-center">로딩 중...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">{title}</h1>
      <PDFViewer filePath={filePath} />
    </div>
  );
}

export default PDFPage;
