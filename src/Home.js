import React from 'react';
import './Home.css'
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
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
                    <button class="btn btn-sm btn-dropdown dropdown-toggle dropdown-toggle-split  btn-sm" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        About Us
                    </button>
                    <div class="dropdown-menu">
                        <li><a class="drp-btn" ><NavLink to="/Vision" className="Nav_List">Vision</NavLink></a></li>
                        <li><a class="drp-btn" >
                        <NavLink to="/Faculty" className="Nav_List">Faculty</NavLink></a></li>

                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn btn-sm btn-dropdown dropdown-toggle dropdown-toggle-split  btn-sm" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <span className="border-none">Admissions</span>
                    </button>
                    <div class="dropdown-menu">
                        <li><a class="drp-btn" ><NavLink to="/Procedure" className="Nav_List">Procedure</NavLink></a></li>
                        <li><a class="drp-btn"><NavLink to="/Registration" className="Nav_List">Registration</NavLink></a></li>

                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn btn-sm btn-dropdown dropdown-toggle dropdown-toggle-split  btn-sm" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Academics
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
        
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
      <img src="https://t3.ftcdn.net/jpg/03/69/00/58/360_F_369005893_UYbUUUHDiB0HT7vs7EpO0JZ4vf830R5K.jpg" class="d-block w-100 h-100" alt="..."/>
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="https://t3.ftcdn.net/jpg/03/69/00/58/360_F_369005893_UYbUUUHDiB0HT7vs7EpO0JZ4vf830R5K.jpg" class="d-block w-100 h-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://t3.ftcdn.net/jpg/03/69/00/58/360_F_369005893_UYbUUUHDiB0HT7vs7EpO0JZ4vf830R5K.jpg"class="d-block w-100 h-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        
     
      
        <div class="greetings-section pt-5 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-5">
                <div class="text-center">
                  <img
                    src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697120060/i5_g1xkak.jpg"
                    class="greetings-section-img"
                  />
                </div>
              </div>
              <div class="col-12 col-md-7">
                <h1 class="greetings-section-heading">
                Our Chairman's Message
                </h1>
                <p class="greetings-section-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio possimus doloremque omnis? Illo laudantium officia reiciendis sunt iusto rem, voluptate velit repellendus natus modi! Perspiciatis, aliquid tempora! Aspernatur,Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum soluta, recusandae beatae molestiae impedit consequuntur officiis perferendis suscipit possimus, odit nam omnis necessitatibus asperiores placeat quod mollitia facilis fugit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="principal-section pt-5 pb-5" >
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-5 order-1 order-md-2">
                <div class="text-center">
                  <img
                    src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697120047/i4_xdcja8.jpg"
                    class="principal-section-img"
                  />
                </div>
              </div>
              <div class="col-12 col-md-7 order-2 order-md-1">
                <h1 class="principal-section-heading">
                  Our Principal's message
                </h1>
                <p class="principal-section-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem praesentium, debitis, quasi odio eveniet doloribus vero quo dolor illum soluta nihil molestias! Ad enim placeat quis, delectus maxime quam dolores!,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum id mollitia, modi iure qui cupiditate laboriosam deserunt minima, aspernatur consequuntur repellat eaque itaque pariatur molestias! Voluptatum, nisi! Saepe, nemo minima.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores recusandae modi, ea dicta accusamus deserunt sequi consequuntur ut laborum adipisci incidunt eligendi, fugit cumque voluptas eaque debitis a quia. Architecto.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div class="events-section pt-5">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h1 class="events-heading">Our Events</h1>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="shadow events-card p-3 mb-3">
                  <img
                    src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697119484/i1_c2j51j.jpg"
                    class="events-image w-100"
                  />
                  <h1 class="events-title">Cultural</h1>
                  
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="shadow events-card p-3 mb-3">
                  <img
                    src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697120109/i8_qrcvad.jpg"
                    class="events-image w-100"
                  />
                  <h1 class="events-title">Cultural</h1>
                  
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="events-card shadow p-3 mb-3">
                  <img
                    src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697120096/i7_ca6zon.jpg"
                    class="events-image w-100"
                  />
                  <h1 class="events-title">Independence Day</h1>
                  
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="events-card shadow p-3 mb-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvrkq_4Tnf8ItjQ8hHobakZzaL-oSuDCfIg&usqp=CAU"
                    class="events-image w-100"
                  />
                  <h1 class="events-title">Drama</h1>
                 
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="events-card shadow p-3 mb-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZ_UPa76Yt7UnUA99FAEcCzbZj76vxNA0eA&usqp=CAU"
                    class="events-image w-100"
                  />
                  <h1 class="events-title">Krishnastami</h1>
                   
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="events-card shadow p-3 mb-3">
                  <img
                    src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697120047/i4_xdcja8.jpg"
                    class="events-image w-100"
                  />
                  <h1 class="events-title">Cultural</h1>
                  
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="events-card shadow p-3 mb-3">
                  <img
                    src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697120083/i6_ftrxvk.jpg"
                    class="events-image w-100"
                  />
                  <h1 class="events-title">Cultural</h1>
                 
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <div class="events-card shadow p-3 mb-3">
                  <img
                    src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1697120047/i4_xdcja8.jpg"
                    class="events-image w-100"
                  />
                  <h1 class="events-title">Cultural</h1>
                  
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
      
    );
};

export default Home;
