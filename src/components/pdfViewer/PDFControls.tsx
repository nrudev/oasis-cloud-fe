"use client";

import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

interface PDFControlsProps {
  pageNumber: number;
  numPages: number;
  scale: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  showBackButton?: boolean;
}

function PDFControls({
  pageNumber,
  numPages,
  scale,
  onPrevPage,
  onNextPage,
  onZoomIn,
  onZoomOut,
  showBackButton = true,
}: PDFControlsProps) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
      {showBackButton && (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/dashboard")}
          >
            오아시스로 돌아가기
          </Button>
          <div className="border-l border-gray-300 h-6 mx-2"></div>

        </>
      )}

      <Button
        onClick={onPrevPage}
        disabled={pageNumber <= 1}
        variant="outlined"
        color="primary"
      >
        이전 페이지
      </Button>

      <span className="text-sm text-gray-600 font-medium">
        {pageNumber} / {numPages}
      </span>

      <Button
        onClick={onNextPage}
        disabled={pageNumber >= numPages}
        variant="outlined"
        color="primary"
      >
        다음 페이지
      </Button>

      <div className="border-l border-gray-300 h-6 mx-2"></div>

      <Button
        onClick={onZoomOut}
        variant="outlined"
        size="small"
        disabled={scale <= 0.5}
      >
        -
      </Button>

      <span className="text-sm text-gray-600 min-w-[60px] text-center font-medium">
        {Math.round(scale * 100)}%
      </span>

      <Button
        onClick={onZoomIn}
        variant="outlined"
        size="small"
        disabled={scale >= 3.0}
      >
        +
      </Button>
    </div>
  );
}

export default PDFControls;
