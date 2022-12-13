import type { AppProps } from 'next/app'
import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from "../components/Nav"
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <div style={{minHeight: "100vh", paddingBottom: "5rem", position: "relative"}}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}