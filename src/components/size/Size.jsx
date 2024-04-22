import "./size.scss";

function Size({ onSelectSize }) {
  const handleSizeChange = (event) => {
    onSelectSize(event.target.value);
  };

  return (
    <div className="size">
      <select className="size-select" name="size" onChange={handleSizeChange}>
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
      </select>
    </div>
  );
}

export default Size;
