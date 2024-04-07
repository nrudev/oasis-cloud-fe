import { atom } from "jotai";

interface Preset {
  id?: number;
  presetName: string;
  indicatorName: string;
  presetData?: string; // 별도의 인터페이스로 분리
  position: string;
  profitCutRate: number;
  lossCutRate: number;
  setting?: string;
}

interface Indicator {
  id: number;
  indicatorName: string;
}

const selectedPresetAtom = atom<Preset>({
  id: 0,
  presetName: "",
  indicatorName: "TD_Sequential",
  position: "long",
  profitCutRate: 0,
  lossCutRate: 0,
});

export type { Preset, Indicator };
export { selectedPresetAtom };
