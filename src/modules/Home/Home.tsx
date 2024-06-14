import { useState } from "react";
import { Button, Container, Stack, Text } from "@chakra-ui/react";

function Home() {
  const [count, setCount] = useState<number>(0);
  return (
    <Container>
      <Stack>
        <Text fontSize="5xl" mb={2}>
          Welcome to the app
        </Text>
        <Button onClick={() => setCount((prevState) => prevState + 1)}>
          Count {count}
        </Button>
      </Stack>
    </Container>
  );
}

export default Home;
