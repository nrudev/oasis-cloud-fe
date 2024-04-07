import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton, Menu } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useSetAtom } from "jotai";
import CustomMenuItem from "@/components/basic/CustomMenuItem";
import { selectedPresetAtom } from "@/datas/preset";
import usePreset from "@/hooks/preset/usePreset";

type Props = {
  params: GridRenderCellParams;
};

function PresetTableSettingIcon({ params }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickSettingBtn = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const setSelectedPreset = useSetAtom(selectedPresetAtom);

  const { removePresetMutation } = usePreset();

  return (
    <>
      <IconButton
        id={`settingBtn-${params.id}`}
        aria-controls={open ? `settingMenu-${params.id}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickSettingBtn}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id={`settingMenu-${params.id}`}
        aria-labelledby={`settingBtn-${params.id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          ".MuiMenu-paper": {
            background: "#F3F3F3",
          },
        }}
      >
        <CustomMenuItem>매매 비중 변경</CustomMenuItem>
        <CustomMenuItem
          onClick={() => {
            setSelectedPreset(params.row);
          }}
        >
          프리셋 설정 변경
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => removePresetMutation.mutate(params.row.id)}
        >
          프리셋 삭제
        </CustomMenuItem>
      </Menu>
    </>
  );
}

export default PresetTableSettingIcon;
