import logo from "./logo.svg";
import "./App.css";

const initalitems = [
  { id: 1, description: "passports", quality: 2, packed: true },
  { id: 2, description: "socks", quality: 12, package: false },
  { id: 2, description: "Shirts", quality: 7, package: false },
  { id: 2, description: "Phants", quality: 9, package: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Packinglist />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1> Far waya</h1>
    </div>
  );
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip? </h3>
    </div>
  );
}

function Packinglist() {
  return (
    <div className="list">
      <ul>
        {initalitems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.package ? { textDecoration: "line-through" } : {}}>
        {item.quality}
        {item.description}
      </span>
      <button>x</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>Start adding some items to packing list</em>
    </footer>
  );
}

export default App;
