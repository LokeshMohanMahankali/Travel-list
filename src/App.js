import logo from "./logo.svg";
import "./App.css";

const initalitems = [];

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
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>Start adding some items to packing list</em>
    </footer>
  );
}

export default App;
