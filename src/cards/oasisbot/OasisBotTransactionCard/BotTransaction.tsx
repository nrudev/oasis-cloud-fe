import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import NotConnect from "@/components/NotConnect";
import { useBotInfo } from "@/hooks/query/useOasisBot";
import OasisBotTransactionColumns from "@/tables/OasisBotTransactionColumns";

interface Props {
  isConnected: boolean;
}

export default function BotTransaction({ isConnected }: Props) {
  const { transactionQuery } = useBotInfo();
  const { isLoading, data: OasisBotTransactionCompactRows } = transactionQuery;

  const noRowsOverlayWrapper = () => {
    return (
      <NotConnect
        customMessage={
          "아직 거래내역이 없어요\n Bot을 설정해 자동매매가 발생하면\n 자동으로 내역이 나와요"
        }
        connectedMessage={
          "아직 거래내역이 없어요.\nBot을 설정해 자동매매가 발생하면\n자동으로 내역이 나와요."
        }
        isConnected={isConnected}
        hasButton={false}
      />
    );
  };
  return (
    <CardContent sx={{ paddingTop: "0", maxHeight: "450px", overflow: "auto" }}>
      <DataGrid
        loading={isLoading}
        columns={OasisBotTransactionColumns}
        rows={OasisBotTransactionCompactRows ?? []}
        slots={{ noRowsOverlay: noRowsOverlayWrapper }}
        hideFooter
        sx={{ border: "none", ".MuiDataGrid-overlayWrapper": { height: "215px" } }}
      />
    </CardContent>
  );
}
