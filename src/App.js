import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
// import Search from "./pages/Search";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
        <Route exact path="/" component={Discover} />
          {/* <Route exact path="/search" component={Search} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
