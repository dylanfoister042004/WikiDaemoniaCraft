import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface WikiPageData {
  id: string;
  title: string;
  content: string;
  tags: string[];
}

export default function WikiPage() {
  const { id } = useParams();
  const [page, setPage] = useState<WikiPageData | null>(null);

  useEffect(() => {
    fetch(`/api/wiki/${id}`)
      .then((res) => res.json())
      .then(setPage)
      .catch(() => setPage(null));
  }, [id]);

  if (!page) return <p className="text-gray-300 p-4">Loading...</p>;

  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-4xl font-bold text-indigo-300 mb-4">
        {page.title}
      </h1>

      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />

      <div className="mt-6 text-sm text-gray-400">
        Tags: {page.tags.join(", ")}
      </div>
    </div>
  );
}

