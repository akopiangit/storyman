import Link from "next/link";
import Layout from "../components/layout";
import styles from  "../styles/style.module.css";

export default function Home() {
    return (
        <Layout>
            <div className={styles.container}>
                Hello guys, please, read <Link href="/start">this page!</Link>
            </div>
        </Layout>
    )
}