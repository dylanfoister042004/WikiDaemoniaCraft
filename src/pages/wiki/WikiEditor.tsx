import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function WikiEditor() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`/api/wiki/${id}`)
        .then((res) => res.json())
        .then((p) => {
          setTitle(p.title);
          setTags(p.tags.join(", "));
          setContent(p.content);
        });
    }
  }, [id]);

  const savePage = async () => {
    await fetch(`/api/wiki/${id ?? ""}`, {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        tags: tags.split(",").map((t) => t.trim()),
        content,
      }),
    });

    alert("Saved!");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-indigo-400 mb-4">
        Wiki Editor
      </h1>

      <input
        className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full p-3 bg-gray-800 border border-gray-700 rounded"
        placeholder="Tags (comma separated)..."
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <textarea
        className="w-full h-96 p-4 bg-gray-900 border border-gray-700 rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={savePage}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white"
      >
        Save
      </button>
    </div>
  );
}
