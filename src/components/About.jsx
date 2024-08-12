import Image from "next/image"
import { AboutImage } from "./AboutImage"
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@radix-ui/react-tabs"
import { User2, Briefcase, MailIcon, GraduationCap, HomeIcon, PhoneCall, Calendar, University, } from "lucide-react";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Hamiz Muzaffer"
    },
    {
        icon: <PhoneCall size={20} />,
        text: "+92 331 2893020"
    },
    {
        icon: <MailIcon size={20} />,
        text: "hamiz.muzaffer77@gmail.com"
    },
    {
        icon: <Calendar size={20} />,
        text: "Born 7th July 2004"
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Undergrad Bachelors in Computer Science"
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Karachi,Sindh"
    }
]

const educationData = [
    {
        title: "Education",
        data: [
            {
                university: "Nazeer Hussain University",
                qualification: "Bachelors in Computer Science",
                year: '2022 - Present'
            },
            {
                university: "Pakistan Freelance Training Program",
                qualification: "Frontend Development",
                year: '2023'
            },
            {
                university: "Saylani Mass IT Training",
                qualification: "Web And Mobile App Development",
                year: '2023-2024'
            },
            {
                university: "Saylani Mass IT Training",
                qualification: "AWS Developer Associate",
                year: '2024-Present'
            },
        ]
    },
    {
        title: "Experience",
        data: [
            {
                company: "Artech Fusion",
                qualification: "Discord Sales Lead",
                year: '2023'
            },
            {
                company: "Creative Hub",
                qualification: "Discord Sales Executive",
                year: '2021-2022'
            },

        ]
    }

]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: "Frontend Development"
            },
            {
                name: "Backend Development"
            },
            {
                name: "Full Stack Development"
            },
            {
                name: "Maintenance and Support"
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: "/about/icons/html5-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/css3-02-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/javascript-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/react-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/nextjs-icon-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/redux-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/firebase-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/nodejs-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/mongodb-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/express-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/mysql-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/postgresql-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/postman-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/git-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/github-142-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/material-ui-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/tailwind-css-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/ant-design-svgrepo-com.svg"
            },
            {
                imgPath: "/about/icons/bootstrap-fill-svgrepo-com.svg"
            },
        ]
    },
]
console.log(educationData)

export const About = () => {
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
         <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
         <div>
            {/* Image */}
            {/* <AboutImage containerStyles={}/> */}
         </div>
        </div>
        </section>
    )
}
