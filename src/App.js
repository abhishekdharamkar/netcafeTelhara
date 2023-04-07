
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
   
   
      <div div className="fixed w-full border- bottom-0 cursor-pointer">
      <span class=" flex h-3 w-3 absolute right-2.5  top-0">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
      <div className="p-2 border-2   bg-orange-50 text-indigo-500 text-xl text-center font-extrabold font-mono"  onClick={() => window.open("https://goo.gl/maps/EWP4T8fDd9pX8WyD7/", "_blank")} > Visit Now...</div>

</div>
    </div>
  );
}

export default App;
