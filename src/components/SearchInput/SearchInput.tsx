import { FC, useState, ChangeEvent, KeyboardEvent } from "react";
import "./SearchInput.css";

type SearchProps = {
  searchCharacter(search: string): void;
};

export const SearchInput: FC<SearchProps> = ({ searchCharacter }) => {
  const [term, setTerm] = useState<string>("");
  
  const updateTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };
  const handleEnterPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") onSearchAction();
  };
  const onSearchAction = () => {
    searchCharacter(term);
  };
  const clearTerm = () => {
    searchCharacter("");
    setTerm("");
  };

  return (
    <div className="searchForm">
      <label htmlFor="term">Nome do personagem</label>
      <div className="inputArea">
        <input
          onChange={updateTerm}
          onKeyPress={handleEnterPress}
          value={term}
          type="text"
          name="term"
          id="term"
          placeholder="Search"
        />
        <button
          onClick={clearTerm}
          disabled={term === ""}
          className={`clear ${term === "" ? "disabled" : ""}`}
        >
          <span className="material-icons-outlined">backspace</span>
        </button>
        <button onClick={onSearchAction}>
          <span className="material-icons-outlined">search</span>
        </button>
      </div>
    </div>
  );
};
