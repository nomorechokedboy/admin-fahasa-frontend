import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const sideBarData = [
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
