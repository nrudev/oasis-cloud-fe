"use client";

import { useRouter } from "next/navigation";

import { Button } from "@mui/material";

interface PDFControlsProps {
  pageNumber: number;
  pages: number;
  scale: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  showBackButton?: boolean;
}

function PDFControls({
  pageNumber,
  pages,
  scale,
  onPrevPage,
  onNextPage,
  onZoomIn,
  onZoomOut,
  showBackButton = true,
}: PDFControlsProps) {
  const router = useRouter();

  return (
    <div className="mb-6 flex items-center justify-center gap-4 rounded-lg bg-gray-50 p-4">
      {showBackButton && (
        <>
          <Button variant="contained" color="primary" onClick={() => router.push("/dashboard")}>
            오아시스로 돌아가기
          </Button>
          <div className="mx-2 h-6 border-l border-gray-300" />
        </>
      )}

      <Button onClick={onPrevPage} disabled={pageNumber <= 1} variant="outlined" color="primary">
        이전 페이지
      </Button>

      <span className="text-sm font-medium text-gray-600">
        {pageNumber} / {pages}
      </span>

      <Button
        onClick={onNextPage}
        disabled={pageNumber >= pages}
        variant="outlined"
        color="primary"
      >
        다음 페이지
      </Button>

      <div className="mx-2 h-6 border-l border-gray-300" />

      <Button onClick={onZoomOut} variant="outlined" size="small" disabled={scale <= 0.5}>
        -
      </Button>

      <span className="min-w-[60px] text-center text-sm font-medium text-gray-600">
        {Math.round(scale * 100)}%
      </span>

      <Button onClick={onZoomIn} variant="outlined" size="small" disabled={scale >= 3.0}>
        +
      </Button>
    </div>
  );
}

export default PDFControls;
