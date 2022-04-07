import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/layout/Header";
import Sidebar from "@/layout/SideBar";
import Display from "../Display";
import styles from "./styles.module.scss";
import AddForm from "../AddForm";

export default function AdminPage() {
    return (
        <div className={styles.body}>
            <Router>
                <Sidebar />
                <div className={styles.container}>
                    <Header />

                    <main className={styles.main}>
                        <Routes>
                            <Route path="/" element={<>{"Hello"}</>}></Route>
                            <Route path="/manage" element={<></>}></Route>
                            <Route path="/products" element={<></>}></Route>
                            <Route path="/detail" element={<AddForm></AddForm>}></Route>
                        </Routes>
                    </main>
                </div>
            </Router>
        </div>
    );
}
