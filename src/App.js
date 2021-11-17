import { useState } from "react";
import FinderPages from "./FinderPages";
import Transaction from "./Transaction";
import "./App.css";

function App() {
  const [url, setURL] = useState("https://finder.terra.money");

  return (
    <div>
      <h1>Finder Test App</h1>
      Input Finder URL:
      <input
        type="text"
        value={url}
        onChange={(e) => setURL(e.target.value)}
        className="inputURL"
      />
      <br />
      <Transaction url={url} />
      <FinderPages url={url} />
    </div>
  );
}

export default App;
