import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const sideBarData = [
    {
        title: "Home",
        path: "/admin",
        icon: <AiIcons.AiFillHome />,
    },
    {
        title: "Products",
        path: "/admin/products",
        icon: <FaIcons.FaShoppingBag />,
    },
    {
        title: "Manage",
        path: "/admin/manage",
        icon: <FaIcons.FaCartPlus />,
    },
];
