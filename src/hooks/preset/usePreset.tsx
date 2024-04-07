import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addNewPreset,
  getIndicators,
  getPresets,
  removePreset,
  updatePreset,
} from "@/apis/presets";
import { Indicator, Preset } from "@/datas/preset";

function usePreset() {
  const queryClient = useQueryClient();

  const { data: presetData, isLoading: isPresetLoading } = useQuery({
    queryKey: ["presets"],
    queryFn: getPresets,
    select: data => {
      if (data.data.state === "success") {
        return data.data.data ? data.data.data : [];
      }
      return [];
    },
  });

  const { data: indicators, isLoading: isIndicatorsLoading } = useQuery({
    queryKey: ["indicators"],
    queryFn: getIndicators,
    select: data => {
      if (data.data.state === "success") {
        return data.data.data
          ? data.data.data.map((item: Indicator) => ({
              value: item.indicatorName,
            }))
          : [];
      }
      return [];
    },
  });

  const addPresetMutation = useMutation({
    mutationFn: addNewPreset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["presets"] });
    },
  });

  const updatePresetMutation = useMutation({
    mutationFn: ({ presetId, body }: { presetId: number; body: Preset }) =>
      updatePreset(presetId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["presets"] });
    },
  });

  const removePresetMutation = useMutation({
    mutationFn: (presetId: string) => removePreset(presetId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["presets"] });
    },
  });

  return {
    presetData,
    isPresetLoading,
    indicators,
    isIndicatorsLoading,
    addPresetMutation,
    updatePresetMutation,
    removePresetMutation,
  };
}

export default usePreset;
