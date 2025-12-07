import Icon from ".";

const exchangeToIcon = (exchange: ExchangeType | undefined): string => {
  switch (exchange) {
    case "upbit":
      return "/icons/exchange/upbit.png";
    case "okx":
      return "/icons/exchange/okx.png";
    case "binance":
      return "/icons/exchange/binance.png";
    case "lbank":
      return "/icons/exchange/lbank.png";
    case "bithumb":
      return "/icons/exchange/bithumb.png";
    default:
      return "";
  }
};

interface ExchangeIconProps {
  exchange: ExchangeType | undefined;
  width?: number;
  height?: number;
}

export default function ExchangeIcon({ exchange, width = 24, height = 24 }: ExchangeIconProps) {
  return <Icon src={exchangeToIcon(exchange)} width={width} height={height} />;
}
