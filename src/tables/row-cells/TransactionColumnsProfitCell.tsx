import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import ProfitChip from "@/components/chip/ProfitChip";

function TransactionColumnsProfitCell(
  params: GridRenderCellParams<GridValidRowModel, BotTransactionProfit>,
  exchange?: ExchangeType,
) {
  const { value } = params;

  return (
    <div>
      <div
        className={`whitespace-normal ${value?.profitLoss && value.profitLoss > 0 ? "text-sub-3" : ""}`}
      >
        {value?.profitLoss ? (exchange === "bithumb" ? "￦" : "$") : ""}
        <span className="text-ellipsis font-bold">
          {value?.profitLoss.toLocaleString("ko-kr") ?? "-"}
        </span>
      </div>
      {value?.profitLossRate && <ProfitChip rate={value?.profitLossRate} />}
    </div>
  );
}

export default TransactionColumnsProfitCell;
