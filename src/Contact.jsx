import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// Define styled components for the navigation bar
const Header = styled.header`
  background-color: #4CAF50;
  color: #fff;
  padding: 20px 0;
  font-size: 2em;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 110px);
  gap: 30px;
  margin: 20px;
`;

const InfoBox = styled.div`
  width: 320px;
  padding: 25px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: left;
  margin: 0 15px;
  text-align: left;
`;

const Label = styled.span`
  width: 80px;
  font-weight: bold;
  text-align: right;
  margin-right: 10px;
`;

function Contact() {
  return (
    <div>
      <div className='home'>
        <nav className="navbar navbar-expand-lg lg:w-screen lg:h-14 shadow-sm lg:px-16 lg:py-3 navbar-light bg-white fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697120515/i9_k4vbts.jpg"
                className="logo"
              />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                {/* Add your navigation links here */}
                <a className="nav-link" href="#">
                  <NavLink to="/" className="Nav_List">Home</NavLink>
                </a>
                {/* Add more links as needed */}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Header>
        <h1>Contact Us</h1>
      </Header>
      <Main>
        <InfoBox>
          <h2>School 1</h2>
          <div className="detail">
            <Label><strong>Name:</strong></Label>
            <span>Greenwood High International School</span>
          </div>
          <div className="detail">
            <Label><strong>Email:</strong></Label>
            <span><a href="mailto:school@greenwood.com">school@greenwood.com</a></span>
          </div>
          <div className="detail">
            <Label><strong>Address:</strong></Label>
            <span>123 Elm Street, Cityville, 12345</span>
          </div>
        </InfoBox>
        <InfoBox>
          <h2>School 2</h2>
          <div className="detail">
            <Label><strong>Name:</strong></Label>
            <span>Greenwood High International School</span>
          </div>
          <div className="detail">
            <Label><strong>Email:</strong></Label>
            <span><a href="mailto:school@greenwood.com">school@greenwood.com</a></span>
          </div>
          <div className="detail">
            <Label><strong>Address:</strong></Label>
            <span>123 Elm Street, Cityville, 12345</span>
          </div>
        </InfoBox>
      </Main>
    </div>
  );
}

export default Contact;
