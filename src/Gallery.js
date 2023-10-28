import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";

export default function Gallery() {
  const X=styled.header`
  .logo {
    width: 80px;
    height: 70px;
  }
  #navItem1 {
    color: #323f4b;
    font-family: "Roboto";
  }
  #navItem2 {
    color: #323f4b;
    font-family: "Roboto";
  }
  #navItem3 {
    color: #323f4b;
    font-family: "Roboto";
  }
  #navItem4 {
    color: #323f4b;
    font-family: "Roboto";
  }
.btn-group{
    font-family: "Roboto";
    color: #323f4b;
    

}
.drp-btn{
    color: #323f4b;
    margin-left: 5%;
    text-decoration: none;
}
.Nav_List{
  text-decoration: none;
  color:black;
  font-size:13px;
}

  .follow-us-section {
    background-color: white;
  }
  .follow-us-section-heading {
    text-align: center;
    color: #183b56;
    font-family: "Roboto";
    font-size: 28px;
    font-weight: 700;
  }
  .follow-us-icon-container {
    background-color: #faf7e8;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin: 15px;
    padding-top: 22px;
    padding-bottom: 14px;
    padding-right: 16px;
    padding-left: 22px;
  }
  .icon {
    color: #d0b200;
    font-size: 35px;
  }
  .footer-section {
    background-color: #0d2436;
  }
  .footer-section-mail-id {
    color: #959ead;
    font-family: "Roboto";
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
  }
  .footer-section-address {
    color: #959ead;
    font-family: "Roboto";
    font-size: 14px;
  }


  *{
    box-sizing: border-box;
    justify-content: center;
}
.parent{
    display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 30px;;

}
.cards{ 
       
       width:300px; 
       height:260px;
       background-color:#DFF6FF; 
       margin:40px;
       box-shadow: 16px 14px 20px #9AB3F5 ; 
       } 
       .card-image img{ 
       width:100%; 
       height:200px;
       } 
       .card-body{ 
       text-align:center; 
       } 
       h1{
           font-family: Verdana, Geneva, Tahoma, sans-serif;
           text-align: center;
           justify-content: center;
           margin-top:2%;
       }
       h4{
        padding:4%;
       }

  `;
  return(
    <>
    <X>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697120515/i9_k4vbts.jpg"
                class="logo"
              />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ml-auto">
                <a class="nav-link active" id="navItem1" >
                <NavLink to="/" className="Nav_List">Home</NavLink>
                </a>
                <div class="btn-group">
                    <button class="btn  btn-sm" type="button">
                        About Us
                    </button>
                    <button type="button" class="btn btn-sm  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                        <li><a class="drp-btn" ><NavLink to="/Vision" className="Nav_List">Vision</NavLink></a></li>
                        <li><a class="drp-btn" >
                        <NavLink to="/Faculty" className="Nav_List">Faculty</NavLink></a></li>

                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn  btn-sm" type="button">
                        Admissions
                    </button>
                    <button type="button" class="btn btn-sm  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                        <li><a class="drp-btn" ><NavLink to="/Procedure" className="Nav_List">Procedure</NavLink></a></li>
                        <li><a class="drp-btn">Registration</a></li>

                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn  btn-sm" type="button">
                        Academics
                    </button>
                    <button type="button" class="btn btn-sm  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                        <li><a class="drp-btn" ><NavLink to="/Labs" className="Nav_List">Labs</NavLink></a></li>
                        <li><a class="drp-btn"><NavLink to="/Library" className="Nav_List">Library</NavLink></a></li>
                        <li><a class="drp-btn"><NavLink to="/Sports" className="Nav_List">Sports</NavLink></a></li>
                </div>
                <a class="nav-link" href="#" id="navItem4"><NavLink to="/Gallery" className="Nav_List">Gallery</NavLink></a>
                <a class="nav-link" href="#" id="navItem4"><NavLink to="/Contact" className="Nav_List">Contact Us</NavLink></a>
              </div>
            </div>
          </div>
          </div>
        </nav>
    <h1><center>GALLERY</center></h1>
    <div class="parent">
<div class="cards"> 
    <div class="card-image"> 
    <img src="https://images2.alphacoders.com/720/720843.jpg"></img></div>
    <div class="card-body"><h4>ANNUAL DAY</h4>
    </div> 
</div>
<div class="cards"> 
    <div class="card-image"> 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZi2UEkRUxd2EegjjhhJT_ZA9xlih-cCeF6g&usqp=CAU"></img> </div> 
    <div class="card-body"><h4>LAKSHYA 2K19</h4></div> 
</div>
<div class="cards"> 
    <div class="card-image"> 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkylO6CaOBOBz6lI0_WAxXjhtAZ_w5IHKxSQ&usqp=CAU"></img> </div> 
    <div class="card-body"><h4>LABORATORIES</h4></div> 
</div>
<div class="cards"> 
    <div class="card-image"> 
    <img src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3836.jpg"></img></div>
    <div class="card-body"><h4>AWARENESS PROGRAM</h4></div> 
</div>
<div class="cards"> 
    <div class="card-image"> 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSzoFfg4gEb4Our51a_qydt7vkU-2zncCjmJh3zJEvY8uYjKeqSovZhefgfH_Y6znNKg&usqp=CAU"></img> </div> 
    <div class="card-body"><h4>NCC TEAM</h4></div> 
</div>
<div class="cards"> 
    <div class="card-image"> 
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2W3htuN6BlzEiRGT51b2qLd0l5Hr6_7lRXv7fp9NrZVc6SBG1EtqTaedk96N1c06fc4&usqp=CAU"></img> </div> 
    <div class="card-body"><h4>NSS UNIT</h4></div> 
</div>
</div>
<div class="follow-us-section pt-5 pb-5" id="followUsSection">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1 class="follow-us-section-heading">Follow Us</h1>
              </div>
              <div class="col-12">
                <div class="d-flex flex-row justify-content-center">
                  <div class="follow-us-icon-container">
                    <i class="fab fa-twitter icon"></i>
                  </div>
                  <div class="follow-us-icon-container">
                    <i class="fab fa-instagram icon"></i>
                  </div>
                  <div class="follow-us-icon-container">
                    <i class="fab fa-facebook icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-section pt-5 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <img
                src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697120515/i9_k4vbts.jpg"
                  class="logo"
                />
                <h1 class="footer-section-mail-id">High school</h1>
                <p class="footer-section-address">
                Vadlamudi,Garuvu Palem,522213,AndhraPradesh, India.
                </p>
              </div>
            </div>
          </div>
        </div>
</X>
</>
    );
}