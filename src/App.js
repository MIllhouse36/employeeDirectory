import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
      <div>
    <Router>
        <Wrapper>
        <Header/>
        <Route exact path="/" component={Discover} />
        <Route exact path="/employeeDirectory" component={Discover} />
        </Wrapper>
        <Footer />
    </Router>
      </div>
  );
}

export default App;
