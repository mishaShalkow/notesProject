import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouting from "./components/AppRouting";

function App() {
  return (
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  );

}

export default App;
