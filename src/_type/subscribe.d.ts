declare namespace Subscribe {
  interface PostSubscribeBody {
    productId: number;
    promotionCode?: string;
  }
  interface SubscribeT {
    subscribeId: number;
    productName: string;
    productMonth: Subscribe.ProductMonth;
    expiryDate: string;
    useCoupon?: boolean;
  }
  interface PromotionT {
    code: string;
  }

  type ProductKey = "free" | "basic" | "premium";
  type ProductMonth = 0 | 1 | 3;
  interface ProductT {
    productId: number;
    productName: string;
    productPrice: number;
  }
}
