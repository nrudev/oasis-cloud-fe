import { Box, Stack } from "@mui/material";

import RunOasisBotCard from "@/cards/oasisbot/OasisBotRunCard";
import OasisLabInfoCard from "@/cards/oasislab/OasisLabInfoCard";
import OasisLabResultChartCard from "@/cards/oasislab/OasisLabResultChartCard";
import OasisLabResultInfoCard from "@/cards/oasislab/OasisLabResultInfoCard";
import Carousel from "@/layouts/Carousel";
import Layout from "@/layouts/Layout";

export default function OasisLab() {
  return (
    <Layout>
      <Carousel minWidth={1600}>
        <Stack className="gap-4">
          <Stack direction="row" className="h-[495px] gap-4">
            <Box className="w-3/12">
              <RunOasisBotCard isConnected={false} />
            </Box>
            <Stack className="h-[495px] w-9/12 gap-4">
              <Stack direction="row" className="h-full w-full gap-4">
                <OasisLabInfoCard type="set" />
                <OasisLabInfoCard type="current" />
                <OasisLabInfoCard type="max" />
              </Stack>
              <Stack direction="row" className="h-[385px] shrink-0 gap-4">
                <Box className="w-7/12">
                  <OasisLabResultChartCard />
                </Box>
                <Box className="w-5/12">
                  <OasisLabResultInfoCard />
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" className="h-[400px] gap-4">
            개발중
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}
