"use client";

import { useCallback, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import PDFControls from "@/components/pdfViewer/PDFControls";

// pdfjs 라인은 수정 금지!
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  filePath?: string;
  showBackButton?: boolean;
}

function PDFViewer({ filePath, showBackButton = true }: PDFViewerProps) {
  const [pages, setPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setPages(numPages);
    setPageNumber(1);
  }, []);

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, pages));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3.0));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="mx-auto max-w-4xl">
      <PDFControls
        pageNumber={pageNumber}
        pages={pages}
        scale={scale}
        onPrevPage={goToPrevPage}
        onNextPage={goToNextPage}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
        showBackButton={showBackButton}
      />
      <div className="flex justify-center">
        <Document
          file={filePath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className="py-8 text-center">PDF 문서를 로딩 중입니다...</div>}
          error={
            <div className="py-8 text-center text-red-500">PDF 문서를 불러올 수 없습니다.</div>
          }
          noData=""
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            loading={<div className="py-8 text-center">페이지를 로딩 중입니다...</div>}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
}

export default PDFViewer;
