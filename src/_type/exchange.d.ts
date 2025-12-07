type ExchangeType = "okx" | "binance" | "lbank" | "bithumb" | "upbit";

type ExchangeParams = {
  exchange: ExchangeType;
};

declare namespace ExchangeConnection {
  interface PostOkxOauthTokenBody {
    code: string;
  }

  interface PostSmartAccessResultBody {
    uid: string;
  }
}
