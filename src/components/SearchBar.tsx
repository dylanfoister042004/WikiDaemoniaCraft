interface Props {
  placeholder?: string;
  onChange?: (v: string) => void;
}

export default function SearchBar({ placeholder, onChange }: Props) {
  return (
    <input
      className="input-dark w-full"
      type="text"
      placeholder={placeholder ?? "Search..."}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
}

      </div>
    </div>
  );
}
