import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../pages/home';
import Models from '../pages/models';

const ResearchRouter = () => {
    return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="models" element={<Models />} />
      <Route path="dataset" element={<Home />} />
      <Route path="how-to-use" element={<Home />} />
    </Routes>
  </BrowserRouter>
}

export default ResearchRouter;