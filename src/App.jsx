import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dungeons from "./pages/Dungeons";
import Ranks from "./pages/Ranks";
import Equipment from "./pages/Equipment";
import Skills from "./pages/Skills";
import Towny from "./pages/Towny";
import Events from "./pages/Events";
import Announcements from "./pages/Announcements";
import Info from "./pages/Info";
import WikiPage from "./wiki/WikiPage";
import WikiEditor from "./wiki/WikiEditor";

export default function App() {
  return (
    <div className="flex bg-daemonia-dark text-white min-h-screen">

      {/* --- Sidebar --- */}
      <Sidebar />

      {/* --- Main Content --- */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Routes>

          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/dungeons" element={<Dungeons />} />
          <Route path="/ranks" element={<Ranks />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/towny" element={<Towny />} />
          <Route path="/events" element={<Events />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/info" element={<Info />} />

          {/* Wiki System */}
          <Route path="/wiki/:pageId" element={<WikiPage />} />
          <Route path="/wiki-editor/:pageId" element={<WikiEditor />} />
          <Route path="/wiki-editor" element={<WikiEditor />} />

        </Routes>
      </div>
    </div>
  );
}

