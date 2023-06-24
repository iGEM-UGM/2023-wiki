import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import ProgressBar from "react-scroll-progress-bar";
import { useParallax } from "react-scroll-parallax";
import { useRef } from "react";

const Description = () => {
  const target = useRef(null);
  const background = useParallax({
    speed: -50,
    targetElement: target.current,
  });
  return (
    <div className="scroll-smooth overflow-hidden">
      <Head>
        <title>Team:UGM Indonesia - 2023</title>
        <link rel="shortcut icon" href="/assets/logo_short.png" />
      </Head>
      <Navbar />
      <ProgressBar height="3px" bgColor="#fca311" />
      <div
        ref={background.ref}
        style={{
          backgroundImage: "url('/assets/description.jpeg')",
          backgroundSize: "cover",

          backgroundPosition: "center",
          opacity: "50%",
        }}
        className="h-screen opacity-50"
      />
      <div className="fixed flex flex-col justify-center items-center z-50 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] gap-y-12">
        <p className="items-center font-bold text-primary-300 opacity-100 lg:text-[100px] text-4xl font-bubblegum ">
          Description
        </p>
        <Image
          src="/assets/down.svg"
          width={50}
          height={50}
          alt=""
          className="relative block mx-auto rotate-180 animate-bounce hover:cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 700, behavior: "smooth" });
          }}
        />
      </div>
      <div className="h-full w-screen relative bg-white pt-24 px-12 z-[100]">
        <h1 className="font-bubblegum font-bold text-6xl relative z-10 text-primary-200">
          Problems
        </h1>
        <p className="font-poppins text-justify py-12 text-xl relative z-10 lg:text-2xl">
          Cancer remains to be one of{" "}
          <span className="font-bold underline stroke-primary-200  fill-primary-300 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            the greatest spectres
          </span>{" "}
          of modern medicine.
        </p>
        <p className="font-poppins text-justify py-12 text-xl relative z-10 lg:text-2xl">
          Among its many variants, colorectal cancer (CRC) stands as the second
          most common type of cancer found in Yogyakarta: reaching 1,593 cases
          diagnosed from early 2008 to late 2019, with advanced stages already
          present in most of them. The CRC incidence rate also increased 13.4%
          annually in three of the most-affected districts in Yogyakarta.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Description;
