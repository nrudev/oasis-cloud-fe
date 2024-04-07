import { AxiosResponse } from "axios";
import api from "@/apis/network";
import { Indicator, Preset } from "@/datas/preset";
import { CommonResponse } from "@/datas/response";

function getPresets(): Promise<AxiosResponse<CommonResponse<Preset[]>>> {
  return api.get("/preset");
}

function getIndicators(): Promise<AxiosResponse<CommonResponse<Indicator[]>>> {
  return api.get("/indicator");
}

function addNewPreset(): Promise<AxiosResponse<CommonResponse<void>>> {
  return api.post("/preset", {
    presetName: "신규 프리셋",
    indicatorName: "TD_Sequential",
    presetData: "",
    position: "long",
    profitCutRate: 0.2,
    lossCutRate: -1.0,
  });
}

function updatePreset(
  presetId: number,
  body: Preset,
): Promise<AxiosResponse<CommonResponse<void>>> {
  return api.put(`/preset/${presetId}`, body);
}

function removePreset(
  presetId: string,
): Promise<AxiosResponse<CommonResponse<void>>> {
  return api.delete(`/preset/${presetId}`);
}

export { getPresets, getIndicators, addNewPreset, updatePreset, removePreset };
