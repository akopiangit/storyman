import Layout from "../components/layout";
import Link from "next/link";
import styles from "../styles/style.module.css";
import Repo from "../model/Repo";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

export const getServerSideProps: GetServerSideProps<{
    repo: Repo
}> = async () => {
    const res = await fetch(`http://localhost:8080/api`)
    const repo: Repo = await res.json()
    return {props: {repo}}
}

export default function Start({repo}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Layout>
            <div className={styles.container}>
                <div>Start to create your story</div>
                <Link href="/">Back to Home</Link>
                {repo.map(item =>
                    <div key={item.id}>{item.name}</div>
                )}
            </div>
        </Layout>
    )
}
