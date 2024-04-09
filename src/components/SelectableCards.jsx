import { useState } from "react";

const SelectableCards = ({ Image, Title }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={`card ${isSelected ? "selected-card" : ""}`}>
      <img src={Image} alt="" />
      <h5>{Title}</h5>
      <p className={isSelected ? "visibility" : ""}>
        With over 7 million shots from a vast community of designers. Dribbble
        is the leading source for design inspiration
      </p>

      <label className="checkbox">
        <input
          type="checkbox"
          required
          onChange={(e) => setIsSelected(e.target.checked)}
          value={isSelected}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default SelectableCards;
