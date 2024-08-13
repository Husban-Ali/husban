import React from 'react'
import { GanttChartSquare, Gem, Blocks } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Description } from '@radix-ui/react-dialog'

const servicesData = [
    {
        icon: <GanttChartSquare />,
        title: "API Integration",
        description: "Seamlessly connect and enhance your applications with robust API integrations that streamline data flow and expand functionality."
    },
    {
        icon: <Gem />,
        title: "Frontend Designs",
        description: "Transform your ideas into stunning digital experiences with expertly crafted frontend designs that captivate and engage your audience."
    },
    {
        icon: <Blocks />,
        title: "Full Stack Web Apps",
        description: "Build comprehensive, dynamic web applications from the ground up with full stack development solutions that cover both client-side and server-side needs."
    },
]
export const Services = () => {
    return (
        <section className='mb-12 x:mb-36 mt-24'>
            <div className="container mx-auto ">
                <h2 className='section-title mb:12 xl:mb:24 text-center mx-auto mb-12'>My Services</h2>
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 mx-auto xl:gap-x-8'>
                    {servicesData.map((item, index) => (
                        <Card className="w-full max-w-[424px] h-[300px] pt-16 pb-18 flex justify-center items-center relative" key={index}>
                            <CardHeader className="text-primary absolute -top-[60px]">
                                <div className='w-[140px] h-[80px] flex items-center justify-center'>
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className= "text-center flex flex-col justify-around">
                                <CardTitle className="mb-4">{item.title}</CardTitle>
                                <CardDescription className="text-lg">{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
