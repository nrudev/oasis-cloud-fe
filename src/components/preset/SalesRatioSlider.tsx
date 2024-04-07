import React from "react";
import { Slider } from "@mui/material";

type Props = {
  label: string;
  className?: string | undefined;
};

const marks = [
  {
    value: 0,
    label: 0,
  },
  {
    value: 100,
    label: 100,
  },
];

function SalesRatioSlider({ label, className }: Props) {
  return (
    <div className="flex justify-between mt-2 mb-2.5">
      <div
        className={`mt-2 mx-4 font-bold font-poppins text-base ${className}`}
      >
        {label}
      </div>
      <div className="mt-2 ml-auto mr-3 font-normal">value%</div>
      <div className="w-4/6 mx-4 ">
        <Slider
          defaultValue={10}
          aria-label={label}
          marks={marks}
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
}

export default SalesRatioSlider;
