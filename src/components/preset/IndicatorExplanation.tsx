import React from "react";
import Image from "next/image";

function IndicatorExplanation() {
  return (
    <div className="grow p-2.5 bg-white font-roboto font-semibold rounded-sm shadow-md">
      <Image
        src="/preset/indicator_explanation.png"
        alt="indicator_explanation"
        width={600}
        height={260}
      />
    </div>
  );
}

export default IndicatorExplanation;
