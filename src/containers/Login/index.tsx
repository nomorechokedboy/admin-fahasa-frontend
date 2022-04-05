import { Button, Input } from "@mantine/core";
import Title from "../../components/Title";
import styles from "./styles.module.scss";

export default function Login() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.col}>
                    <div className={styles.row}>
                        <Title>Log In</Title>
                    </div>
                    <div className={styles.row}>
                        <Input placeholder="Username" />
                    </div>
                    <div className={styles.row}>
                        <Input placeholder="Password" />
                    </div>
                    <div className={styles.row}>
                        <Button>Log In</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
