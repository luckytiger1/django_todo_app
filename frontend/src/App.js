import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/api/");
      setTodos(data);
    } catch (error) {
      console.log("getTodos -> error", error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      {todos &&
        todos.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
