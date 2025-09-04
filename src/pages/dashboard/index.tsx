import { useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";

import AdvertisementCard from "@/cards/dashboard/AdvertisementCard";
import AssetStatusCard from "@/cards/dashboard/AssetStatusCard";
import BotTransactionCard from "@/cards/dashboard/BotTransactionCard";
import CircleChartCard from "@/cards/dashboard/ChartAssetCard/index";
import ChartCard from "@/cards/dashboard/ChartBotCard";
import ProfitRankCard from "@/cards/dashboard/ProfitRankCard";
import OasisBotListCard from "@/cards/oasisbot/OasisBotListCard";
import { useUserExchangesQuery } from "@/hooks/query/useApiConnection";
import Carousel from "@/layouts/Carousel/index";
import Layout from "@/layouts/Layout";

export default function Home() {
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
      <Carousel minWidth={1400}>
        <Stack className="gap-4">
          <Stack direction="row" className="h-[340px] gap-4">
            <AssetStatusCard isConnected={isConnected} />
            <CircleChartCard />
            <AdvertisementCard />
          </Stack>
          <Stack direction="row" className="h-[436px] gap-4">
            <Box className="w-7/12">
              <ChartCard isConnected={isConnected} />
            </Box>
            <Box className="w-5/12">
              <OasisBotListCard nav="dashboard" isConnected={isConnected} />
            </Box>
          </Stack>
          <Stack direction="row" className="h-[436px] gap-4">
            <Box className="w-5/12">
              <BotTransactionCard isConnected={isConnected} />
            </Box>
            <Box className="w-7/12">
              <ProfitRankCard />
            </Box>
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}
