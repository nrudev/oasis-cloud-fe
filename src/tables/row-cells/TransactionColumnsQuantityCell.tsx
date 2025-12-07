import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";
import { useAtomValue } from "jotai";

import exchangeAtom from "@/datas/exchange";

function TransactionColumnsQuantityCell(
  params: GridRenderCellParams<GridValidRowModel, BotTransactionQuantity>,
) {
  const { value } = params;
  const exchange = useAtomValue(exchangeAtom);

  return (
    <div>
      <div className="text-[16px] font-bold leading-[18px]">
        {exchange === "bithumb" ? "￦" : "$"}
        {value?.totalPrice.toLocaleString("ko-kr")}
      </div>

      <div className="mt-2 text-[14px] font-bold leading-[16px]">{value?.volume}</div>
    </div>
  );
}

export default TransactionColumnsQuantityCell;
