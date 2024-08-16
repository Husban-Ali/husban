import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

const BlogCard = ({blog}) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative w-full pt-[56.25%] bg-tertiary dark:bg-secondary/40 xl:bg-[110%] overflow-hidden">
          <Image
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            width={400}
            height={225}
            alt={blog.title}
            src={blog.image}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 flex flex-col">
        <Badge className="self-start text-sm font-medium mb-3">{blog.category}</Badge>
        <h4 className="text-xl font-semibold mb-3 line-clamp-2">{blog.title}</h4>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/blogs/${blog.id}`} className="w-full" passHref>
          <Button className="w-full">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default BlogCard