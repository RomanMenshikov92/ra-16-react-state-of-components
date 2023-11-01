import "./App.css";
import { Portfolio } from "./components/PortfolioWithFilters/Portfolio";
import { Store } from "./components/LocationOfProducts/Store";
import { Dropdown } from "./components/DropDownList/Dropdown";

export function App() {
  return (
    <>
      <div className="container">
        <h2 className="title">Задание №1 - Портфолио с фильтрами</h2>
        <Portfolio></Portfolio>
      </div>
      <div className="container">
        <h2 className="title">Задание №2 - Расположение товаров</h2>
        <Store></Store>
      </div>
      <div className="container">
        <h2 className="title">Задание №3 - Выпадающий список</h2>
        <Dropdown></Dropdown>
      </div>
    </>
  );
}

export default App;
