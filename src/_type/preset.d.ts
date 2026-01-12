declare namespace Preset {
  interface PostPresetBody {
    presetName: string;
    indicatorName: string;
    presetData: string;
    position: string;
    profitCutRate: number;
    lossCutRate: number;
  }
  interface PresetT extends PostPresetBody {
    id: number;
  }
  interface IndicatorT {
    id: number;
    indicatorName: string;
  }
  interface DefaultPresetT extends PostPresetBody {
    id: number;
    exchangeId: number;
    isDefault?: boolean;
  }

  interface PresetDCAT {
    id: number;
    presetName: string;
    profitCutRate: number;
    lossCutRate: number;
    dcaSetting: number;
  }
}
