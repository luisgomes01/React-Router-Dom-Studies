import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar";
import MainRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes>
        <Navbar />
      </MainRoutes>
    </BrowserRouter>
  );
}

export default App;
