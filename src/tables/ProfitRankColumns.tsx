import { GridColDef, GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import CoinIcon from "@/components/Icon/CoinIcon";
import Chip from "@/components/chip";
import TimeConvert from "@/components/table/timeConvert";
import MarketCell from "@/tables/row-cells/MarketCell";
import ProfitRankColumnsAccumulatedProfitCell from "@/tables/row-cells/ProfitRankColumnsAccumulatedProfitCell";
import ProfitRankColumnsUserCell from "@/tables/row-cells/ProfitRankColumnsUserCell";

const ProfitRankColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "순위",
    flex: 0.5,
    headerClassName: "text-slate-500",
    renderCell: index => index.api.getRowIndexRelativeToVisibleRows(index.row),
  },
  {
    field: "user",
    headerName: "닉네임",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, ProfitRank["user"]>) => (
      <ProfitRankColumnsUserCell {...params} />
    ),
  },
  {
    field: "accumulatedProfit",
    headerName: "누적수익률",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (
      params: GridRenderCellParams<GridValidRowModel, ProfitRank["accumulatedProfit"]>,
    ) => <ProfitRankColumnsAccumulatedProfitCell {...params} />,
  },
  {
    field: "market",
    headerName: "거래소",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, ProfitRank["market"]>) => (
      <MarketCell {...params} />
    ),
  },
  {
    field: "item",
    headerName: "종목",
    flex: 0.5,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, ProfitRank["item"]>) => (
      <div className="whitespace-normal">
        <CoinIcon coin={params.value} wsize={20} hsize={20} />
      </div>
    ),
  },
  {
    field: "period",
    headerName: "운영기간",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, ProfitRank["period"]>) => (
      <div className="whitespace-normal">{TimeConvert(Number(params.value))}</div>
    ),
  },
  {
    field: "",
    headerName: "유저 프리셋",
    flex: 0.7,
    headerClassName: "text-slate-500",
    renderCell: () => (
      <Chip
        className="mx-2 w-full bg-neutral-600 font-bold text-white hover:bg-brand"
        label="복사"
        onClick={() => console.log("유저 프리셋 복사 버튼 클릭")}
      />
    ),
  },
];

export default ProfitRankColumns;
