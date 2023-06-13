import Image from "next/image";
import { Inter } from "next/font/google";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Pricing from "@/components/Pricing";
import Works from "@/components/Works";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import { useState } from "react";
import Contact from "@/components/Contact";
import Head from "next/head";
import Navbar from "@/components/subcomponents/Navbar";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Malik's Tints</title>
        <link rel="icon" type="image/png" href="/maliklogo.png"></link>
        <meta
          name="description"
          content="Malik's Tints Official Website for all information you need about services and packages offered."
        ></meta>
      </Head>
      <main className={`h-screen w-screen ${menu ? `overflow-hidden` : null}`}>
        <Navbar menu={menu} setMenu={setMenu} />
        <Pricing />
        <Works />
        <About />
        <Why />
        <Contact />
        <Experience />
        <Footer />
      </main>
    </>
  );
}

export default Home;
