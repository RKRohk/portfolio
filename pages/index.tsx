import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Flex,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import Head from "next/head";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Project } from "../types";

export default function Home(props: { projects: Project[] }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const MotionContainer = motion.custom(Container);
  return (
    <div>
      <Head>
        <title>Rohan Kakar</title>
        <meta name="title" content="Rohan Kakar"></meta>
        <meta
          name="description"
          content="Full Stack Web and Mobile Application Developer | Express JS | React JS | Flutter | GraphQL"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://rohankakar.co/"></meta>
        <meta property="og:title" content="Rohan Kakar"></meta>
        <meta
          property="og:description"
          content="Full Stack Web and Mobile Application Developer | Express JS | React JS | Flutter | GraphQL"
        ></meta>
        <meta property="og:image" content=""></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://rohankakar.co/"></meta>
        <meta property="twitter:title" content="Rohan Kakar"></meta>
        <meta
          property="twitter:description"
          content="Full Stack Web and Mobile Application Developer | Express JS | React JS | Flutter | GraphQL"
        ></meta>
        <meta property="twitter:image" content=""></meta>
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
        <MotionContainer>
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
                Hello,<br></br>
                I'm Rohan Kakar
              </Text>
            </Center>
          </Container>
        </MotionContainer>
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

import { getAllProjects } from "./api/project";

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

  let items: Project[] = [];
  try {
    items = await getAllProjects();
  } catch (error) {
    items = [project1, project2];
  }
  return {
    props: {
      projects: items,
    }, // will be passed to the page component as props
  };
};
