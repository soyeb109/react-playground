import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl">Tailwind test</h1>
      <Card username="Soyeb Islam" />
      <Card username="Macbook" />
    </>
  );
}

export default App;
