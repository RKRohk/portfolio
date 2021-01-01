import { SimpleGrid } from "@chakra-ui/react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { type } from "os";
import { MutableRefObject, useState } from "react";
import { Project } from "../../types";
import ProjectCard from "./ProjectCard";

const Projects: React.FC<{
  projects: Project[];
  skillsRef: MutableRefObject<HTMLDivElement>;
}> = ({ projects, skillsRef }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div>
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} spacingY={5}>
        {projects.map((item) => (
          <ProjectCard project={item} key={item.title} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Projects;
