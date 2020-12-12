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
          ml="80vw"
          mt={5}
          icon={
            colorMode === "light" ? <MoonIcon /> : <SunIcon color="white" />
          }
          onClick={toggleColorMode}
        />
        <Container width="100vw" marginTop="auto" alignSelf="center">
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
        <Container height="100vh">
        <Text
              fontSize="xxx-large"
              mx={10}
              fontWeight="bold"
              textAlign={["left", "center", "center"]}
            >
              My Projects
            </Text>
          <Center my={19}>
          
            <Box width="100vw">
              <Projects />
            </Box>
          </Center>
        </Container>
      </main>
    </div>
  );
}
