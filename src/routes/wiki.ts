import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const DB_PATH = path.join(__dirname, "../../data/wiki");

if (!fs.existsSync(DB_PATH)) fs.mkdirSync(DB_PATH, { recursive: true });

const loadPage = (id: string) => {
  const file = path.join(DB_PATH, `${id}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8"));
};

router.get("/", (_, res) => {
  const files = fs.readdirSync(DB_PATH);
  const pages = files.map((f) => {
    const data = JSON.parse(fs.readFileSync(path.join(DB_PATH, f), "utf8"));
    return { id: data.id, title: data.title, tags: data.tags };
  });

  res.json(pages);
});

router.get("/:id", (req, res) => {
  const page = loadPage(req.params.id);
  if (!page) return res.status(404).json({ error: "Not found" });
  res.json(page);
});

router.post("/", (req, res) => {
  const id = req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const file = path.join(DB_PATH, `${id}.json`);

  const data = {
    id,
    title: req.body.title,
    tags: req.body.tags ?? [],
    content: req.body.content ?? "",
  };

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ success: true, id });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const file = path.join(DB_PATH, `${id}.json`);

  const data = {
    id,
    title: req.body.title,
    tags: req.body.tags ?? [],
    content: req.body.content ?? "",
  };

  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

export default router;
