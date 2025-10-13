import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import NotConnect from "@/components/NotConnect";
import DCAPriceGuideColums from "@/tables/DCAPriceGuideColums";

interface Props {
  price: number;
  leverage: number;
  multiple: number;
  count: number;
}
export default function GuideList({ price, leverage, multiple, count }: Props) {
  const columns = DCAPriceGuideColums;
  let roundPrice = price;
  let roundCumulative = price;
  const rows = Array.from({ length: count }, (_, index) => {
    const row = {
      id: index + 1,
      price: roundPrice,
      cumulativePrice: roundCumulative,
      leverageCumulativePrice: roundCumulative * leverage,
    };

    roundPrice *= multiple;
    roundCumulative = Number(roundPrice) + Number(roundCumulative);
    return row;
  });
  const noRowsOverlayWrapper = () => {
    return (
      <NotConnect
        customMessage={`설정값을 기반으로 \n 회차별 증거금, 누적 증거금, \n 누적 오픈 금액을  시뮬레이션합니다 \n\n 전략 실행 전 자금 소모와 \n 리스크 구조를 한눈에 확인하세요`}
        isConnected={false}
        hasButton={false}
      />
    );
  };
  return (
    <Stack className="h-[320px] w-full overflow-auto">
      <DataGrid
        columns={columns}
        rows={rows}
        //   loading={isLoading}
        //   onRowSelectionModelChange={newRow => setSelectedRow(newRow)}
        //   rowSelectionModel={selectedRow}
        hideFooter
        slots={{ noRowsOverlay: noRowsOverlayWrapper }}
        sx={{
          border: "none",
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        }}
      />
    </Stack>
  );
}
