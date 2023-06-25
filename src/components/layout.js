import Head from "next/head";
import styles from '../styles/style.module.css';

export default function Layout({children}) {
    return <div>
        <Head>
            <title>StoryMan</title>
        </Head>
        <div className={styles.container}>{children}</div>
    </div>
}