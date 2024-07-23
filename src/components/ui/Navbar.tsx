"use client";

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  // useBreakpointValue,
} from "@chakra-ui/react";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/routeConfigs";
import { logOut } from "../../services/firebase";

export const Navbar = () => {
  const { user } = useUser();
  const handleLogout = async () => {
    await logOut();
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 8 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }}>
          <Text
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {user ? (
            <>
              <Button
                onClick={handleLogout}
                fontSize={"sm"}
                fontWeight={400}
                variant="ghost"
                color={"pink.400"}
                _hover={{
                  bg: "pink.100",
                  color: "black",
                }}
              >
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link to={ROUTES.LOGIN}>
                <Button fontSize={"sm"} fontWeight={400} variant="ghost">
                  Sign In
                </Button>
              </Link>
              <Link to={ROUTES.SIGN_UP}>
                <Button
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"pink.400"}
                  _hover={{
                    bg: "pink.300",
                  }}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};
