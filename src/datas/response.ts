export interface CommonResponse<T> {
  msg: string;
  state: "success" | "fail";
  data?: T;
}
