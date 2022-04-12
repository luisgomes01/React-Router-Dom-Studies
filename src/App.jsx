import { BrowserRouter } from "react-router-dom";
import "./App.scss";

import MainRoutes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
