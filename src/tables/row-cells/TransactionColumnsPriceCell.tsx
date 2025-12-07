import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";
import { useAtomValue } from "jotai";

import exchangeAtom from "@/datas/exchange";

function TransactionColumnsPriceCell(
  params: GridRenderCellParams<GridValidRowModel, BotTransactionPrice>,
) {
  const { value } = params;
  const exchange = useAtomValue(exchangeAtom);

  return (
    <div>
      <div className="text-[16px] font-bold leading-[18px]">
        {exchange === "bithumb" ? "￦" : "$"}
        {value?.startBalance.toLocaleString("ko-kr")}
      </div>
      <div className="mt-2 whitespace-normal">{value?.presetName}</div>
    </div>
  );
}

export default TransactionColumnsPriceCell;
