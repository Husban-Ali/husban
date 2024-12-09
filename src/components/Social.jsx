"use client";
import React from "react";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
} from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://www.instagram.com/syedhusbanali",
    name: <RiInstagramFill />,
  },
  {
    path: "https://www.linkedin.com/in/husban-ali/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.facebook.com/syedhusban.ali.5",
    name: <RiFacebookFill />,
  },
  {
    path: "hhttps://github.com/Husban-Ali",
    name: <RiGithubFill />,
  },
];
export const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="blank">
            <div className={`${icon.name}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};
