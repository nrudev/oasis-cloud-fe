interface MenuDetail {
  id: MenuDetailIdType;
  name: string;
  path: string;
}

interface SideMenuType {
  title: string;
  detail?: MenuDetail[];
}

const sideMenu: SideMenuType[] = [
  {
    title: "시스템",
    detail: [
      {
        id: "dashboard",
        name: "대시보드",
        path: "/dashboard",
      },
      {
        id: "oasisbot",
        name: "오아시스Bot",
        path: "/oasisbot",
      },
      { id: "oasislab", name: "오아시스 연구소", path: "/oasislab" },
    ],
  },
  {
    title: "세팅",
    detail: [
      { id: "api", name: "API 연결", path: "/api-connection" },
      { id: "preset", name: "프리셋 설정", path: "/preset" },
    ],
  },
  {
    title: "이용",
    detail: [
      { id: "mypage", name: "마이페이지", path: "/mypage" },
      { id: "subscribe", name: "서비스 구독하기", path: "/subscribe" },
      { id: "notice", name: "3분 만에 OKX 입금", path: "/withdraw-guide" },
    ],
  },
];

export { sideMenu };
export type { MenuDetail, SideMenuType };
