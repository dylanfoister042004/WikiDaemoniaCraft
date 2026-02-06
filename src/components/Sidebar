import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-daemonia-panel h-screen p-4 duration-300 border-r border-white/10 flex flex-col`}
    >
      {/* Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-white mb-4 hover:text-daemonia-accent"
      >
        {collapsed ? "➡️" : "⬅️"}
      </button>

      {/* Logo */}
      {!collapsed && (
        <div className="flex items-center gap-2 mb-6">
          <img src="/logo.png" className="w-10 h-10" />
          <h1 className="text-xl font-bold tracking-wide">DaemoniaCraft</h1>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <SidebarLink to="/" label="Home" collapsed={collapsed} path={location.pathname} />
        <SidebarLink to="/dungeons" label="Dungeons" collapsed={collapsed} path={location.pathname} />
        <SidebarLink to="/ranks" label="Ranks" collapsed={collapsed} path={location.pathname} />
        <SidebarLink to="/equipment" label="Equipment" collapsed={collapsed} path={location.pathname} />
        <SidebarLink to="/skills" label="Skills / Runestones" collapsed={collapsed} path={location.pathname} />
        <SidebarLink to="/towny" label="Towny" collapsed={collapsed} path={location.pathname} />
        <SidebarLink to="/events" label="Events" collapsed={collapsed} path={location.pathname} />
        <SidebarLink to="/announcements" label="Announcements" collapsed={collapsed} path={location.pathname} />
        <SidebarLink to="/info" label="Server Info" collapsed={collapsed} path={location.pathname} />

        <div className="mt-4 border-t border-white/10 pt-4">
          <SidebarLink to="/wiki/intro" label="Wiki" collapsed={collapsed} path={location.pathname} />
        </div>
      </nav>
    </div>
  );
}

