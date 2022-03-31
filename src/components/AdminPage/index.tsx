import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../shards/Header';
import SideBar from '../shards/SideBar';
import { useSelector } from 'react-redux';
import { selectShowSidebar } from '../../redux/showSidebar/action';
import styles from './styles.module.scss';

export default function AdminPage() {
    const sidebarActive = useSelector(selectShowSidebar);

    const mainStyle = {
        marginLeft: sidebarActive ? "250px" : "80px",
    }

    return (
        <Router>
            <SideBar />
            <div className={styles.container} style={mainStyle}>
                <Header />
                <main className={styles.main}>
                    <Routes>
                        <Route path="/" element={<>{'Hello'}</>}></Route>
                        <Route path="/manage" element={<></>}></Route>
                        <Route path="/products" element={<></>}></Route>
                        <Route path="/detail" element={<></>}></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
