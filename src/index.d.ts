// layout
type LayoutColorType = "white" | "black";
type MenuDetailIdType =
  | "dashboard"
  | "oasisbot"
  | "oasislab"
  | "api"
  | "exchange"
  | "preset"
  | "mypage"
  | "subscribe"
  | "notice";

// icons
type HappinessType = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type DashboardIdType =
  | "bar-graph"
  | "bot-start"
  | "history"
  | "lab"
  | "lab-on"
  | "lab-result"
  | "pie-chart"
  | "ranking"
  | "rise-arrow"
  | "setting"
  | "transaction"
  | "wallet"
  | "counting"
  // 여기부터 신규추가
  | "total"
  | "bot-transaction"
  | "profit-rate"
  | "winning-rate"
  | "copied-presets"
  | "dca-setting";

type SocialType = "linkedin" | "facebook" | "naver" | "kakao";

// agreement
type AgreementType = "over14" | "service" | "privacy" | "marketing";

// oasislab
type OasisLabIdType = "set" | "current" | "max";

// bot transaction
interface BotTransaction {
  id: number;
  market: string;
  coinName: string;
  profit: BotTransactionProfit;
  tradeTime: string;
  status: string;
  quantity: BotTransactionQuantity;
  price: BotTransactionPrice;
}

interface BotTransactionProfit {
  profitLoss: number;
  profitLossRate: number;
}

interface BotTransactionQuantity {
  totalPrice: number;
  volume: number;
}

interface BotTransactionPrice {
  startBalance: number;
  presetName: string;
}

// profit
interface ProfitRank {
  id: number;
  user: {
    icon: string;
    nickname: string;
  };
  accumulatedProfit: number;
  market: ExchangeType;
  item: string;
  period: string;
}

// transaction
interface RealtimeTransaction {
  id: number;
  presetName: string;
  coinName: string;
  sellInfo: {
    exchange: ExchangeType;
    price: number;
    date: string;
  };
  buyInfo: {
    exchange: ExchangeType;
    price: number;
    date: string;
  };
}

interface SelectItem {
  label: string;
  value: string | number;
}

interface Window {
  gtag: any;
}
