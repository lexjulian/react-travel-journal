import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import data from "./data";

function App() {
  const cards = data.map((items) => {
    return <Card items={items} />;
  });
  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
