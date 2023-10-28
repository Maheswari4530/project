import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Container=styled.div`
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



.backimg {
    background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20190220/ourmid/pngtree-cartoon-education-training-cram-school-image_9149.jpg");
    padding: 300px;
    background-attachment: fixed;
    color: white;
    background-repeat: no-repeat;
    background-size:100% 80%;
    }
.backimg h1{
    text-align: center;
}
.backimg p{
    text-align:center;
}
.image-container {
    display: flex;
    justify-content: center;
    align-items: normal;
    min-height: 80vh;
    background-color:white;
}

.image-container img {
    width: 400px;
    height: auto; 
    margin: 0 10px; 
}
.section {
    flex: 1; 
    padding: 20px; 
    background-color: white;
    
    margin: 0;
   
    display: flex;
    justify-content: space-between; 
    background-color: #f0f0f0;
    text-align: center;
    
}

.left-section {
    margin-right: 30px; 
    text-align: center;

}
.left-section ul li {
    text-align:left;
    font-size: 20px;

}

.right-section {
    margin-left: 30px; 
    text-align: center;
}
.right-section ul li {
    text-align:left;
    font-size: 20px;
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


@media (max-width: 768px) {
    .backimg {
        padding: 150px;
    }

    .image-container img {
        width: 300px;
    }

    .section {
        display: block;
        text-align: center;
    }

    .left-section,
    .right-section {
        margin: 0;
    }
}
`;
export default function Vision(){
  return(
    <Container>
        <div className='procedure'>
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
        
        <div class="backimg">
            <h1>Vision and Mission</h1>
            <p>Value Driven Education</p>
        </div>
        <div class="image-container">
        <img src="https://www.iconschools.in/public/media/upload/education.png" alt="im1"></img><br></br><br></br>
        <br></br>
        <img src="https://www.iconschools.in/public/media/upload/new.png" alt="im2"></img>
        </div>
        <div class="section">
        <section class="left-section">
           <h2>Our Motto</h2>
           <ul>
              <li>Make kids learn how to stay HAPPY in present situation.</li>
              <li>Make them learn how to be successful in future.</li>
              <li>Make them learn how to get rid of tough situation.</li>
              <li>We create a Happiness Zone.</li>
              <li>Nurture Moral Values.</li>
              <li>Increase their Confidence.</li>
              <li>Make our Future Leaders.</li>
              
            </ul>
        </section>
        <section class="right-section">
           <h2>Motto Pathways</h2>
           <ul>
              <li>Guard's Life skill Program.</li>
              <li>Didi's (Maid) Life skill Program.</li>
              <li>Teacher's Life skill Programs.</li>
              <li>Parents Educator Conference.</li>
              <li>Teach kids the importance of the festival and Indian Culture.</li>
              <li>Teach kids moral values.</li>
              <li>Appreciation.</li>
              <li>Assign responsibility.</li>
            </ul>
        </section>
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
    </Container>
  )
}