import React from "react";
import "./App.css";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";

function App() {
  return (
    <div className="app">
      <div className="navbar">
       
          <Navbar />
      
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
           
              <Routes>
                <Route exact path="/cryptoverse/" element={<HomePage />} />
                <Route path="cryptoverse/exchange" element={<Exchanges/>} />
                <Route path="cryptoverse/cryptocurriencies" element={<Cryptocurrencies/>} />
                <Route path="cryptoverse/crypto/:coinId" element={<CryptoDetails/>} />
                <Route path="cryptoverse/news" element={<News/>} />
              </Routes>
          
          </div>
        </Layout>

        <div className="footer">
        <Typography.Text
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse <br />
          All rights reserved
        </Typography.Text>
        <Space>
          <Link to="/cryptoverse/">Home</Link>
          <Link to="cryptoverse/exchanges">Exchanges</Link>
          <Link to="cryptoverse/news">News</Link>
        </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
