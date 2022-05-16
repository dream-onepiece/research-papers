import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUS from "../pages/contact-us";
import DataSets from "../pages/datasets";

import Home from '../pages/home';
import Models from '../pages/models';

const ResearchRouter = () => {
    return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="models" element={<Models />} />
      <Route path="dataset" element={<DataSets />} />
      <Route path="how-to-use" element={<Home />} />
      <Route path="contact-us" element={<ContactUS />} />
    </Routes>
  </BrowserRouter>
}

export default ResearchRouter;