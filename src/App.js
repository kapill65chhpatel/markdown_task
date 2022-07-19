import React from "react";
import BreadCrumbs from "./components/breadCrumbs";
import Header from "./components/header";
import LastSection from "./components/lastSection";

function App() {
  return (
    <div className="App">
      <Header />
      <BreadCrumbs />
      <LastSection/>
    </div>
  );
}

export default App;
