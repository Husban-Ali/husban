import Link from "next/link"
import Image from "next/image"
export const Logo = () => {
  return (
    <Link href={'./'}>
    <Image src ="/HM.svg" width={80} height={54} priority alt="" />
    </Link>
  )
}
