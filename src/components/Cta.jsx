import Link from "next/link"
import { Button } from "./ui/button"


export const Cta = () => {
  return (
<section className="py-6 bg-tertiary">
<div className="container mx-auto">
    <div className="flex flex-col items-center">
        <h2 className="h2  max-w-xl text-center mb-8">Want a custom website? Feel free to hit me up!</h2>
        <Link href="/contacts">
          <Button>Contact Me!</Button>
        </Link>
    </div>
</div>
</section>
 )
}
