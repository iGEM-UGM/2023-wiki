"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { debounce } from "./utilities";
import ProgressBar from "react-scroll-progress-bar";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive((prev) => !prev);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  const navbarStyles = {
    position: "fixed",
    height: "15vh",
    width: "100%",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    transition: "top 0.6s",
  };
  return (
    <>
      <div
        style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}
        class="shadow-black shadow-lg">
        <div class="flex flex-row relative justify-between px-5 items-center overflow-hidden translate-y-[-50%] top-[50%] -z-50">
          <Image
            src="/assets/logo_short.png"
            width={100}
            height={100}
            alt=""
            class="block lg:hidden my-auto"
          />
          <Image
            src="/assets/logo.png"
            width={300}
            height={300}
            alt=""
            class="my-auto lg:block hidden"
          />
          <div class="lg:flex flex-row justify-center gap-x-5 text-primary-100 relative text-xl hidden">
            <p>Home</p>
            <div class="relative group z-50">
              <button class=" text-xl font-poppins text-primary-100">
                <span>Project</span>
              </button>
              <div class="absolute z-50 hidden bg-grey-200 group-hover:block">
                <div class="h-full bg-white bg-primary-200 shadow-lg relative z-50">
                  <div class="flex flex-col gap-y-2 z-50 relative">
                    <p>Design</p>
                    <p>Description</p>
                    <p>Engineering</p>
                    <p>Safety</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative group">
              <button class="font-montserrat">
                <span>Wet Lab</span>
              </button>
              <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                <div class="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <p>Parts</p>
                    <p>Experiments</p>
                    <p>Result</p>
                    <p>Notebook</p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="relative group">
              <button class="font-montserrat">
                <span>Dry Lab</span>
              </button>
              <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                <div class="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <p>dropdown content here</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative group">
              <button class="font-montserrat">
                <span>Human Practices</span>
              </button>
              <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                <div class="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <p>dropdown content here</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative group">
              <button class="font-montserrat">
                <span>Team</span>
              </button>
              <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                <div class="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <p>dropdown content here</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative group">
              <button class="font-montserrat">
                <span>Medals</span>
              </button>
              <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
                <div class="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <p>dropdown content here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggle}
            class="lg:hidden">
            <rect
              width={active ? "45" : "40"}
              height="5"
              fill="#252644"
              class={
                active
                  ? "rotate-45 duration-300 translate-x-[10%] translate-y-[0%]"
                  : "rotate-0 duration-300"
              }
            />
            <rect
              y="16"
              width="40"
              height="5"
              fill="#252644"
              class={
                active
                  ? "duration-300 translate-x-[100%]"
                  : "rotate-0 duration-300"
              }
            />
            <rect
              y="32"
              width={active ? "45" : "40"}
              height="5"
              fill="#252644"
              class={
                active
                  ? "-rotate-45 duration-300 translate-x-[-50%] translate-y-[25%]"
                  : "rotate-0 duration-300"
              }
            />
          </svg>
        </div>
      </div>
      <ProgressBar height="3px" bgColor="#fca311" />
    </>
  );
};

export default Navbar;
