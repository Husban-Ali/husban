import React from 'react'
import Image from 'next/image'

 const blogs = () => {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      <h1 className='h3 text-center'>Blogs will be uploaded soon. Stay tuned!</h1>
      <Image  src="/blog.svg" width={200} height={200} priority alt=''/>
    </section>

   )
}

export default blogs