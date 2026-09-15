import { HashRouter, Route, Routes } from "react-router-dom";
import { Background } from "./components/Background";
import { LandingPage } from "./pages/LandingPage";
import { PrivacyPage } from "./pages/PrivacyPage";

function App() {
  return (
    <HashRouter>
      <div className="relative flex min-h-screen flex-col overflow-x-clip bg-night-950 text-ink-200">
        <Background />
        <div className="relative z-10 flex flex-1 flex-col">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;