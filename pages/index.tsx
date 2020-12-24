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
import { useRef } from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Project } from "../types";

export default function Home(props: { projects: Project[] }) {
  const projectsRef = useRef();
  return (
    <div>
      <Head>
        <title>Rohan Kakar</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
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
        <meta property="og:image" content="/rohan.png"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://rohankakar.co/"></meta>
        <meta property="twitter:title" content="Rohan Kakar"></meta>
        <meta
          property="twitter:description"
          content="Full Stack Web and Mobile Application Developer | Express JS | React JS | Flutter | GraphQL"
        ></meta>
        <meta property="twitter:image" content="/rohan.png"></meta>
      </Head>

      <main>
        <Intro projectsRef={projectsRef} />
        <Container ref={projectsRef} className="projects" py={20} minH="100vh">
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
