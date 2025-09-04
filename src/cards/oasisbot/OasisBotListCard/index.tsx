import { useRouter } from "next/router";

import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import NotConnect from "@/components/NotConnect";
import DetailChip from "@/components/chip/DetailChip";
import { selectedBotRowAtom } from "@/datas/oasisbotTransaction";
import { useBotQuery } from "@/hooks/query/useOasisBot";
import OasisBotListColumns from "@/tables/OasisBotListColumns";

interface Props {
  nav: string;
  isConnected: boolean;
}

function NoRowsOverlayWrapper({ isConnected }: Omit<Props, "nav">) {
  return (
    <NotConnect
      customMessage={
        "아직 거래소가 연동되지 않았어요\n 거래소를 연동 후 원하는\n Bot을 설정해 자동매매를 시작해 보세요"
      }
      isConnected={isConnected}
    />
  );
}

export default function OasisBotListCard({ nav, isConnected }: Props) {
  const [selectedRow, setSelectedRow] = useAtom(selectedBotRowAtom);
  const columns = OasisBotListColumns;
  const {
    botListQuery: { data, isLoading },
  } = useBotQuery();

  const router = useRouter();
  return (
    <Card>
      <CardHeader id="setting" title="실행중인 Bot 목록" />
      <CardContent sx={{ paddingTop: "0", maxHeight: "400px", overflow: "auto" }}>
        <DataGrid
          columns={columns}
          rows={nav === "dashboard" ? (data?.slice(0, 5) ?? []) : (data ?? [])}
          loading={isLoading}
          onRowSelectionModelChange={newRow => setSelectedRow(newRow)}
          rowSelectionModel={selectedRow}
          hideFooter
          slots={{ noRowsOverlay: NoRowsOverlayWrapper }}
          sx={{
            ".MuiDataGrid-overlayWrapper": { height: "215px" },
            border: "none",
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
          }}
        />
      </CardContent>
      {isConnected && nav === "dashboard" && (
        <CardFooter>
          <DetailChip onClick={() => router.push("/oasisbot")} />
        </CardFooter>
      )}
    </Card>
  );
}
