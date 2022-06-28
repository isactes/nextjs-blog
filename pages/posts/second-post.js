import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function SeconPost() {
    return (
    <><Head>
        <title>Second Pots</title>
    </Head><h1>Hola que hace x2</h1><h2>
        <Link href="/"><a>Back home</a></Link></h2></>
    );
}