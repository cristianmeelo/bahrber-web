import { Register as BarberRegister } from "@/container/barber/register";
import { Home } from "@/container/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barber/register" element={<BarberRegister />} />
        {/* <Route path="/user/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

