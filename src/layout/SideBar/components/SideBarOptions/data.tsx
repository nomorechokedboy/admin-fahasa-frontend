import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const sideBarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "Products",
        path: "/products",
        icon: <FaIcons.FaShoppingBag />,
    },
    {
        title: "Manage",
        path: "/manage",
        icon: <FaIcons.FaCartPlus />,
    },
];
