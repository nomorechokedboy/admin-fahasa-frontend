import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../layout/Header";
import Sidebar from "../../layout/SideBar";
import styles from "./styles.module.scss";
import { useToggle } from "@mantine/hooks";

export default function AdminPage() {
    const [sideBarActive, sideBarToggle] = useToggle<boolean>(true, [
        false,
        true,
    ]);

    const showSideBar = () => {
        sideBarToggle();
    };

    const containerStyle = {
        marginLeft: sideBarActive ? "250px" : "80px",
    };

    return (
        <Router>
            <Sidebar onClick={showSideBar} active={sideBarActive} />
            <div className={styles.container} style={containerStyle}>
                <Header />

                <main className={styles.main}>
                    <Routes>
                        <Route path="/" element={<>{"Hello"}</>}></Route>
                        <Route path="/manage" element={<></>}></Route>
                        <Route path="/products" element={<></>}></Route>
                        <Route path="/detail" element={<></>}></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
