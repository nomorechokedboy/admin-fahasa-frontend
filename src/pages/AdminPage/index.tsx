import Header from "@/layout/Header";
import Sidebar from "@/layout/SideBar";
import { getNotificationState } from "@/redux/admin";
import clx from "classnames";
import { lazy, memo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../ProductPage";
import styles from "./styles.module.scss";
const NotificationDialog = lazy(
    () => import("@/components/NotificationDiaglog"),
);

const AdminPage = memo(() => {
    console.log("AdminPage render");
    const notification = useSelector(getNotificationState);

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className={styles.container}>
                <Header />
                <main className={clx(styles.main)}>
                    <Routes>
                        <Route index element={<></>} />
                        <Route path="manage" element={<></>} />
                        <Route path="products/*" element={<ProductPage />} />
                        <Route path="detail" element={<></>} />
                        <Route
                            path="*"
                            element={<p>There's nothing here: 404!</p>}
                        />
                    </Routes>
                </main>
            </div>
            {/* {notification.messages.length !== 0 && (
                <div className={styles.notifications}>
                    {notification.messages.map((message) => (
                        <NotificationDialog message={message} />
                    ))}
                </div>
            )} */}
        </div>
    );
});

export default AdminPage;
