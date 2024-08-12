import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri'

import { DevImage } from "./DevImage"
import { Badge } from "./Badge"
import { Social } from "./Social"

export const Hero = () => {
  return (
    <section className="py-12 xl:py-26 h-[84vh] xl:pt-28  w-full bg-white dark:bg-[#0b0908] bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Full Stack Developer</div>
            <h1 className="h1">Hello,My Name is Hamiz Muzaffer</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores delectus nostrum facere, temporibus accusamus ea, vitae odit ipsa rerum, consequuntur architecto eveniet maiores fuga molestias aspernatur? Ratione recusandae sint eius.</p>
            <div>buttons</div>
          </div>
          <div className="hidden xl-flex relative">image</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary cursor-pointer" />
        </div>
      </div>

    </section>
  )
}
