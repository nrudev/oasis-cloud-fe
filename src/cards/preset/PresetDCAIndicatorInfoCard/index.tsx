import Image from "next/image";

import { CardContent, Chip } from "@mui/material";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import Chart from "@/cards/preset/PresetDCAIndicatorInfoCard/DCAChart.png";
import ArrowUpIcon from "@/components/Icon/ArrowUpIcon";
import IndicatorChip from "@/components/chip/IndicatorChip";

import Description from "./Description";

export default function PresetDCAIndicatorInfoCard() {
  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardHeader id="dca-setting" title="DCA 보조지표 설명" />
      <CardContent className="flex h-full w-full flex-col">
        <Image src={Chart} alt="프리셋 설정 이미지" width={725} height={200} className="w-full" />

        <Description
          title="설정 보조지표"
          label={
            <>
              <IndicatorChip label="DCA마틴" color="blue" />
              <Chip
                icon={<ArrowUpIcon />}
                label="모든 시장에 효과적"
                variant="outlined"
                sx={{
                  borderColor: "#B8B8B8",
                  pl: 0.5, // chip 왼쪽 전체 패딩
                  pr: 0.5, // chip 오른쪽 전체 패딩
                  "& .MuiChip-label": {
                    px: 0.5, // 라벨 내부 좌우 패딩 줄임
                  },
                }}
              />
            </>
          }
          content="많이 떨어질수록 더욱 많은 분할 매수! 반등 한번이면 손실 복구하고 이익까지 확보하는 전략"
        />
      </CardContent>
    </Card>
  );
}
