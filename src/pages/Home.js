import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 style={{ 
              color: "white", 
              fontFamily: "'Caveat', cursive",
              fontSize: "6rem",
              background: "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
              }}>
            Teague's Kitchen
          </h1>
          <p style={{ 
              color: "white", 
              fontFamily: "'Lato', sans-serif",
              fontSize: "2rem",
              fontWeight: "300",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
              }}>
            Best Food In the City
          </p>
          <Link to="/menu">
            <button className="orderBtn btn-bounce">ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
