import React from "react";
// import './App.css';
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
