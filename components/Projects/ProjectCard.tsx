import { Badge, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Project } from "../../types";

const ProjectCard: React.FC<{ project: Project }> = (props) => {
  const project: Project = props.project as Project;
  const MotionBox = motion.custom(Box);
  return (
    <MotionBox
      w={["300px", "400px"]}
      p={[5, 10]}
      mx="auto"
      rounded={20}
      overflow="hidden"
      boxShadow="sm"
      border="solid"
      _hover={{ background: "black", color: "white" }}
      transition={{ duration: 3 }}
    >
      <Text fontSize="large" fontWeight="bold ">
        {project.title}
      </Text>
      <Box p={5}>
        {project.technologies.map((technology) => (
          <Badge variant="solid" variantColor="purple" rounded="full" px={2}>
            {technology}
          </Badge>
        ))}
      </Box>
      <Text>{project.description}</Text>
    </MotionBox>
  );
};
export default ProjectCard;
