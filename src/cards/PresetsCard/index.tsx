import React from "react";
import Image from "next/image";
import { CardActions, CardContent, Chip, IconButton } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import CustomSwitch from "@/components/CustomSwitch";
import useCurrencySelect from "@/hooks/common/useCurrencySelect";
import useMarketSelect from "@/hooks/common/useMarketSelect";
import usePriceStatusSelect from "@/hooks/common/usePriceStatusSelect";

const columns: GridColDef[] = [
  {
    field: "presetName",
    headerName: "프리셋 이름",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
      <div className="flex items-center">
        <div className="w-4/5 whitespace-normal">{params.value}</div>
        <IconButton sx={{ width: "24px", height: "24px" }}>
          <Image
            src="/icons/basic/setting.png"
            alt="세팅"
            width={24}
            height={24}
          />
        </IconButton>
      </div>
    ),
  },
  {
    field: "executeBudget",
    headerName: "실행 금액",
    flex: 1,
    headerClassName: "text-slate-500",
  },
  {
    field: "operationPeriod",
    headerName: "운영 기간",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
      <div className="whitespace-normal">{params.value}</div>
    ),
  },
  {
    field: "stockItem",
    headerName: "종목",
    flex: 1,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, string>) => (
      <div className="whitespace-normal">{params.value}</div>
    ),
  },
  {
    field: "status",
    headerName: "상태",
    flex: 0.5,
    headerClassName: "text-slate-500",
    renderCell: (params: GridRenderCellParams<GridValidRowModel, boolean>) => (
      <CustomSwitch defaultChecked={params.value} />
    ),
  },
];

const rows = [
  {
    id: 1,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: true,
  },
  {
    id: 2,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: true,
  },
  {
    id: 3,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: false,
  },
  {
    id: 4,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: false,
  },
  {
    id: 5,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: false,
  },
  {
    id: 6,
    presetName: "상승장 프리셋임",
    executeBudget: "₩ 1,000,000,000",
    operationPeriod: "365일 12시간 34분 56초",
    stockItem: "STARXEA USDT",
    status: false,
  },
];

function PresetsCard() {
  const { priceStatus, PriceStatusSelect } = usePriceStatusSelect();
  const { currency, CurrencySelect } = useCurrencySelect();
  const { market, MarketSelect } = useMarketSelect();

  return (
    <Card>
      <CardHeader
        id="setting"
        title="실행중인 프리셋 목록"
        action={
          <>
            <PriceStatusSelect />
            <CurrencySelect />
            <MarketSelect />
          </>
        }
      />
      <CardContent
        sx={{ paddingTop: "0", maxHeight: "290px", overflow: "auto" }}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          hideFooter
          sx={{ border: "none" }}
        />
      </CardContent>
      <CardActions className="flex justify-center mt-3">
        <Chip
          label="자세히 보기"
          variant="outlined"
          onClick={() => console.log("clicked")}
        />
      </CardActions>
    </Card>
  );
}

export default PresetsCard;
