import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import PresetTableSettingIcon from "@/components/preset/PresetTableSettingIcon";

function usePresetTable() {
  const columns: GridColDef[] = [
    {
      field: "presetName",
      headerName: "프리셋",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "indicatorName",
      headerName: "설정 보조지표",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "profitCutRate",
      headerName: "익절율",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lossCutRate",
      headerName: "손절율",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "setting",
      headerName: "세팅",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: params => {
        return <PresetTableSettingIcon params={params} />;
      },
    },
  ];

  return { columns };
}

export default usePresetTable;
