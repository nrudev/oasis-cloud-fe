import React from "react";
import TwoCircularChart from "@/components/dashboard/TwoCircularChart";

type Props = {
  income: number;
  lose: number;
};

function WinningRate({ income, lose }: Props) {
  return (
    <div className="flex">
      <div>
        <div className="font-bold font-poppins text-base">승률</div>
        <TwoCircularChart rate={income / 100} />
      </div>
      <div className="flex flex-col gap-3 mt-12 ml-5 w-full">
        <div className="flex justify-between">
          <div className="font-light font-poppins text-base">수익</div>

          <div className="font-bold font-poppins text-base">{`${income}%`}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-light font-poppins text-base">손해</div>
          <div className="font-bold font-poppins text-base">{`${lose}%`}</div>
        </div>
      </div>
    </div>
  );
}

export default WinningRate;
