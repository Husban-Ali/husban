import Image from "next/image"
import srcImage from '../../public/about/developer.svg'

export const AboutImage = ({containerStyles}) => {
  return (
    <Image src={srcImage} alt="" className={`${containerStyles}`}/>
  )
}
