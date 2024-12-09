"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";

import { Social } from "./Social";
import TypingEffect from "./TyingEffect";
import { useEffect } from "react";

export const Hero = () => {
  const handleScroll = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Ensure handleScroll only runs on the client side
    if (typeof window !== "undefined") {
      const scrollButton = document.querySelector(".scroll-button");
      if (scrollButton) {
        scrollButton.addEventListener("click", handleScroll);
      }
      return () => {
        if (scrollButton) {
          scrollButton.removeEventListener("click", handleScroll);
        }
      };
    }
  }, []);

  return (
    <section className="py-12 xl:py-12 min-h-screen xl:pt-8 w-full bg-white dark:bg-[#0b0908] bg-no-repeat bg-bottom bg-cover dark:bg-none xl:mb-12">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              MERN Stack Developer
            </div>
            <TypingEffect />
            <p className="subtitle max-w-[600px] mx-auto xl:mx-0">
              As a MERN Stack Developer, I specialize in React, Next.js,
              Node.js, Express, MongoDB, Material-UI, and Tailwind CSS.
              Currently, I am expanding my knowledge in relational databases and
              gearing up for the AWS Services Associate Program.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 justify-center xl:justify-start">
              <Link href="/contacts">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
            </div>
            {/* Socials */}
            <Social
              containerStyles="flex gap-x-3 mx-auto xl:mx-0 justify-center xl:justify-start mb-44"
              iconsStyles="text-foreground text-[22px] hover:bg-color-slate transition-all"
            />
          </div>
          {/* Other content */}
        </div>

        <div
          className="hidden md:flex absolute left-2/4 xl:bottom-12 animate-bounce scroll-button"
          aria-label="Scroll to About"
        >
          <RiArrowDownSLine className="text-3xl text-primary cursor-pointer" />
        </div>
      </div>
    </section>
  );
};
