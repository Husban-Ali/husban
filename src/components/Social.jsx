"use client"
import React from 'react'
import { RiYoutubeFill, RiInstagramFill, RiLinkedinFill, RiGithubFill, RiFacebookFill } from 'react-icons/ri'
import Link from 'next/link'

const icons = [
  {
    path: 'https://www.youtube.com/@CWithHamiz',
    name: <RiYoutubeFill />

  },
  {
    path: 'https://www.instagram.com/hamizmuzaffar/',
    name: <RiInstagramFill />
  },
  {
    path: 'https://www.linkedin.com/in/hamiz-muzaffer/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://www.facebook.com/hamiz.muzaffar/',
    name: <RiFacebookFill />
  },
  {
    path: 'https://github.com/HamizMuzaffer',
    name: <RiGithubFill />
  }
]
export const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return(
        <Link href={icon.path} key={index} target='blank'>
               <div className={`${icon.name}`}>{icon.name}</div>
        </Link>
       )
      })}
    </div>
  )
}
