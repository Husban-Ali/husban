import { Sheet,SheetContent,SheetTrigger,SheetClose } from './ui/sheet'
import { AlignJustify } from 'lucide-react'
import { Nav } from './Nav'
import { Logo } from './Logo'
import { Social } from './Social'
import { useState } from 'react'
export const MobileNav = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild >
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-12'>
          <SheetClose asChild>
              <div onClick={handleClose}>
                <Logo />
              </div>
            </SheetClose>
            <Nav  containerStyles="flex flex-col items-center pt-4 gap-y-6 font-bold" linkStyles="text-2xl" onNavClick={handleClose}/>
          
          </div>
          <Social containerStyles="flex gap-x-4" iconsStyles="text-2xl"/>
        </div>
      </SheetContent>
    </Sheet>
  )
}
