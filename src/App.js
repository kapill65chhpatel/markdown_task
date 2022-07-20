import React, { useState } from "react";
import BreadCrumbs from "./components/breadCrumbs";
import Header from "./components/header";
import LastSection from "./components/lastSection";

function App() {
  const [wordCount, setWordCount] = useState(0);
  return (
    <div className="App">
      <Header wordCount={wordCount} />
      <BreadCrumbs />
      <LastSection wordCount={wordCount} setWordCount={setWordCount} />
    </div>
  );
}

export default App;
