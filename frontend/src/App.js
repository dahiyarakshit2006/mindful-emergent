import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Home from "@/pages/Home";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="App bg-[#F7F6F2] text-[#0A0A0A] antialiased selection:bg-black selection:text-[#FFF200]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </div>
    </ReactLenis>
  );
}

export default App;
