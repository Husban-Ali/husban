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
<section className='mb-12 xl:mb-36 mt-24'>
    <div className="container mx-auto px-4">
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-y-12 sm:gap-x-4 xl:gap-x-8 justify-items-center'>
            {servicesData.map((item, index) => (
                <Card 
                    className="w-full max-w-[424px] h-auto min-h-[300px] pt-24 pb-8 px-4 flex flex-col justify-center items-center relative" 
                    key={index}
                >
                    <div className="absolute -top-[40px] left-1/2 transform -translate-x-1/2">
                        <div className='w-[80px] h-[80px] bg-background rounded-full flex items-center justify-center shadow-lg'>
                            <div className="text-primary">
                                {item.icon}
                            </div>
                        </div>
                    </div>
                    <CardContent className="text-center flex flex-col justify-around">
                        <CardTitle className="mb-4 text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-sm sm:text-base">{item.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
</section>
    )
}
