"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/image3.png",
    category: "MERN Stack",
    link: "https://saylani-tech.vercel.app/",
    name: "Saylani TEC",
    description: "Website of saylani tech limited",
    github: "https://github.com/Husban-Ali/saylani_tech.git",
  },
  {
    image: "/work/image4.png",
    category: "MERN Stack",
    link: "https://smit-web-iota.vercel.app/",
    name: "SMIT WEBSITE",
    description: "An SMIT website made using MERN stack with amazing features",
    github: "https://github.com/MRsabcod/SMIT-Web.git",
  },
  {
    image: "/work/image2.png",
    category: "Blog",
    link: "https://husban-ali.github.io/patanh-bs-ban-gyi-/",
    name: "Blog",
    description:
      "A service side blog writing app made using HTML , CSS and Firebase as a database",
    github: "https://github.com/Husban-Ali/patanh-bs-ban-gyi-.git",
  },

  {
    image: "/work/image.png",
    category: "Next Js",
    link: "https://husban.vercel.app/",
    name: "Portfolio Website",
    description:
      "My Portfolio App built using Framer motion and shadCN UI library",
    github: "",
  },

  {
    image: "/work/airport.png",
    category: "JAVA",
    link: "https://github.com/HamizMuzaffer/Airport-Management.git",
    name: "Airport Management System",
    description:
      "Flight management system, developed through Java by integrating Java Swing library. It completely works on the concept of Object Oriented Programming.",
    github: "https://github.com/HamizMuzaffer/Airport-Management.git",
  },
  {
    image: "/work/react-todo.png",
    category: "HTML CSS",
    link: "",
    name: "TODO App",
    description: "A simple todo app ",
    github: "https://github.com/Husban-Ali/TODO.git",
  },

  {
    image: "/work/ecommerce.png",
    category: "React Js",
    link: "https://ecommerce-react-dusky.vercel.app/",
    name: "Ecommerce Website",
    description:
      "React ecommerce website with add product feature and admin panel to add or delete the products made using firebase",
    github: "https://github.com/Husban-Ali/Ecommerce-.git",
  },

  {
    image: "/work/stopwatch.png",
    category: "JavaScript",
    link: "",
    name: "Stopwatch",
    description:
      "A stopwatch with reset and pause feature for user built using vanilla JS",
    github: "https://github.com/Husban-Ali/stopwatch.gitt",
  },
  {
    image: "/work/calculator.png",
    category: "JavaScript",
    link: "https://husban-ali.github.io/Calculator/",
    name: "Calculator",
    description:
      "A JavaScript calculator with all arithmetic operations enabled",
    github: "https://github.com/Husban-Ali/Calculator.git",
  },
];
const uniqueCategories = [
  "All Projects",
  ...new Set(projectData.map((item) => item.category)),
];

const CategorySelector = ({
  categories,
  defaultCategory,
  onCategoryChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <Select
        onValueChange={handleCategoryChange}
        defaultValue={selectedCategory}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category, index) => (
            <SelectItem key={index} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All Projects");
  const filteredProjects = projectData.filter((item, index) => {
    return category === "All Projects" ? item : item.category === category;
  });
  return (
    <section className="min-h-screen pt-6">
      <div className="container">
        <h2 className="section-title text-center mx-auto mb-8 xl:mb-16">
          My Projects
        </h2>
        <div className="mb-16">
          <CategorySelector
            categories={categories}
            defaultCategory={category}
            onCategoryChange={setCategory}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
