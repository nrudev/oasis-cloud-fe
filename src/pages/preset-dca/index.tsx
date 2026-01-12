import { useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";

import PresetDCAGuideCard from "@/cards/preset/PresetDCAGuideCard";
import PresetDCAIndicatorInfoCard from "@/cards/preset/PresetDCAIndicatorInfoCard";
import PresetDCASettingCard from "@/cards/preset/PresetDCASettingCard";
import PresetInfoCard from "@/cards/preset/PresetInfoCard/index";
import { useUserExchangesQuery } from "@/hooks/query/useApiConnection";
import Carousel from "@/layouts/Carousel/index";
import Layout from "@/layouts/Layout";

function PresetDCA() {
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
            <PresetInfoCard isConnected={isConnected} setting="DCA" />
          </Box>

          <Box className="h-full w-1/4">
            <PresetDCASettingCard isConnected={isConnected} />
          </Box>
          <Stack className="w-2/4 gap-4">
            <Box className="w-full">
              <PresetDCAIndicatorInfoCard />
            </Box>

            <Box className="h-full w-full">
              <PresetDCAGuideCard />
            </Box>
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}

export default PresetDCA;
