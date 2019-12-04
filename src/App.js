import React, { useState, useEffect } from "react";
import "./style/style.scss";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  const handleInput = e => {
    setSearch(e.target.value);
  };

  const filteredMosters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monster rolodex</h1>
      <SearchBox placeholder="Search monsters" handleChange={handleInput} />
      <CardList monsters={filteredMosters} />
    </div>
  );
}

export default App;
