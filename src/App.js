import React, { useState } from "react";
import BreadCrumbs from "./components/breadCrumbs";
import Header from "./components/header";
import LastSection from "./components/lastSection";

function App() {
  const [wordCount, setWordCount] = useState(50);
  return (
    <div className="App">
      <Header wordCount={wordCount} setWordCount={setWordCount} />
      <BreadCrumbs />
      <LastSection setWordCount={setWordCount} />
    </div>
  );
}

export default App;
