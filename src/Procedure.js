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
.containe img{
    height: 100%;
    width:100%;

}
.containe{
    height:25%;
    width:100%;
}
h1{
    align-content: center;
    color: rgb(1, 5, 6);
    font-family: "Roboto";
    font-weight: bold;
    text-align: center;
}
.contain{
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color:#DFCCFB;
  box-shadow: 0 0 10px rgba(14, 95, 142, 0.1);
}
.vision {
  margin-top: 20px;

}

p {
font-size: 16px;
margin: 0;
}
.lpic{
  display: flex;
  justify-content: center;
  width: 600px;
  height: 300px;
  margin-left: 30%;
   
}
@media (max-width:700px)
{
    .lpic{
        margin-left:0%;
    }
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
@media (max-width: 768px) {
  .container {
      height: auto;
  }

  .lpic {
      display: block;
      text-align: center;
  }

`;
export default function Procedure(){
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
      <div class="containe">
        <h1>ADMISSIONS PROCEDURE</h1>
        <img src="https://www.edusys.co/Edusys/UploadFiles/Branches/k3r/Blog/1_131834501320003769.jpg"/>
      </div>
      <div class="contain">
        <section class="vision">
            <h2>Registration and Admission Process</h2>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem praesentium, debitis, quasi odio eveniet doloribus vero quo dolor illum soluta nihil molestias! Ad enim placeat quis, delectus maxime 
          quam dolores!,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum id mollitia, modi iure qui cupiditate laboriosam deserunt minima, aspernatur consequuntur repellat eaque itaque pariatur 
          molestias! Voluptatum, nisi! Saepe, nemo minima.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores recusandae modi, ea dicta accusamus deserunt sequi consequuntur ut laborum adipisci
          incidunt eligendi, fugit cumque voluptas eaque debitis a quia. Architecto.
            </p>
        </section>
    </div>
    <div class="contain">
        <section class="vision">
            <h2>Submission Of Application Forms</h2>
            <p>
            The application form for registration, complete in all respects should be submitted at the school office along with the following documents:-
            </p>
            <ol>
              <li>2 latest passport size photographs.</li>
              <li>Original Transfer Certificate of the school last attended.</li>
              <li>Xerox of the progress report of the school last attended.</li>
            </ol>
            <p>The selection and admission will be made by the principal after scrutinizing the application 
              and assessing the student's performance in the previous class.</p>
        </section>
    </div>
    <div class="contain">
        <section class="vision">
            <h2>Interviews</h2>
            <p>
            The interview is as pleasant and unthreatening
            as we can make it. It is normally conducted by the
             respective Principal and the Counselor/ Psychologist. 
             We are interested in knowing about the child's/ student's 
             educational development, use of language, social skills, 
             academic enthusiasm and extra-curricular interests. The 
             aim of the interview is to find out what the student 
             knows, understands and enjoys
            </p>
        </section>
    </div>
    <div class="contain">
        <section class="vision">
            <h2>Admission</h2>
            <p>
            On being offered a place, parents will be given two weeks
             time to pay the admission fee and security deposit to secure the place. Parents further need to fill and submit various forms and declarations that would
              be given along with an admission acceptance letter. Before allowing the student to take up his/her place, a transfer certificate should be submitted with the admissions
              office from the earlier school of the student.
            </p>

        </section>
    </div>
    <section class="lpic">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_2zwS6c8dUpSdZgk7ojoNhYYQL-afvT2wQ&usqp=CAU"></img>
    </section>
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