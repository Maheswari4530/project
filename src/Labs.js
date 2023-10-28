import React from "react";
import styled from "styled-components";
// import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

{/* <Helmet>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script></Helmet> */}

export default function Labs() {
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
    font-family: roboto;
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




body{
    overflow:scroll;
    overflow-x:hidden;
}
h1{
  text-align: center;
  color:rgb(8, 44, 102);
}
.col-12{
  padding:4%;
}
.science{
    border: 3px solid black;
  border-radius:15%;
  font-size: 130%;
  padding:2%;
  color:black;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 30%;
}
.col-12 h2{
  font-size: 20px;
  color:rgb(8, 44, 102);
}


.col-sm-12 {
background-image: url('https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1537198485721_mainnews2012_x1.jpg');
background-repeat: no-repeat;
background-attachment: fixed; 
background-size: 100% 90%;
height:600px;
/* filter: blur(1px); */

}
.bg-text {
background-color: rgb(0,0,0); /* Fallback color */
background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
color: white;
font-weight: bold;
border: 3px solid #f1f1f1;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 2;
width: 80%;
padding: 20px;
text-align: center;
}
.bg-text h1{
color:white;
}

/* .cards{ 
       
       width:300px; 
       height:260px;
       background-color:#DFF6FF; 
       margin:40px;
       box-shadow: 16px 14px 20px #9AB3F5 ;
       } 
       .card-image img{ 
       width:100%; 
       } */
       .card-body{ 
       text-align:center; 
       } 
       .card-image img{
        width:100%;
        margin-top:5%;
        /* margin-left:2.5%; */
        margin:3%;
        border-radius: 8%;
        height:230px;
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
  `;
  return(
    <>
    <X>
        <div class="container-fluid">
      <div class="roww">
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
                        <li><a class="drp-btn"><NavLink to="/Registration" className="Nav_List">Registration</NavLink></a></li>

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
      
      <div class="row">
        <div class="col-sm-12">
          <div class="bg-text">
            <h2>Led by Passionate Experts </h2>
            <h1 style={{fontSize:"40px"}}>I am Suresh Naik</h1>
            <p style={{fontSize:"15px"}}>Science,its like Magic but REAL</p>
          </div>
        </div>
    </div>
    <h1 >Our Laboratories</h1>
    <div class="row">
      <div class="col-12 col-md-4">
          <div class="card-image"> 
          <img src="data:image/jpeg;base64,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"></img> </div> 
      </div>
      <div class="col-12 col-md-4">
          <div class="card-image"> 
          <img src="data:image/jpeg;base64,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"></img> </div> 
          
      </div>
      <div class="col-12 col-md-4">
        <div class="card-image"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4LU-AjKOCx1-sY9LFrPM7JX0Hhxvhq4JmrQ&usqp=CAU"></img> </div> 
     
    </div> 
    <div class="col-12 col-md-4">
          <div class="card-image"> 
          <img src="https://img.freepik.com/free-photo/children-standing-sideways-camera-looking-charge-boards_259150-60315.jpg"></img> </div> 
         
      </div>
      <div class="col-12 col-md-4">
          <div class="card-image"> 
          <img src="data:image/jpeg;base64,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"></img> </div> 

      </div>
      <div class="col-12 col-md-4">
        <div class="card-image"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdyQoeHH1Nc61bzUBHPeHs5sj5tsEJ93IfQxtF5_dP6EJp8yw_pL59WnHsBMhCkf9cSI&usqp=CAU"></img> </div> 
    </div>
    </div>
    <h1>Science Laboratory</h1>
    <div class="col-12">
             <p class="science">A science lab is a workplace for the conduct of scientific research. It helps students to remember the concepts better and to transfer the experience to real-life situations. It is a facility that provides controlled conditions in which scientific research, experiments and measurements may be performed.

              RNS International School has the best-designed, spacious, sophisticated and safe Science laboratories. These labs are equipped with the most modern apparatus which encourage students to learn through experiment and research work.
              
              At RNS International School a scientific temperament is nurtured through fully equipped and suitably designed laboratories for Physics, Chemistry and Biology. Students are encouraged to use the facilities for enhancing their innovative and scientific skills. The Physics, Chemistry and Biology labs at RNS International School cater to the needs of conducting experiments specified by CBSE.
               As many as 20 students can perform a wide range of experiments simultaneously while the teachers are always at hand to provide constant supervision and guidance for optimum results. Projects can be developed of a very superior standard thereby encouraging investigative analysis and reasoning.</p>
               <h2>PHYSICS LAB:</h2>
               <p class="science">Our physics lab is aimed in enabling student to learn physics theories in a more elaborative manner of its applications</p>
               <h2>CHEMISTRY LAB:</h2>
               <p class="science">The chemistry lab is designed with keeping all the statutory norms and safety standards. It is well ventilated as well as spacious.</p>
              <h2>BIOLOGY LAB:</h2>
              <p class="science">In the biology lab, the students study detailed structures, morphological, histological and physiological aspects of plants and animals.</p>
              </div>
    <h1>Computer Laboratory</h1>
    <div class="col-12">
      <p class="science">
        A computer lab is a space where computer services are provided to a defined community. These are typically public libraries and academic institutions.Generally, users must follow a certain user policy to retain access to the computers. This usually consists of rules such as no illegal activity during use or attempts to circumvent any security or content-control software while using the computers.

        Computer labs are often subject to time limits in order to allow more people access to use the lab. It is also common for personal login credentials to be required for access.This allows institutions to track the user's activities for any possible fraudulent use. The computers in computer labs are typically equipped with internet access, scanners, and printers and are typically arranged in rows. This is to give the workstation a similar view to facilitate lecturing or presentations, and also to facilitate small group work.
      </p>
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
    </div>
    </div>
      </X>
      </>
    );
}