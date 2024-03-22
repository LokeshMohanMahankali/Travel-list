import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const initalitems = [
  { id: 1, description: "passports", quality: 2, packed: true },
  { id: 2, description: "socks", quality: 12, package: false },
  { id: 3, description: "Shirts", quality: 7, package: false },
  { id: 4, description: "Phants", quality: 9, package: false },
];

function App() {
  const [items, setItems] = useState([]);

  // create the items
  function handelform(item) {
    setItems((items) => [...items, item]);
  }

  // For delete the items
  function handeldeleteitems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log("Deleted items", id);
  }

  // For update the items
  function Handleupdateitems(id) {
    setItems((items) =>
      items.map((item) =>
        item === id ? { ...items, packed: !item?.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form Onadditems={handelform} />
      <Packinglist
        item={items}
        Ondeleteitems={handeldeleteitems}
        Onupdateitem={Handleupdateitems}
      />
      <Stats item={items} />
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

function Form({ Onadditems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function Handelsubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItems = { description, quantity, package: false, id: Date.now() };
    console.log(newItems);
    Onadditems(newItems);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={(e) => Handelsubmit(e)}>
      <h3>What do you need for your trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Packinglist({ item, Ondeleteitems, Onupdateitem }) {
  return (
    <div className="list">
      <ul>
        {item.map((item) => (
          <Item
            item={item}
            Ondeleteitems={Ondeleteitems}
            Onupdateitem={Onupdateitem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, Ondeleteitems, Onupdateitem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.package}
        onChange={() => Onupdateitem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => Ondeleteitems(item.id)}>❌</button>
    </li>
  );
}

function Stats({ item }) {
  const numlenght = item.length;
  const numpacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numpacked / numlenght) * 100);

  return (
    <footer className="stats">
      <em>
        {" "}
        💼 You have {numlenght} items on your list, and you already packed
        {numpacked}
        {percentage}
      </em>
    </footer>
  );
}

export default App;
