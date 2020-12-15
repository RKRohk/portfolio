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
import { GetStaticProps } from "next";
import Head from "next/head";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Project } from "../types";

export default function Home(props: { projects: Project[] }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Head>
        <title>Rohan Kakar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Rohan's Website" />
        <meta name="robots" content="index, follow" />
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
              <Projects projects={props.projects} />
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

export const getStaticProps: GetStaticProps = async (context) => {
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

  const items = [project1, project2, project3];
  return {
    props: {
      projects: items,
    }, // will be passed to the page component as props
  };
};
