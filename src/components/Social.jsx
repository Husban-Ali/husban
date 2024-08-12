"use client"
import React from 'react'
import { RiYoutubeFill, RiInstagramFill, RiLinkedinFill, RiGithubFill, RiFacebookFill } from 'react-icons/ri'
import Link from 'next/link'

const icons = [
  {
    path: '/',
    name: <RiYoutubeFill />

  },
  {
    path: '/',
    name: <RiInstagramFill />
  },
  {
    path: '/',
    name: <RiLinkedinFill />
  },
  {
    path: '/',
    name: <RiFacebookFill />
  },
  {
    path: '/',
    name: <RiGithubFill />
  }
]
export const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return(
        <Link href={icon.path} key={index}>
               <div className={`${icon.name}`}>{icon.name}</div>
        </Link>
       )
      })}
    </div>
  )
}
