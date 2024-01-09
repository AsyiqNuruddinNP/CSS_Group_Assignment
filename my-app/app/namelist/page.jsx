"use client";

import { useState } from "react";

const NAMES = [
    "Andrea",
    "Billie",
    "Clara",
    "David",
    "Eva",
    "Frank",
    "Grace",
    "Henry",
    "Ivy",
    "Jack",
    "Katherine",
    "Leo",
    "Mia",
    "Nathan",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Samuel",
    "Taylor",
    "Ursula",
    "Victor",
    "Wendy",
    "Xander",
    "Yvonne",
    "Zachary",
  ];

// names omitted


export default function App() {
    const [filteredNames, setFilteredNames] = useState(NAMES);
    function handleKeyUp(event) {
      const query = event.target.value;
      setFilteredNames(NAMES.filter((name) => name.includes(query)));
      console.log(query);
    }
    return (
      <div>
        <input onKeyUp={handleKeyUp} />
        <ul>
          {filteredNames.map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      </div>
    );
  }