import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(null);
  useEffect(() => {
    fetch("/weather")
      .then((response) => response.json())
      .then((data) => setState(data))
      .catch((error) => console.error("Error when fetching data ", error));
  }, []);

  return (
    <div className="container text-center">
      <h1>Welcome to My Full-Stack App </h1>
      <p>This is a React app styled with Bootstrap 5.</p>
    </div>
  );
}
export default App;
