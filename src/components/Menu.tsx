interface MenuProps {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  overChecked: boolean;
  setOverChecked: React.Dispatch<React.SetStateAction<boolean>>;
  compChecked: boolean;
  setCompChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({
  sortOption,
  setSortOption,
  overChecked,
  setOverChecked,
  compChecked,
  setCompChecked,
}: MenuProps): JSX.Element {
  return (
    <div className="menu">
      <div className="sort">
        <label htmlFor="sort">Sort by:</label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          id="sort"
        >
          <option value="creationDate">Creation Date</option>
          <option value="dueDate">Due Date</option>
          <option value="name">Name</option>
        </select>
      </div>
      <div className="filter">
        <input
          type="checkbox"
          checked={overChecked}
          onChange={(e) => setOverChecked((prev) => !prev)}
          id="overdue"
        />
        <label htmlFor="overdue">Hide overdue Todos</label>
        <input
          type="checkbox"
          checked={compChecked}
          onChange={(e) => setCompChecked((prev) => !prev)}
          id="completed"
        />
        <label htmlFor="completed">Hide completed Todos</label>
      </div>
    </div>
  );
}

export default Menu;
