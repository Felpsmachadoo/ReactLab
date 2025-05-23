import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./Atividade1/Atv01";
import Atv02 from "./Atividade2/Atv02";
import Atv03 from "./Atividade3/Atv03";
import Atv04 from "./Atividade4/Atv04"

export default function MinhasRotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atv01" element={<Atv01 />} />
        <Route path="/atv02" element={<Atv02 />} />
        <Route path="/atv03" element={<Atv03 />} />
        <Route path="/atv04" element={<Atv04 />} />
      </Routes>
    </BrowserRouter>
  );
}
