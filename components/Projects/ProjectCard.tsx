import { Badge, Box, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Project } from "../../types";

const ProjectCard: React.FC<{ project: Project }> = (props) => {
  const project: Project = props.project as Project;
  const MotionBox = motion.custom(Box);
  const { colorMode } = useColorMode();
  return (
    <MotionBox
      w={["300px", "400px"]}
      p={[5, 10]}
      mx="auto"
      rounded={20}
      overflow="hidden"
      boxShadow="sm"
      border="solid"
      _hover={
        colorMode === "light"
          ? { background: "black", color: "white" }
          : { background: "white", color: "black" }
      }
      whileHover={{
        scale: 1.1,
      }}
    >
      <Text fontSize="large" fontWeight="bold ">
        {project.title}
      </Text>
      <Box p={5}>
        {project.technologies.map((technology) => (
          <Badge
            variant="solid"
            variantColor={colorMode === "light" ? "purple.100" : "teal"}
            rounded="full"
            px={2}
            key={`${project.title}${technology}`}
          >
            {technology}
          </Badge>
        ))}
      </Box>
      <Text>{project.description}</Text>
    </MotionBox>
  );
};
export default ProjectCard;
