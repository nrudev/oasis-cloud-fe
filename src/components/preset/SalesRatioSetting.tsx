import React from "react";
import { Button } from "@mui/material";
import SalesRatioSlider from "./SalesRatioSlider";

function SalesRatioSetting() {
  return (
    <div className="grow p-2.5 bg-white font-roboto font-semibold rounded-sm shadow-md">
      <SalesRatioSlider label="카운팅 7" />
      <SalesRatioSlider label="카운팅 8" />
      <SalesRatioSlider label="카운팅 9" />
      <SalesRatioSlider label="카운팅 10" />
      <SalesRatioSlider label="카운팅 11" />
      {/* paging button */}
      <div className="mt-6 text-center text-red-600">
        TIP: 매매 비중은 합 100% 를 모두 채워야 합니다. 비중을 설정하면 우측
        화면에 나타납니다.
      </div>
      <div className="flex flex-col items-center mt-8">
        <Button variant="contained" className="w-96 mt-4 bg-gray-500 text-lg">
          이전
        </Button>
        <Button variant="contained" className="w-96 my-5 bg-navy text-lg">
          저장
        </Button>
      </div>
    </div>
  );
}

export default SalesRatioSetting;
