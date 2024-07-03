import { Container } from "@chakra-ui/react";
import { Provider as RouteProvider } from "./router/Router";

function App() {
  return (
    <Container>
      <RouteProvider />
    </Container>
  );
}

export default App;
