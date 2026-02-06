import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface WikiPageMeta {
  id: string;
  title: string;
  tags: string[];
}

export default function WikiHome() {
  const [pages, setPages] = useState<WikiPageMeta[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/wiki")
      .then((res) => res.json())
      .then(setPages)
      .catch(() => setPages([]));
  }, []);

  const filtered = pages.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-4 text-gray-200">
      <h1 className="text-3xl font-black mb-4 text-indigo-300 drop-shadow-lg">
        DaemoniaCraft Wiki
      </h1>

      <input
        placeholder="Search Wiki..."
        className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-gray-100 mb-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-3">
        {filtered.map((page) => (
          <Link
            key={page.id}
            to={`/wiki/${page.id}`}
            className="block p-4 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            <h2 className="text-xl font-semibold text-indigo-300">{page.title}</h2>
            <div className="text-sm text-gray-400">
              {page.tags.join(", ")}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

