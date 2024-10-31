import React from "react";
import ReactDOM from "react-dom/client";
import Pet from "./Pet";
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="luna" animal="dog" breed="havaneese" />
      <Pet name="Perpper" animal="Bird" breed="nan-1" />
      <Pet name="Daink" animal="Cat" breed="nan-2" />
    </div>
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
