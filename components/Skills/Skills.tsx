import {
  Box,
  Container,
  Flex,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  DiAws,
  DiDocker,
  DiExtjs,
  DiGoogleCloudPlatform,
  DiJava,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import {
  SiApollographql,
  SiDart,
  SiDocker,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGo,
  SiGraphql,
  SiJava,
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiNextDotJs,
  SiPostgresql,
  SiPytorch,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
interface skill {
  name: string;
  icon: IconType;
}

const languages: skill[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Dart", icon: SiDart },
  { name: "Python", icon: DiPython },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Java", icon: SiJava },
  { name: "GoLang", icon: SiGo },
  { name: "SQL", icon: SiPostgresql },
];

const frameworks: skill[] = [
  { name: "React JS", icon: DiReact },
  { name: "Next JS", icon: SiNextDotJs },
  { name: "Node JS", icon: DiNodejs },
  { name: "Express JS", icon: DiExtjs },
  { name: "Apollo GraphQL", icon: SiApollographql },
  { name: "Flutter", icon: SiFlutter },
  { name: "Flask", icon: SiFlask },
  { name: "Firebase", icon: SiFirebase },
  { name: "Tensorflow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
];

const tools: skill[] = [
  { name: "MongoDB", icon: DiMongodb },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: DiAws },
  { name: "Google Cloud", icon: DiGoogleCloudPlatform },
];
const Skills: React.FC = () => {
  return (
    <SimpleGrid mx="auto" columns={[2, 2, 3]} spacing={[5, 5, 15]}>
      <Box>
        <Text fontSize="x-large">Languages</Text>
        <List py={5} spacing={3}>
          {languages.map((skill) => (
            <ListItem>
              <ListIcon as={skill.icon} />
              {skill.name}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Text fontSize="x-large">Frameworks</Text>
        <List py={5} spacing={3}>
          {frameworks.map((skill) => (
            <ListItem>
              <ListIcon as={skill.icon} />
              {skill.name}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Text fontSize="x-large">Tools</Text>
        <List py={5} spacing={3}>
          {tools.map((skill) => (
            <ListItem>
              <ListIcon as={skill.icon} />
              {skill.name}
            </ListItem>
          ))}
        </List>
      </Box>
    </SimpleGrid>
  );
};

export default Skills;
