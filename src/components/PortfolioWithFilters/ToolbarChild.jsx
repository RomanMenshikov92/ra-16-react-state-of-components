export default function ToolbarChild(props) {
  const { filters, selected, onSelectFilter } = props;

  return (
    <ul className="toolbar-list">
      {filters.map((filter, i) => (
        <li key={i} className={`toolbar-item${selected === filter ? " toolbar-item__selected" : ""}`} onClick={() => onSelectFilter(filter)}>
          <span className="toDoListItem-title">{filter}</span>
        </li>
      ))}
    </ul>
  );
}
