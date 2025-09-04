import { CardContent } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import { useInfoRanking } from "@/hooks/query/useInfo";
import ProfitRankColumns from "@/tables/ProfitRankColumns";

function ProfitRankCard() {
  const { rankingQuery } = useInfoRanking(365);
  const { isLoading, data: ProfitRankMockRows } = rankingQuery;

  return (
    <Card>
      <CardHeader id="ranking" title="실시간 수익 Top5" />
      <CardContent sx={{ paddingTop: "0", overflow: "auto" }}>
        <DataGrid
          loading={isLoading}
          columns={ProfitRankColumns}
          rows={ProfitRankMockRows ?? []}
          hideFooter
          sx={{
            border: "none",
            "& .MuiDataGrid-cell:focus": {
              outline: "none",
            },
            ".MuiDataGrid-overlayWrapper": { height: "215px" }
          }}
        />
      </CardContent>
    </Card>
  );
}

export default ProfitRankCard;
