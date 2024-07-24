import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "./theme/defaultTheme.ts";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
);
