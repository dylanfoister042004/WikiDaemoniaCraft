import { Editor } from "@tiptap/react";

interface Props {
  editor: Editor | null;
}

export default function RichTextToolbar({ editor }: Props) {
  if (!editor) return null;

  return (
    <div className="flex gap-2 mb-3">
      <button onClick={() => editor.chain().focus().toggleBold().run()} className="button-primary">
        Bold
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="button-primary">
        H1
      </button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="button-primary">
        H2
      </button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="button-primary">
        • List
      </button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="button-primary">
        1. List
      </button>
    </div>
  );
}
