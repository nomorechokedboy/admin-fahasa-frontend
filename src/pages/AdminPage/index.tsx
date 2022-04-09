import AddForm from "@/containers/AddForm";
import Header from "@/layout/Header";
import Sidebar from "@/layout/SideBar";
import { auth } from "@/lib/firebase";
import clx from "classnames";
import { Route, Routes } from "react-router-dom";
import Display from "../../containers/Display";
import styles from "./styles.module.scss";

export default function AdminPage() {
    console.log("AdminPage render");
    console.log({ user: auth.currentUser });

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className={styles.container}>
                <Header />
                <main className={clx(styles.main)}>
                    <Routes>
                        <Route index element={<AddForm />} />
                        <Route path="manage" element={<></>}></Route>
                        <Route path="products" element={<Display />}></Route>
                        <Route path="detail" element={<AddForm />} />
                    </Routes>
                </main>
            </div>
            {/* <NotificationDialog /> */}
        </div>
    );
}
