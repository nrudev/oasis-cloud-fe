import { GridColDef } from "@mui/x-data-grid";

const DCAPriceGuideColums: GridColDef[] = [
  {
    field: "id",
    headerName: "회차",
    flex: 0.3,
    headerClassName: "text-slate-500",
  },
  {
    field: "price",
    headerName: "회차별 증거금",
    flex: 1.2,
    headerClassName: "text-slate-500",
  },
  {
    field: "cumulativePrice",
    headerName: "누적 증거금",
    flex: 1,
    headerClassName: "text-slate-500",
  },
  {
    field: "leverageCumulativePrice",
    headerName: "누적 오픈 금액",
    flex: 1.2,
    headerClassName: "text-slate-500",
  },
];

export default DCAPriceGuideColums;
