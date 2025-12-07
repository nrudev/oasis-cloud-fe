import { useState } from "react";

import { Box, Menu, Stack } from "@mui/material";
import { useAtom } from "jotai";

import CustomMenu from "@/cards/dashboard/ChartBotCard/CustomMenu";
import PanelDescription from "@/cards/dashboard/ChartBotCard/PanelDescription";
import Icon from "@/components/Icon";
import exchangeAtom from "@/datas/exchange";

interface Props {
  setMenuId: React.Dispatch<React.SetStateAction<number>>;
  menuId: number;
  chart: Account.BotResultChartT[];
}
export default function Panel({ setMenuId, menuId, chart }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [exchange] = useAtom(exchangeAtom);
  const open = Boolean(anchorEl);
  const listItem = [];
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  for (let index = 0; index < chart.length; index += 1) {
    listItem.push(
      <CustomMenu
        key={index}
        id={index}
        setMenuId={setMenuId}
        coinName={chart[index].coinName}
        presetName={chart[index].presetName}
        totalProfitRate={chart[index].totalProfitRate}
        exchange={exchange}
      />,
    );
  }

  return (
    <Box width={1}>
      <Stack
        direction="row"
        className="w-[380px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#898FC3] p-4"
        onClick={handleClick}
      >
        <PanelDescription
          coinName={chart.length > 0 ? chart[menuId].coinName : ""}
          presetName={chart.length > 0 ? chart[menuId].presetName : ""}
          totalProfit={chart.length > 0 ? chart[menuId].totalProfit : 0}
          totalProfitRate={chart.length > 0 ? chart[menuId].totalProfitRate : 0}
          exchange={exchange}
        />
        <Stack direction="row" spacing={2}>
          <Stack justifyContent="center" alignItems="center">
            <Icon src="/icons/arrow/down-circle.png" width={20} height={20} />
          </Stack>
        </Stack>
      </Stack>
      <Menu
        anchorEl={anchorEl}
        open={open}
        keepMounted
        onClose={handleClose}
        onClick={handleClose}
        transitionDuration={0}
        // disableRestoreFocus={true}
        sx={{
          "& .MuiPaper-root": {
            bgcolor: "transparent",
            boxShadow: "none",
            width: anchorEl && anchorEl.offsetWidth,
            maxHeight: 200, // 메뉴의 최대 높이 설정
          },
        }}
      >
        <Stack gap={1}>{listItem}</Stack>
      </Menu>
    </Box>
  );
}
