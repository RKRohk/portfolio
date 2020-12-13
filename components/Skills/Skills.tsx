import { Container, List, ListIcon, ListItem } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { DiAndroid, DiNodejs, DiReact } from "react-icons/di";
interface skill {
  name: string;
  icon: IconType;
}
const skills: skill[] = [
  { name: "React JS", icon: DiReact },
  { name: "Node JS", icon: DiNodejs },
  { name: "Kotlin", icon: DiAndroid },
];
const Skills: React.FC = () => {
  return (
    <Container>
      <List spacing={3}>
        {skills.map((skill) => (
          <ListItem>
            <ListIcon as={skill.icon} />
            {skill.name}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Skills;
