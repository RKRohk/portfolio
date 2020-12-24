import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";

const Nav: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav>
      <Box
        pos="absolute"
        backgroundColor="#1A202C"
        position="absolute"
        display={{ sm: "flex" }}
        alignItems={{ sm: "center" }}
        justifyContent="space-between"
        width="100%"
      >
        <Flex>
          <Box pl={6} display="flex" alignItems="center">
            <Image
              src="/rohan.png"
              alt="Rohan's Logo"
              width={100}
              height={100}
            />
          </Box>
        </Flex>
        <Box pr={6} ml={6} p={2} display={{ sm: "flex" }}>
          <IconButton
            colorScheme={colorMode === "light" ? "gray" : "light"}
            aria-label="Dark Mode Switch"
            icon={
              colorMode === "light" ? <MoonIcon /> : <SunIcon color="white" />
            }
            onClick={toggleColorMode}
          />
          <Link outline="none" ml={6} href="#projects">
            <Text p={2} fontSize="lg">
              Projects
            </Text>
          </Link>
          <Link ml={6} href="#projects">
            <Text p={2} fontSize="lg">
              Skills
            </Text>
          </Link>
        </Box>
      </Box>
    </nav>
  );
};

export default Nav;
