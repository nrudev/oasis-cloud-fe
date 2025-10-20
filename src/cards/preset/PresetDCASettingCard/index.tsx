import { useState } from "react";

import { Box, CardContent } from "@mui/material";

import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import CustomTab from "@/components/tab/CustomTab";
import CustomTabs from "@/components/tab/CustomTabs";

import DetailSettingPanel from "./DetailSettingPanel";
import SimpleSettingPanel from "./SimpleSettingPanel";

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function PresetDCASettingCard() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardHeader id="setting" title="프리셋 설정" subtitle="하락장 세팅이 선택되었습니다." />
      <CardContent>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <CustomTabs value={value} onChange={handleChange}>
            <CustomTab label="간편설정" {...a11yProps(0)} />
            <CustomTab label="세부설정" {...a11yProps(1)} />
          </CustomTabs>
        </Box>
        <SimpleSettingPanel value={value} index={0} />
        <DetailSettingPanel value={value} index={1} />
      </CardContent>
      <CardFooter className="bottom-2">
        <CardButton
          text="초기화"
          className="reset-button mr-1 bg-neutral-700 text-white"
          onClick={() => console.log("eee")}
        />
        <CardButton
          text="저장"
          className="execute-button ml-1 bg-brand text-white"
          onClick={() => console.log("eee")}
        />
      </CardFooter>
    </Card>
  );
}
