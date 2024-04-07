import React from "react";
import BotUseInfo from "@/components/oasisbot/BotUseInfo";
import MainPreset from "@/components/preset/MainPreset";
import SalesRatio from "@/components/preset/SalesRatio";
import TopNavLayout from "@/components/topnav/TopNavLayout";

function Preset() {
  return (
    <TopNavLayout>
      <BotUseInfo />
      <MainPreset />
      {/* <SalesRatio /> */}
    </TopNavLayout>
  );
}

export default Preset;
