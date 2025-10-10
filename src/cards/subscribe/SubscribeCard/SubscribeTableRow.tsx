import { TableCell, Typography } from "@mui/material";

export type TableRowType =
  | "oasislab"
  | "activebot"
  | "getasset"
  | "oasisbot"
  | "exchange"
  | "api-connection"
  | "preset"
  | "partner";

export const tableRowData: TableRowType[] = [
  "activebot",
  "getasset",
  "oasisbot",
  "exchange",
  "api-connection",
  "preset",
  "partner",
  "oasislab",
];

export default function TableRowMeta({ type }: { type: TableRowType }) {
  switch (type) {
    case "oasislab":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            연구실
            <br />
          </Typography>
          <Typography variant="200R" className="text-font-1">
            AI 시장 분석 및 백테스트
          </Typography>
        </TableCell>
      );
    case "activebot":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            활성화 봇 (제한)
          </Typography>
        </TableCell>
      );
    case "getasset":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            실시간 자산 조회
          </Typography>
        </TableCell>
      );
    case "oasisbot":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            봇
            <br />
          </Typography>
          <Typography variant="200R" className="text-font-1">
            자동거래
          </Typography>
        </TableCell>
      );
    case "exchange":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            거래소
          </Typography>
        </TableCell>
      );
    case "api-connection":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            원 클릭 API 연동
            <br />
          </Typography>
          <Typography variant="200R" className="text-font-1">
            스마트엑세스
          </Typography>
        </TableCell>
      );
    case "preset":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            프리셋(세팅) 제작
          </Typography>
        </TableCell>
      );
    case "partner":
      return (
        <TableCell className="text-center">
          <Typography variant="300B" className="text-font-1">
            제휴 거래소 가입
          </Typography>
        </TableCell>
      );
    default:
      return <TableCell />;
  }
}
