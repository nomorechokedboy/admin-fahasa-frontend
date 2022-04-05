import { API } from "@/configs/env";
import Header from "@/layout/Header";
import Sidebar from "@/layout/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Display from "../../containers/Display";
import styles from "./styles.module.scss";

export default function AdminPage() {
    console.log("AdminPage render");

    return (
        <div className={styles.body}>
            <Router>
                <Sidebar />
                <div className={styles.container}>
                    <Header />
                    <main className={styles.main}>
                        <Routes>
                            <Route path="/" element={<>{API}</>} />
                            <Route path="/manage" element={<></>}></Route>
                            <Route
                                path="/products"
                                element={<Display />}
                            ></Route>
                            <Route path="/detail" element={<></>} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </div>
    );
}
