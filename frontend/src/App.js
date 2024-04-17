import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fooldal from "./pages/Fooldal";
import Layout from "./layouts/Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Fooldal />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
