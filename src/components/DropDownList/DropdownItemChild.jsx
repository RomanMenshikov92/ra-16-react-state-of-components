export const DropdownItemChild = (props) => {
  const { item, selected, selectItem } = props;

  return (
    <li className={`dropdown-item ${selected === true ? "active" : ""}`} onClick={selectItem}>
      {/* eslint-disable-next-line */}
      <a className="dropdown-link" href="#">
        {item.title}
      </a>
    </li>
  );
};

export default DropdownItemChild;
