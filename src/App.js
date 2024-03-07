import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <Logo />
          <Form />
          <Packinglist />
          <Stats />
    </div>
  );
}

function Logo() {
  return<h2> Far waya</h2>
}

function Form() {
  return<h3>What do you need for your trip? </h3>
}

function Packinglist() {
  return
}

function Stats() {
  return <h3>Start adding some items to packing list</h3>
}

export default App;
