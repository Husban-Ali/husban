import { Social } from "./Social"

const Footer = ()=> {
  return (
    <footer className="bg-tertiary dark:bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center">
          <Social  containerStyles="flex gap-x-6 mx-auto xl:mx-8 mb-4"  iconsStyles="text-primary  dark:text-white text-[20px] dark:hover:text-primary"/>
          <div className="text-muted-foreground">Copyright &copy; Hamiz Muzaffer. All right reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer