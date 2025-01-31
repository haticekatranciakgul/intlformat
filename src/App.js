// src/App.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCurrency } from "../src/Redux/features/currencySlice";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const currencyValue = useSelector((state) => state.currency.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCurrency(Number(input)));
  };

  return (
    <div>
      <h1>Para Formatı Gönder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Bir sayı girin"
        />
        <button type="submit">Gönder</button>
      </form>
      <h2>Gönderilen Veri: {currencyValue}</h2>
    </div>
  );
}

export default App;