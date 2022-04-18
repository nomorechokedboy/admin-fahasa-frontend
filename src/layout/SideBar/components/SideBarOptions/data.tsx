import {
    DASHBOARD,
    TO_EMPLOYEES,
    TO_ORDERS,
    TO_PRODUCTS,
    TO_REVIEWS,
} from "@/configs";
import {
    BsChatRightTextFill,
    BsFillFileEarmarkPersonFill,
} from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { MdHome, MdShoppingBag } from "react-icons/md";

export const sideBarData = [
    {
        title: "Dashboard",
        path: DASHBOARD,
        icon: <MdHome size={24} />,
    },
    {
        title: "Products",
        path: TO_PRODUCTS,
        icon: <MdShoppingBag size={24} />,
    },
    {
        title: "Orders",
        path: TO_ORDERS,
        icon: <HiShoppingCart size={24} />,
    },
    {
        title: "Employees",
        path: TO_EMPLOYEES,
        icon: <BsFillFileEarmarkPersonFill size={24} />,
    },
    {
        title: "Reviews",
        path: TO_REVIEWS,
        icon: <BsChatRightTextFill size={24} />,
    },
];
