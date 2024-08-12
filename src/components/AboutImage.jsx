import Image from "next/image"
import srcImage from '../../public/about/developer.svg'

export const AboutImage = ({containerStyles}) => {
  return (
    <Image src={srcImage} className="w-[400px] h-[400px]"/>
  )
}
