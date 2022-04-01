import { ReactElement } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export type SideBarData = {
    title: string;
    path: string;
    icon: ReactElement;
};

export const sideBarData: SideBarData[] = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "Products",
        path: "/products",
        icon: <FaIcons.FaShoppingBag />,
    },
    {
        title: "Detail",
        path: "/detail",
        icon: <IoIcons.IoIosPaper />,
    },
    {
        title: "Manage",
        path: "/manage",
        icon: <FaIcons.FaCartPlus />,
    },
];
