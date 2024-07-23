import "./index.css";
import { Provider as RouteProvider } from "./router/Router";
import "./services/firebase";

function App() {
  return (
    <div>
      <RouteProvider />
    </div>
  );
}

export default App;
