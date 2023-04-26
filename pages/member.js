import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProgressBar from "react-scroll-progress-bar";
import { useParallax } from "react-scroll-parallax";
import Drylab from "../components/team/member/drylab";
import Wetlab from "../components/team/member/wetlab";
import Finance from "../components/team/member/finance";
import Administration from "../components/team/member/administration";
import HP from "../components/team/member/humanpractice";
import Wiki from "../components/team/member/wiki";
import Media from "../components/team/member/media";

const Member = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const swiperRef = useRef();
  const target = useRef(null);
  const background = useParallax({
    speed: -50,
    targetElement: target.current,
  });

  // const cloud = useParallax({
  //   speed: 200,
  //   targetElement: target.current,
  // });
  const drylab = [
    {
      foto: "/photo_team/sofyan.png",
      nama: "Sofyan Maulana",
      jurusan: "Biology 2020",
    },
    {
      foto: "/photo_team/kayla.png",
      nama: "Kayla Queenazima S.",
      jurusan: "Biomedical Engineering 2020",
    },
  ];
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
          backgroundImage: "url('/photo_team/foto_tim.jpeg')",
          backgroundSize: "cover",

          backgroundPosition: "center",
          opacity: "50%",
        }}
        className="h-screen opacity-50"
      />
      <div className="fixed flex flex-col justify-center items-center z-50 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] gap-y-12">
        <p className="items-center font-bold text-primary-300 opacity-100 lg:text-[100px] text-4xl font-montserrat ">
          Team
        </p>
        <Image
          src="/assets/down.svg"
          width={50}
          height={50}
          alt=""
          className="relative animate-bounce block mx-auto rotate-180"
          onClick={() => {
            window.scrollTo({top: 700, behavior: "smooth" });
          }}
        />
      </div>

      <div className="h-full w-screen relative bg-primary-200 text-white pt-24 px-12 z-[100]">
        <p className="font-montserrat font-bold text-6xl">About</p>
        <p className="font-poppins text-justify py-12 text-2xl">
          The UGM iGEM Team of 2023 is the first team from Universitas Gadjah
          Mada who will participate in this iGEM event. This team consists of
          students from several study programs (Biology, Agricultural
          Microbiology, Agroindustrial Technology, Medicine, Biomedical
          Engineering, Computer Science, Information Technology and Pharmacy)
          and supervised by a principal investigator and instructors from
          Faculty of Biology and Faculty of Agriculture.
        </p>
      </div>
      <Drylab />
      <Wetlab />
      <Finance />
      <Administration />
      <HP />
      <Wiki />
      <Media />
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fixed lg:bottom-[5%] lg:right-[2.5%] right-[1%] bottom-[1%] lg:scale-[200%] z-[101] lg:hover:scale-[210%] duration-300 scroll-smooth"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}>
        <rect width="28" height="28" rx="14" fill="#F6C73B" />
        <path
          d="M6.42095 17.6003C6.55351 17.727 6.71098 17.8275 6.88433 17.8961C7.05768 17.9647 7.2435 18 7.43118 18C7.61885 18 7.80468 17.9647 7.97802 17.8961C8.15137 17.8275 8.30884 17.727 8.4414 17.6003L14.0012 12.2972L19.5611 17.6003C19.829 17.8559 20.1924 17.9994 20.5713 17.9994C20.9502 17.9994 21.3136 17.8559 21.5816 17.6003C21.8495 17.3447 22 16.9981 22 16.6367C22 16.2753 21.8495 15.9287 21.5816 15.6732L15.0043 9.3997C14.8717 9.273 14.7143 9.17247 14.5409 9.10389C14.3676 9.0353 14.1818 9 13.9941 9C13.8064 9 13.6206 9.0353 13.4472 9.10389C13.2739 9.17247 13.1164 9.273 12.9839 9.3997L6.40662 15.6732C5.8621 16.1925 5.8621 17.0673 6.42095 17.6003Z"
          fill="#1D1D1D"
        />
      </svg>
      <Footer />
    </div>
  );
};

export default Member;
