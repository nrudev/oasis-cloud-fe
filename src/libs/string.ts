function numberToCurrency(number: number | string, currency: string = "$") {
  // This function is used to split a number into currency format.
  // For example, 1234567.89 will be converted to $1,234,567.89.
  let n = number;
  if (typeof number === "string") {
    n = parseFloat(number);
  }
  return `${currency} ${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function dateToKorean(date: Date) {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function datetimeToKorean(dateStr?: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr);

  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`;
}

const exchangeToKorean = (market: ExchangeType | undefined) => {
  switch (market) {
    case "upbit":
      return "업비트";
    case "okx":
      return "OKX";
    case "bithumb":
      return "빗썸";
    default:
      return "";
  }
};

const createRandomString = (length: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  Array.from({ length }).forEach(() => {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  });
  return result;
};

const numberSlice = (number: number | undefined, slice: number) => {
  if (number === undefined) return "0";
  const numberString = number.toString();
  const [integer, decimal] = numberString.split(".");
  if (decimal === undefined) return numberString;
  return `${integer}.${decimal.slice(0, slice)}`;
};

const sliceOnlyProductName = (productName: string) =>
  productName
    .match(/[A-Za-z]+/g)
    ?.join(" ")
    .toLowerCase();

const truncateDecimalPoints = (number: number | string, decimalPoints: number) => {
  const multiplier = 10 ** decimalPoints;
  return Math.floor(typeof number === "number" ? number : Number(number) * multiplier) / multiplier;
};

export {
  createRandomString,
  datetimeToKorean,
  dateToKorean,
  exchangeToKorean,
  numberSlice,
  numberToCurrency,
  sliceOnlyProductName,
  truncateDecimalPoints,
};
