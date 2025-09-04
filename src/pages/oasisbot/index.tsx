import { useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";
import { useAtomValue } from "jotai";

import OasisBotListCard from "@/cards/oasisbot/OasisBotListCard";
import OasisBotRunCard from "@/cards/oasisbot/OasisBotRunCard";
import OasisBotSelectCard from "@/cards/oasisbot/OasisBotSelectCard";
import OasisBotTotalCardList from "@/cards/oasisbot/OasisBotTotalCard/list";
import OasisBotTransactionCard from "@/cards/oasisbot/OasisBotTransactionCard";
import { selectedBotRowAtom } from "@/datas/oasisbotTransaction";
import { useUserExchangesQuery } from "@/hooks/query/useApiConnection";
import { useBotDetailQuery } from "@/hooks/query/useOasisBot";
import Carousel from "@/layouts/Carousel";
import Layout from "@/layouts/Layout";

function OasisBot() {
  const selectedRow = useAtomValue(selectedBotRowAtom);
  const { botDetailQuery } = useBotDetailQuery(selectedRow[0]);
  const { data: botData } = botDetailQuery;

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
        <Stack direction="row" className="w-full gap-4">
          <Stack className="w-4/6 gap-4">
            <Stack direction="row" className="h-[495px] gap-4">
              <Box className="w-2/5">
                {botData?.id ? (
                  <OasisBotSelectCard />
                ) : (
                  <OasisBotRunCard isConnected={isConnected} />
                )}
              </Box>
              <Box className="h-[495px] w-3/5 gap-4">
                <OasisBotListCard nav="oasisbot" isConnected={isConnected} />
              </Box>
            </Stack>
            <Stack direction="row" className="h-[540px] gap-4">
              <OasisBotTransactionCard isConnected={isConnected} />
            </Stack>
          </Stack>
          <Stack className="w-2/6 gap-4">
            <OasisBotTotalCardList />
          </Stack>
        </Stack>
      </Carousel>
    </Layout>
  );
}

export default OasisBot;
