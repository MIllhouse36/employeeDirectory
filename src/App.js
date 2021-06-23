import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
      <div>
    <Router>
        <Wrapper>
        <Header/>
        <Route exact path="/" component={Main} />
        <Route exact path="/employeeDirectory" component={Main} />
        </Wrapper>
        <Footer />
    </Router>
      </div>
  );
}

export default App;
