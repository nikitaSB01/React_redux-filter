import React from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import "./App.css";
import Filter from "./components/Filter";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Form />
      <Filter />
      <ItemList />
    </div>
  );
};

export default App;
