import { useState } from "react";

import { Box } from "@mui/material";

import Card from "@/cards/Card";
import CustomChart from "@/cards/dashboard/ChartBotCard/CustomChart";
import Panel from "@/cards/dashboard/ChartBotCard/Panel";
import { useDashboardChart } from "@/hooks/query/useChart";

import NotConnectPanel from "./NotConnectPanel";

interface Props {
  isConnected: boolean;
}
export default function ChartBotCard({ isConnected }: Props) {
  const { dashboardChartQuery } = useDashboardChart();
  const { data: chartItem } = dashboardChartQuery;
  const chart = chartItem || [];
  const [menuId, setMenuId] = useState(0);

  return (
    <Card>
      <Box p={2}>
        {isConnected === true ? (
          <Panel setMenuId={setMenuId} menuId={menuId} chart={chart} />
        ) : (
          <NotConnectPanel />
        )}
      </Box>
      <CustomChart
        date={chart.length > 0 ? chart[menuId].chartData.date : []}
        price={chart.length > 0 ? chart[menuId].chartData.price : []}
        rate={chart.length > 0 ? chart[menuId].chartData.rate : []}
      />
    </Card>
  );
}
