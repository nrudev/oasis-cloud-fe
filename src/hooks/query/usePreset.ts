import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom, useAtomValue } from "jotai";

import exchangeAtom from "@/datas/exchange";
import api from "@/libs/network";

export function usePresetQuery() {
  const exchangeId = useAtomValue(exchangeAtom);

  const presetQuery = useQuery({
    queryKey: ["getPreset"],
    queryFn: async () => {
      const res = await api.get<ResponseT<Preset.PresetT[]>>(`/preset?exchange=${exchangeId}`);
      return res.data?.data;
    },
  });

  return {
    presetQuery,
  };
}

export function useDefaultPresetQuery() {
  const exchangeId = useAtomValue(exchangeAtom);
  const defaultPresetQuery = useQuery({
    queryKey: ["getDefaultPreset"],
    queryFn: async () => {
      const res = await api.get<ResponseT<Preset.DefaultPresetT[]>>(
        `/default_preset?exchange=${exchangeId}`,
      );
      return res.data?.data;
    },
    select: data => data.map(item => ({ ...item, isDefault: true })),
  });

  return {
    defaultPresetQuery,
  };
}

export function useCombinedPresets() {
  const {
    presetQuery: { data: presets, isLoading: isPresetLoading },
  } = usePresetQuery();

  const {
    defaultPresetQuery: { data: defaultPresets, isLoading: isDefaultPresetLoading },
  } = useDefaultPresetQuery();

  const combinedPresets = [...(presets ?? []), ...(defaultPresets ?? [])];

  return { data: combinedPresets, isLoading: isPresetLoading || isDefaultPresetLoading };
}

export function useIndicatorQuery() {
  const [exchange] = useAtom(exchangeAtom);
  const indicatorQuery = useQuery({
    queryKey: ["getIndicator"],
    queryFn: async () => {
      const res = await api.get<ResponseT<Preset.IndicatorT[]>>("/indicator", {
        params: { exchange },
      });
      return res.data?.data;
    },
  });

  return {
    indicatorQuery,
  };
}

export function usePresetMutation() {
  const queryClient = useQueryClient();
  const postPresetMutation = useMutation({
    mutationFn: async ({ body }: RequestT<Preset.PostPresetBody>) =>
      api.post<ResponseT<void>>("/preset", body),
    mutationKey: ["postPreset"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPreset"] });
    },
  });
  const putPresetMutation = useMutation({
    mutationFn: async ({ id, body }: RequestT<Preset.PostPresetBody> & { id: number }) =>
      api.put<ResponseT<void>>(`/preset/${id}`, body),
    mutationKey: ["putPreset"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPreset"] });
    },
  });
  const deletePresetMutation = useMutation({
    mutationFn: async (id: number) => api.delete<ResponseT<void>>(`/preset/${id}`),
    mutationKey: ["delete"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getPreset"] });
    },
  });
  return {
    postPresetMutation,
    putPresetMutation,
    deletePresetMutation,
  };
}
