import React from "react";
import Main from "./components/Main/index";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import "./App.css"

function App() {
  return (
      <div>
        <Wrapper>
        <Header/>
        <Main/>
        <Footer />
        </Wrapper>
      </div>
  );
}

export default App;
