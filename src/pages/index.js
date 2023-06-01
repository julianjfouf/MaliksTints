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

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <main className={`h-screen w-screen ${menu ? `overflow-hidden` : null}`}>
      <Hero menu={menu} setMenu={setMenu} />
      <Why />
      <Experience />
      <Pricing />
      <Booking />
      <Footer />
    </main>
  );
}

export default Home;
