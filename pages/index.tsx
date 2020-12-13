import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  IconButton,
  List,
  ListItem,
  MenuItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Head>
        <title>Rohan Kakar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <IconButton
          colorScheme={colorMode === "light" ? "gray" : "light"}
          aria-label="Dark Mode Switch"
          ml="90vw"
          mt={5}
          icon={
            colorMode === "light" ? <MoonIcon /> : <SunIcon color="white" />
          }
          onClick={toggleColorMode}
        />
        <Container
          width="100vw"
          height="100vh"
          marginTop="auto"
          alignSelf="center"
          className="hello"
        >
          <Center h="95vh">
            <Text
              fontSize="xxx-large"
              mx={10}
              fontWeight="bold"
              textAlign={["left", "center", "center"]}
            >
              Hi,<br></br>
              I'm Rohan
            </Text>
          </Center>
        </Container>
        <Container className="projects" py={20} minH="100vh">
          <Text
            fontSize="xxx-large"
            mx={10}
            fontWeight="bold"
            textAlign={["center", "center", "center"]}
          >
            My Projects
          </Text>
          <Center my={19}>
            <Box width="100vw">
              <Projects />
            </Box>
          </Center>
        </Container>
        <Container
          d="flex"
          flexDirection="column"
          width="100vw"
          className="skills"
          height="100vh"
        >
          <Text
            fontSize="xxx-large"
            mx={10}
            fontWeight="bold"
            textAlign="center"
          >
            Skills
          </Text>
          <Flex my={20} align="start">
            <Skills />
          </Flex>
        </Container>
      </main>
    </div>
  );
}
