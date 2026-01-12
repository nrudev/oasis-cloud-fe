import { useMemo, useState } from "react";

import { Box, CardContent, Stack } from "@mui/material";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import NotConnect from "@/components/NotConnect";
import CustomTab from "@/components/tab/CustomTab";
import CustomTabs from "@/components/tab/CustomTabs";
import { presetDCAAtom } from "@/datas/preset";
import { useSubscribeQuery } from "@/hooks/query/useSubcribe";

import DetailSettingPanel from "./DetailSettingPanel";
import SimpleSettingPanel from "./SimpleSettingPanel";

interface Props {
  isConnected: boolean;
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,

    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function PresetDCASettingCard({ isConnected }: Props) {
  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();

  const [value, setValue] = useState(0);

  const [preset, setPreset] = useAtom(presetDCAAtom);

  const isPremium = useMemo(
    () => subscribeData?.productName.toLowerCase().includes("premium"),
    [subscribeData],
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    setPreset({ ...preset, dcaSetting: newValue as number });
  };

  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardHeader id="setting" title="프리셋 설정" subtitle={preset?.presetName} />

      <CardContent>
        {(!isConnected && !isPremium) || (isConnected && !isPremium) ? (
          <NotConnect
            customMessage={`프리셋을 설정하여 더 큰 수익을 창출해보세요\n 프리미엄 플랜으로 업그레이드 하면 설정할 수 있어요`}
            isConnected={false}
            hasButton={false}
          />
        ) : !isConnected ? (
          <NotConnect
            customMessage={`프리셋을 설정하여 더 큰 수익을 창출해보세요\n 거래소 API를 연동하면 설정할 수 있어요`}
            isConnected={false}
            hasButton={false}
          />
        ) : (
          <Stack>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <CustomTabs value={value} onChange={handleChange}>
                <CustomTab label="간편설정" {...a11yProps(0)} />

                <CustomTab label="세부설정" {...a11yProps(1)} />
              </CustomTabs>
            </Box>

            <SimpleSettingPanel value={value} index={0} />

            <DetailSettingPanel value={value} index={1} />
          </Stack>
        )}
      </CardContent>

      {isConnected && isPremium && (
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
      )}
    </Card>
  );
}
