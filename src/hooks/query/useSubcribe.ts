import { useMutation, useQuery } from "@tanstack/react-query";

import api from "@/libs/network";

export function useSubscribeQuery() {
  const subscribeQuery = useQuery({
    queryKey: ["getSubscribe"],
    queryFn: async () => {
      const res = await api.get<ResponseT<Subscribe.SubscribeT>>("/subscribe");
      return res.data?.data;
    },
  });
  return { subscribeQuery };
}

export function useSuspendedSubscribeQuery() {
  const suspendedSubscribeQuery = useQuery({
    queryKey: ["getSuspendedSubscribe"],
    queryFn: async () => {
      const res = await api.get<ResponseT<Subscribe.SubscribeT>>("/subscribe/suspend");
      return res.data?.data;
    },
  });
  return { suspendedSubscribeQuery };
}

export function useProductQuery() {
  const productQuery = useQuery({
    queryKey: ["getProduct"],
    queryFn: async () => {
      const res = await api.get<ResponseT<Subscribe.ProductT[]>>("/product");
      return res.data?.data;
    },
  });
  return {
    productQuery,
  };
}

export function useSubscribeMutation() {
  const postSubscribeMutation = useMutation({
    mutationFn: async ({ body }: RequestT<Subscribe.PostSubscribeBody>) =>
      api.post<ResponseT<void>>("/subscribe", {
        ...body,
        promotionCode: body.promotionCode || "",
      }),
    mutationKey: ["postSubscribe"],
  });
  const deleteSubscribeMutation = useMutation({
    mutationFn: async (id: number) => {
      await api.delete<ResponseT<void>>(`/subscribe?id=${id}`);
    },
    mutationKey: ["deleteSubscribe"],
  });
  return {
    postSubscribeMutation,
    deleteSubscribeMutation,
  };
}

export function usePromotionMutation() {
  const postPromotionMutation = useMutation({
    mutationFn: async ({ body }: RequestT<Subscribe.PromotionT>) =>
      api.post<ResponseT<Subscribe.SubscribeT>>("/subscribe/promote", { ...body }),
    mutationKey: ["postPromotion"],
  });

  return { postPromotionMutation };
}
