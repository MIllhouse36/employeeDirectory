import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
      <div>
        <Wrapper>
        <Header/>
        <Main/>
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
