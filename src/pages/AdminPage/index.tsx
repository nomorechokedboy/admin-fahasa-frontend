import NotificationDialog from "@/components/NotificationDiaglog";
import AddForm from "@/containers/AddForm";
import Header from "@/layout/Header";
import Sidebar from "@/layout/SideBar";
import { getNotificationState } from "@/redux/admin";
import clx from "classnames";
import { memo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Display from "../../containers/Display";
import styles from "./styles.module.scss";

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
                        <Route index element={<AddForm />} />
                        <Route path="manage" element={<></>} />
                        <Route path="products" element={<Display />} />
                        <Route path="detail" element={<AddForm />} />
                        <Route
                            path="*"
                            element={<p>There's nothing here: 404!</p>}
                        />
                    </Routes>
                </main>
            </div>
            {notification.messages.length !== 0 && (
                <div className={styles.notifications}>
                    {notification.messages.map((message) => (
                        <NotificationDialog message={message} />
                    ))}
                </div>
            )}
        </div>
    );
});

export default AdminPage;
