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
  description:
    "A telegram bot that deploys to heroku and downloads links and torrents and uploads to google drive and returns public share link.",
};
const project2: Project = {
  id: "2",
  title: "The Nature Fresh App",
  technologies: ["Flutter", "Firebase", "Dart", "Android"],
  description:
    "A Flutter App to place orders for Mushrooms on a E-Commerce Platform",
};
const project3: Project = {
  id: "3",
  title: "Google Meet Api",
  technologies: ["JavaScript", "Express.JS", "Google Meet", "Node.JS", "AWS"],
  description:
    "This API makes use of google calender api to generate google meet links. Also has a user-friendly auth system with create event form embedded.",
};

const items = [project1, project2, project3, project1];

const Projects: React.FC = (props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10}>
      {items.map((item) => (
        <ProjectCard project={item} />
      ))}
    </SimpleGrid>
  );
};

export default Projects;
