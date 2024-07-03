import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
      gap="5"
    >
      <Text size="5xl">Sign Up</Text>
      <Box w="100%" h="100%" display="flex" flexDirection="column" gap="5">
        <Input placeholder="Full Name" />
        <Input placeholder="Work Email" />
        <InputGroup>
          <InputLeftAddon>+91</InputLeftAddon>
          <Input type="tel" placeholder="Phone Number" />
        </InputGroup>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
        >
          GET STARTED
        </Button>
      </Box>
    </Box>
  );
};
