import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

interface WikiPageRef {
  id: string;
  title: string;
}

interface Props {
  pages: WikiPageRef[];
}

export default function WikiSidebar({ pages }: Props) {
  const location = useLocation();

  return (
    <div className="w-64 bg-daemonia-panel border-r border-white/10 p-4 flex flex-col">
      <h2 className="text-lg font-bold mb-3">Wiki</h2>

      <SearchBar placeholder="Search wiki..." />

      <div className="mt-3 flex flex-col gap-2 overflow-y-auto">
        {pages.map((p) => (
          <Link
            key={p.id}
            to={`/wiki/${p.id}`}
            className={`px-3 py-2 rounded-md hover:bg-daemonia-accent-soft/40 ${
              location.pathname === `/wiki/${p.id}`
                ? "bg-daemonia-accent-soft/60 text-daemonia-accent"
                : "text-gray-300"
            }`}
          >
            {p.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
