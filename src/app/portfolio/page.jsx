"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "ECOMMERCE APP",
    desc: "A modern and stylish ecommerce platform built with Next.js, designed for selling high-end handbags. Features include seamless browsing, secure checkout, and a responsive user experience.",
    img: "/ecommerce.png",
    link: "https://created-mu.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "FOOD DELIVERY APP",
    desc: "A fast and intuitive food delivery application that allows users to browse restaurants, customize orders, and track deliveries in real time. Built with Next.js for a smooth user experience.",
    img: "/apna-food.png",
    link: "https://apna-food.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "VIDEO CALLING APP",
    desc: "A high-quality video calling application powered by ZegoCloud. Features include real-time video conferencing, screen sharing, and chat functionality, optimized for seamless communication.",
    img: "/video-call.png",
    link: "https://video-call-sage.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "SCHOOL MANAGEMENT APP",
    desc: "A comprehensive school management interface designed to streamline administrative tasks. Features include student records management, scheduling, and an intuitive UI for teachers and students.",
    img: "/apna-school.png",
    link: "https://apna-school.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-1 px-4">
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r ${item.color} p-4 md:p-8`}
                key={item.id}
              >
                <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white text-center">
                  {item.title}
                </h1>
                <div className="relative mt-4 w-80 h-52 md:w-96 md:h-60 lg:w-[650px] lg:h-[350px] xl:w-[800px] xl:h-[400px] overflow-hidden rounded-lg">
                  <Image src={item.img} alt="" fill className="object-cover" />
                </div>
                <p className="w-64 md:w-80 lg:w-96 xl:w-[500px] text-center text-white mt-4 md:text-lg">
                  {item.desc}
                </p>
                <Link href={item.link} className="mt-4">
                  <button className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all">
                    See Demo
                  </button>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;