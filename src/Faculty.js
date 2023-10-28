import React from 'react';
import './Faculty.css'
import { NavLink } from 'react-router-dom';
const Faculty = () => {
    return (
     <div class="Faculty">
         <div class="container-fluid">
    <div class="row">
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
        <div class="col-12 mt-3 heading">
            <h1 >Faculty</h1>
        </div>
<div class="col-12 col-md-4 col-xl-3 p-3">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="https://thumbs.dreamstime.com/b/teacher-school-classroom-ready-work-32185835.jpg?w=768" alt="Image" class="card-image"/>
            </div>
            <div class="flip-card-back">
                <h2>Name</h2>
                <h3>Role</h3>
                <h3>Subject</h3>
                <h3>Mobile no</h3>
            </div>
            </div>
        </div>
    </div>
<div class="col-12 col-md-4 col-xl-3 p-3">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="https://img.freepik.com/free-photo/smiling-showing-thumbs-up-young-female-teacher-sitting-desk-with-school-tools-classroom_141793-136709.jpg?size=626&ext=jpg&ga=GA1.1.791670146.1697272046&semt=ais" alt="Image" class="card-image"/>
            </div>
            <div class="flip-card-back">
                <h2 >Name</h2>
                <h3 >Role</h3>
                <h3 >Subject</h3>
                <h3>Mobile no</h3>
            </div>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-4 col-xl-3 p-3">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="https://www.shutterstock.com/shutterstock/photos/2250135729/display_1500/stock-photo-mature-manager-using-tablet-computer-during-offline-meeting-in-office-2250135729.jpg" alt="Image" class="card-image"/>
                </div>
                <div class="flip-card-back">
                    <h2>Name</h2>
                    <h3>Role</h3>
                    <h3>Subject</h3>
                    <h3>Mobile no</h3>
                </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 col-xl-3 p-3">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="https://img.freepik.com/free-photo/young-woman-teacher-wearing-glasses-standing-near-blackboard-classroom-explaining-lesson-pointing-with-index-finger-blackboard-smiling-confident_141793-133120.jpg?size=626&ext=jpg&ga=GA1.1.791670146.1697272046&semt=ais" alt="Image" class="card-image"/>
                    </div>
                    <div class="flip-card-back">
                        <h2>Name</h2>
                        <h3>Role</h3>
                        <h3>Subject</h3>
                        <h3>Mobile no</h3>
                    </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-4 col-xl-3 p-3">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="https://img.freepik.com/premium-photo/smiley-teacher-her-desk-classroom_23-2148668558.jpg?size=626&ext=jpg&ga=GA1.1.791670146.1697272046&semt=ais" alt="Image" class="card-image"/>
                        </div>
                        <div class="flip-card-back">
                            <h2>Name</h2>
                            <h3>Role</h3>
                            <h3>Subject</h3>
                            <h3>Mobile no</h3>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 col-xl-3 p-3">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src="https://img.freepik.com/free-photo/portrait-female-teacher-with-notepad-green_140725-150681.jpg?size=626&ext=jpg&ga=GA1.1.791670146.1697272046&semt=ais" alt="Image" class="card-image"/>
                            </div>
                            <div class="flip-card-back">
                                <h2>Name</h2>
                                <h3>Role</h3>
                                <h3>Subject</h3>
                                <h3>Mobile no</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-xl-3 p-3">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="https://img.freepik.com/free-photo/young-woman-teacher-wearing-glasses-sitting-school-desk-with-globe-books-front-blackboard-classroom-holding-white-empty-sheet-paper-happy-positive-smiling_141793-133110.jpg?size=626&ext=jpg&ga=GA1.2.791670146.1697272046&semt=ais" alt="Image" class="card-image"/>
                                </div>
                                <div class="flip-card-back">
                                    <h2>Name</h2>
                                    <h3>Role</h3>
                                    <h3>Subject</h3>
                                    <h3>Mobile no</h3>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-xl-3 p-3">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="https://img.freepik.com/free-psd/mockup-design-smiling-woman-with-slate_23-2147607984.jpg" alt="Image" class="card-image"/>
                                    </div>
                                    <div class="flip-card-back">
                                        <h2>Name</h2>
                                        <h3>Role</h3>
                                        <h3>Subject</h3>
                                        <h3>Mobile no</h3>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-4 col-xl-3 p-3">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src="https://img.freepik.com/premium-psd/businesswoman-writing-air_53876-22474.jpg" alt="Image" class="card-image"/>
                                        </div>
                                        <div class="flip-card-back">
                                            <h2>Name</h2>
                                            <h3>Role</h3>
                                            <h3>Subject</h3>
                                            <h3>Mobile no</h3>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-xl-3 p-3">
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <img src="https://img.freepik.com/premium-psd/businesswoman-writing-air_53876-22471.jpg" alt="Image" class="card-image"/>
                                            </div>
                                            <div class="flip-card-back">
                                                <h2>Name</h2>
                                                <h3>Role</h3>
                                                <h3>Subject</h3>
                                                <h3>Mobile no</h3>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 col-xl-3 p-3">
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img src="https://www.shutterstock.com/shutterstock/photos/1922680670/display_1500/stock-photo-photo-of-optimistic-brunette-nice-lady-hold-tablet-wear-eyewear-yellow-sweater-isolated-on-grey-1922680670.jpg" alt="Image" class="card-image"/>
                                                </div>
                                                <div class="flip-card-back">
                                                    <h2>Name</h2>
                                                    <h3>Role</h3>
                                                    <h3>Subject</h3>
                                                    <h3>Mobile no</h3>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4 col-xl-3 p-3">
                                            <div class="flip-card">
                                                <div class="flip-card-inner">
                                                    <div class="flip-card-front">
                                                        <img src="https://www.shutterstock.com/shutterstock/photos/2179380689/display_1500/stock-photo-happy-young-asian-saleswoman-looking-at-camera-welcoming-client-smiling-woman-executive-manager-2179380689.jpg" alt="Image" class="card-image"/>
                                                    </div>
                                                    <div class="flip-card-back">
                                                        <h2>Name</h2>
                                                        <h3>Role</h3>
                                                        <h3>Subject</h3>
                                                        <h3>Mobile no</h3>
                                                    </div>
                                                    </div>
                                                </div>
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
            </div>
     </div>
      
    );
};

export default Faculty;
