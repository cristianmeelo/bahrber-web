import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./container/register";

function Home() {
  return <h1>Bem-vindo à Home!</h1>;
}


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

