import { atom } from "jotai";

const exchangeAtom = atom<ExchangeType>("bithumb");
exchangeAtom.debugLabel = "exchangeAtom";

export default exchangeAtom;
