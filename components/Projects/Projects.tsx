import { SimpleGrid } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { type } from "os";
import { useState } from "react";
import { Project } from "../../types";
import ProjectCard from "./ProjectCard";

const project1: Project = {
  id: "1",
  title: "KuebikoBot",
  technologies: ["Python", "Telegram Bot Api", "AWS", "Docker"],
  description: "Telegram bot",
};
const project2: Project = {
  id: "2",
  title: "KuebikoBot",
  technologies: ["Python", "Telegram Bot Api", "AWS", "Docker"],
  description: "Telegram bot",
};
const project3: Project = {
  id: "3",
  title: "KuebikoBot",
  technologies: ["Python", "Telegram Bot Api", "AWS", "Docker"],
  description: "Telegram bot",
};

const items = [project1,project2,project3]

const Projects: React.FC = (props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return <SimpleGrid columns={{sm:2,md:4}} spacing={10}>
      {items.map( item => <ProjectCard project={item} />)}
  </SimpleGrid>
};

export default Projects;