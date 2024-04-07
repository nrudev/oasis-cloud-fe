import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import usePreset from "@/hooks/preset/usePreset";
import usePresetTable from "@/hooks/preset/usePresetTable";

function PresetTable() {
  const { presetData, isPresetLoading } = usePreset();
  const { columns } = usePresetTable();

  return (
    <Box className="bg-white rounded-md">
      <DataGrid
        className="font-roboto"
        columns={columns}
        rows={presetData || []}
        loading={isPresetLoading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        autoHeight
      />
    </Box>
  );
}

export default PresetTable;
