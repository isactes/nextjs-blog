import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function Pots() {
    return <>
    <Head>Posts</Head>
    <h1>List Post</h1>
    <ul>
    <li><Link href="first-post">
    <a>First Post</a></Link></li>
    <li><Link href="second-post">
    <a>Second Post</a></Link></li>
    <li><Link href="/">
    <a>Back home</a></Link></li>
    </ul></>
    
} 