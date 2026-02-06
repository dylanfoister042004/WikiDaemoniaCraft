import { Link } from "react-router-dom";

interface Props {
  to: string;
  label: string;
  collapsed: boolean;
  path: string;
}

export default function SidebarLink({ to, label, collapsed, path }: Props) {
  const active = path === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-daemonia-accent-soft/40 duration-200 ${
        active ? "bg-daemonia-accent-soft/60 text-daemonia-accent" : "text-gray-300"
      }`}
    >
      {!collapsed && <span>{label}</span>}
      {collapsed && <span className="text-lg">•</span>}
    </Link>
  );
}
