import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";
import { useAtomValue } from "jotai";

import exchangeAtom from "@/datas/exchange";

function StartBalanceCell(
  params: GridRenderCellParams<GridValidRowModel, Bot.InfoT["runningTime"]>,
) {
  const exchange = useAtomValue(exchangeAtom);
  const { value } = params;
  return (
    <div className="whitespace-normal">
      {exchange === "bithumb" ? "₩" : "$"} {value}
    </div>
  );
}

export default StartBalanceCell;
