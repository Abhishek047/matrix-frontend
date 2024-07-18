import { Container } from "@chakra-ui/react";
import { Provider as RouteProvider } from "./router/Router";
import "./services/firebase";

function App() {
  return (
    <Container>
      <RouteProvider />
    </Container>
  );
}

export default App;
