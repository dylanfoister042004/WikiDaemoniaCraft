interface Props {
  title: string;
  children: React.ReactNode;
}

export default function PagePanel({ title, children }: Props) {
  return (
    <div className="glass-panel p-6 shadow-xl">
      <h1 className="page-title">{title}</h1>
      {children}
    </div>
  );
}
