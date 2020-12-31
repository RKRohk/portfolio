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
      overflow="hidden"
      boxShadow="sm"
      whileHover={{
        scale: 1.1,
      }}
      className="bg-gradient-to-br rounded-md border-gray-500 ring-2 from-blue-weird to-gray-900 hover:scale-110"
    >
      <Text fontSize="large" fontWeight="bold " mx="auto">
        {project.title}
      </Text>
      <Box p={5}>
        {project.technologies.map((technology) => (
          <Badge
            variant="solid"
            className="font-yellowtail"
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
