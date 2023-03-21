
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactUsPage />} />
          <Route exact path="*" element={<div>404 Page Not found</div>} />
        </Routes>
      </BrowserRouter>
   
     
    </div>
  );
}

export default App;
