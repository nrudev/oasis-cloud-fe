import { useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";

import PresetIndicatorInfoCard from "@/cards/preset/PresetIndicatorInfoCard/index";
import PresetInfoCard from "@/cards/preset/PresetInfoCard/index";
import PresetSettingCard from "@/cards/preset/PresetSettingCard/index";
import PresetWeightInfoCard from "@/cards/preset/PresetWeightInfoCard/index";
import PresetWeightSettingCard from "@/cards/preset/PresetWeightSettingCard/index";
import { useUserExchangesQuery } from "@/hooks/query/useApiConnection";
import Carousel from "@/layouts/Carousel/index";
import Layout from "@/layouts/Layout";

function OasisBot() {
  const {
    userExchangeQuery: { data },
  } = useUserExchangesQuery();

  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    if (!data || data.length === 0) setIsConnected(false);
    else setIsConnected(true);
  }, [data]);

  return (
    <Layout>
      <Carousel minWidth={1600}>
        <Stack direction="row" className="h-[900px] w-full gap-4">
          <Box className="h-full w-1/4">
            <PresetInfoCard isConnected={isConnected} />
          </Box>
          <Stack className="h-full w-3/4 gap-4">
            <Stack direction="row" className="h-1/2 min-h-[436px] w-full gap-4">
              <Box className="h-full w-full">
                <PresetSettingCard />
              </Box>
              <Box className="h-full w-[768px] shrink-0">
                <PresetIndicatorInfoCard />
              </Box>
            </Stack>
            <Stack direction="row" className="h-1/2 min-h-[436px] w-full gap-4">
              <Box className="h-full w-3/4">
                <PresetWeightSettingCard />
              </Box>
              <Box className="h-full w-1/4">
                <PresetWeightInfoCard />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}

export default OasisBot;
