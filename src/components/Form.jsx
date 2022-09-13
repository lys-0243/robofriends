export function Form({ value, onChange }) {
  return (
    <div className="input_search">
      <input
        type="text"
        name="search"
        placeholder="Rechercher par nom"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      </div>
  );
}
