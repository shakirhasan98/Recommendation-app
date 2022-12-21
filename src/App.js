import "./styles.css";
import { useState } from "react";

const food = {
  Burgers: [
    { name: "Burger King", rating: "4/5" },
    { name: "McDonald's", rating: "3.5/5" }
  ],

  Pizza: [
    {
      name: "Pizzahut",
      rating: "4/5"
    },
    {
      name: "Domino's",
      rating: "3.5/5"
    }
  ],
  Donuts: [
    {
      name: "Dunkin Donuts",
      rating: "4/5"
    },
    {
      name: "Crispy creme",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Donuts");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🍔 Food Franchises </h1>
      <p style={{ fontSize: "smaller" }}> Select a genre to get started </p>

      <div>
        {Object.keys(food).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              borderRadius: "0.25rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {food[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem",
                border: "1px solid black",
                borderRadius: "0.25rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "large" }}> {food.name} </div>
              <div style={{ fontSize: "small" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
