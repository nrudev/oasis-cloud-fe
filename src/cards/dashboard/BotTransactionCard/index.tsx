import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import NotConnect from "@/components/NotConnect";
import { useBotInfo } from "@/hooks/query/useOasisBot";
import OasisBotTransactionCompactColumns from "@/tables/OasisBotTransactionCompactColumns";

interface Props {
  isConnected: boolean;
}

function NoRowsOverlayWrapper({ isConnected }: Props) {
  return (
    <NotConnect
      customMessage={
        "아직 거래소가 연동되지 않았어요\n 거래소를 연동 후 원하는 Bot을 설정해\n 거래소별 자동매매 수익률을 실시간으로 확인해 보세요 "
      }
      isConnected={isConnected}
    />
  );
}
function BotTransactionCard() {
  const { transactionQuery } = useBotInfo();
  const { isLoading, data: OasisBotTransactionCompactMockRows } = transactionQuery;

  return (
    <Card>
      <CardHeader id="history" title="오아시스 BOT 실시간 거래내역" />
      <CardContent
        sx={{
          paddingTop: "0",
          maxHeight: "310px",
          overflow: "auto",
        }}
      >
        <DataGrid
          loading={isLoading}
          columns={OasisBotTransactionCompactColumns}
          rows={OasisBotTransactionCompactMockRows ?? []}
          slots={{ noRowsOverlay: NoRowsOverlayWrapper }}
          hideFooter
          sx={{
            border: "none",
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            ".MuiDataGrid-overlayWrapper": { height: "215px" },
          }}
        />
      </CardContent>
      {/* <CardFooter>
        <DetailChip onClick={() => console.log("clicked")} />
      </CardFooter> */}
    </Card>
  );
}

export default BotTransactionCard;
