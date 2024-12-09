"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";
import { Description } from "@radix-ui/react-dialog";

const projectData = [
  {
    image: "/work/image3.png",
    category: "MERN Stack",
    link: "https://saylani-tech.vercel.app/",
    name: "Saylani TEC",
    description: "Website of saylani tech limited",
    github: "https://github.com/Husban-Ali/saylani_tech.git",
  },
  {
    image: "/work/image4.png",
    category: "MERN Stack",
    link: "https://smit-web-iota.vercel.app/",
    name: "SMIT WEBSITE",
    description: "An SMIT website made using MERN stack with amazing features",
    github: "https://github.com/MRsabcod/SMIT-Web.git",
  },
  {
    image: "/work/image2.png",
    category: "Blog",
    link: "https://husban-ali.github.io/patanh-bs-ban-gyi-/",
    name: "Blog",
    description:
      "A service side blog writing app made using HTML , CSS and Firebase as a database",
    github: "https://github.com/Husban-Ali/patanh-bs-ban-gyi-.git",
  },

  {
    image: "/work/image.png",
    category: "Next Js",
    link: "https://husban.vercel.app/",
    name: "Portfolio Website",
    description:
      "My Portfolio App built using Framer motion and shadCN UI library",
    github: "",
  },

  {
    image: "/work/airport.png",
    category: "JAVA",
    link: "https://github.com/HamizMuzaffer/Airport-Management.git",
    name: "Airport Management System",
    description:
      "Flight management system, developed through Java by integrating Java Swing library. It completely works on the concept of Object Oriented Programming.",
    github: "https://github.com/HamizMuzaffer/Airport-Management.git",
  },
  {
    image: "/work/react-todo.png",
    category: "HTML CSS",
    link: "",
    name: "TODO App",
    description: "A simple todo app ",
    github: "https://github.com/Husban-Ali/TODO.git",
  },

  {
    image: "/work/ecommerce.png",
    category: "React Js",
    link: "https://ecommerce-react-dusky.vercel.app/",
    name: "Ecommerce Website",
    description:
      "React ecommerce website with add product feature and admin panel to add or delete the products made using firebase",
    github: "https://github.com/Husban-Ali/Ecommerce-.git",
  },

  {
    image: "/work/stopwatch.png",
    category: "JavaScript",
    link: "",
    name: "Stopwatch",
    description:
      "A stopwatch with reset and pause feature for user built using vanilla JS",
    github: "https://github.com/Husban-Ali/stopwatch.gitt",
  },
  {
    image: "/work/calculator.png",
    category: "JavaScript",
    link: "https://husban-ali.github.io/Calculator/",
    name: "Calculator",
    description:
      "A JavaScript calculator with all arithmetic operations enabled",
    github: "https://github.com/Husban-Ali/Calculator.git",
  },
];
export const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between">
          <div className="max-w-[600px] w-full mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:mb-0 xl:pr-8">
            <h2 className="section-title mb-4 text-center xl:text-left">
              Latest Projects
            </h2>
            <p className="subtitle mb-4 text-center xl:text-left">
              Explore my latest work, showcasing the challenges I&apos;ve
              tackled and the creative solutions I&apos;ve crafted. Curious to
              see more? Dive into all my projects!
            </p>
            <Link href="/projects">
              <Button>All Projects</Button>
            </Link>
          </div>
          <div className="w-full xl:max-w-[600px]">
            <Swiper
              className="h-[480px]"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {projectData.slice(0, 4).map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
