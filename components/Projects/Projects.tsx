import { SimpleGrid } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { type } from "os";
import { useState } from "react";
import { Project } from "../../types";
import ProjectCard from "./ProjectCard";

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10}>
      {projects.map((item) => (
        <ProjectCard project={item} key={item.title} />
      ))}
    </SimpleGrid>
  );
};

export default Projects;
