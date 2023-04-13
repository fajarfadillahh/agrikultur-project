import { TbLayoutGrid, TbCards, TbInfoSquareRounded } from "react-icons/tb";

export const sidebar_links = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <TbLayoutGrid />,
  },
  {
    key: "swiper",
    label: "Swiper",
    path: "/swiper",
    icon: <TbCards />,
  },
  {
    key: "information",
    label: "Information",
    path: "/information",
    icon: <TbInfoSquareRounded />,
  },
];
