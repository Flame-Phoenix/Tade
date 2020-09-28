import React from 'react';
import Home from "./Components/Home/Home.js";
import "./App.css";
import Contact from "./Components/Contact/Contact.js";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { Layout } from 'antd';
import NavBar from './Components/NavBar/NavBar.js';
import Kitchen from './Components/kitchen/Kitchen.js';
import Products from './Components/products/Products.js';

const { Header, Footer } = Layout;


const MyRoute = withRouter(({ location }) => {

  return (
    <Layout style={{ minHeight: '100vh', fontFamily: "Dancing Script" }}>
      <Header style={{ background: "black" }}>
        <Route path="/" component={NavBar} />
      </Header>
      <Layout className="site-layout" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/kitchen" component={Kitchen} />
        <Route exact path="/products" component={Products} />
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Ant Design Created by Thanos Karakostas</Footer>
    </Layout>



  );

});


function App() {
  return (
    <Router>
      <MyRoute />
    </Router>

  );
}

export default App;


