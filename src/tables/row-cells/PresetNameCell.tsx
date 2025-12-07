import { useRouter } from "next/router";

import { IconButton } from "@mui/material";
import { GridRenderCellParams, GridValidRowModel } from "@mui/x-data-grid";

import Icon from "@/components/Icon";

function PresetNameCell(params: GridRenderCellParams<GridValidRowModel, Bot.InfoT["presetName"]>) {
  const { value } = params;

  return (
    <div className="flex items-center">
      <div className="w-4/5 whitespace-normal">{value}</div>
      <IconButtonFun />
    </div>
  );
}

function IconButtonFun() {
  const { push } = useRouter();
  return (
    <IconButton sx={{ width: "24px", height: "24px" }} onClick={() => push("/preset")}>
      <Icon src="/icons/basic/setting.png" width={24} height={24} />
    </IconButton>
  );
}

export default PresetNameCell;
