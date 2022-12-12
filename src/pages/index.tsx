import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import About from "../components/About";
import Rsvp from "../components/Rsvp";
import Footer from "../components/Footer";
import IVCInfo from "../components/IVCInfo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arctic Warfare | An IVC Tournament</title>
        <meta
          name="description"
          content="A Modern Warfare II Collegiate Tournament by Irvine Valley College"
        />
      </Head>
      <div
        style={{ letterSpacing: "2px" }}
      >
        <div className="grid grid-cols-1 mx-2 sm:gap-10 p-5">
          <Banner />
          <About />
          <Rsvp />
        </div>
        <IVCInfo />
      </div>
    </>
  );
};

export default Home;
