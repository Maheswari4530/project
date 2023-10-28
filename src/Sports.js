import React from "react";
import styled from "styled-components";
import "./Sports.css"
// import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';




export default function Sports() {
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
}




  // main
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
.col-12 p{
  // border: 3px solid black;
  // border-radius:15%;
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
background-image: url('https://ilm.com.pk/wp-content/uploads/2011/07/Importance-Of-Sports-In-Students-Life-1.jpg');
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
    <div className='home'>
        <nav class="navbar navbar-expand-lg lg:w-screen lg:h-14 shadow-sm lg:px-16 lg:py-3 navbar-light bg-white fixed-top">
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
        </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="bg-text">
            <h2>Sports teaches you the character,it teaches you to play by the rules.</h2>
            
          </div>
        </div>
    </div>
    
    <div class="row">
      <div class="col-12 col-md-4">
          <div class="card-image"> 
          <img src="https://images.unsplash.com/photo-1628867577980-a737edf95e15?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9vciUyMGdhbWVzfGVufDB8fDB8fHww"></img>
      </div>
      </div>
      <div class="col-12 col-md-4">
          <div class="card-image"> 
          <img src="data:image/jpeg;base64,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"></img>
      </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card-image"> 
        <img src="https://previews.123rf.com/images/soumen82/soumen822008/soumen82200800027/153768283-selective-focus-on-a-dice-of-ludo-indoor-game-on-a-shiny-surface.jpg"></img> </div> 
     </div>
  
    <div class="col-12 col-md-4">
          <div class="card-image"> 
          <img src="https://c0.wallpaperflare.com/preview/314/125/185/six-woman-playing-outdoor-games.jpg"></img> </div> 
         </div>
      
      <div class="col-12 col-md-4">
          <div class="card-image"> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsgHIjY0wjmpyB4TMfjfdFs91TfE9IXyKoQ&usqp=CAU"></img>
</div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card-image"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBABE80vEJtq-FANw91v9VgvLfIA6gKjqBQ&usqp=CAU"></img> </div> 
    </div>
    </div>
    <h1>Indoor games</h1>
    <div class="col-12">
             <p>In comparison to outdoor games, we consider Indoor games as inferior when it comes to health benefits. But you know this belief is not the actual truth. Indoor games not only provide cherished family time on Sunday afternoons but they have a lot more to offer.  

In todays time due to lack of time, lack of open areas and dependence on technology we see quite often kids running around the local street playing hide and seek, hopscotch, cricket etc. Also due to the increase in kidnapping cases and high crime rates, parents have also embraced their kid's stay at home. For all people, it is so important to relax and have some fun. Most people dont know that they have a plethora of benefits. So lets dive deep into the benefits of indoor games.
In Today's life stress, laziness and boredom have become inevitable companions and indoor games come as a  saviour for us from these. Indoor games help to stay fit mentally and physically. Involving in activities and spending time playing indoor games helps the kids to be away from stress and anxiety. It is very important for the mental well-being of a person. During playing Indoor games there are lots of laughter and laughing keeps the stress level down and keeps the mood happy. Board games like snakes and ladder, ludo, chess etc are great fun to play with family after a long hour in the office or school. </p>
              </div>
    <h1>Outdoor games</h1>
    <div class="col-12">
      <p>Spending time outside presents extensive benefits for childrens physical development throughout their preschool and elementary years. Outdoor play is directly related to a childs physical strength, weight and immune function. Kids who are active throughout childhood are usually more likely to engage in regular exercise later in life.

Encouraging outdoor play in young children helps develop a healthy attitude about maintaining an energetic adult lifestyle.

When compared with their peers, kids who spend more time outdoors typically exhibit the following attributes.
Playing outside allows kids to develop more advanced motor skills than children who spend most of their time indoors, including agility, balance and coordination. Kids who spend time playing outdoors are more likely to move in ways that challenge their muscles, bones and physical endurance. Outdoor environments give kids the space they need to walk, play and swing. They can play catch. They can crawl under bushes, climb trees and ride bikes.</p>
    </div>
        
      </X>
      
      </>
    );
}