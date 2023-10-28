import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export default function Library() {
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
  .para{
    height:370px;
    width:100%;
    background-color:lightgreen;
    font-size:20px;
    padding:2%;
  }
   @media (max-width:1200px)
   {
     .para{
       font-size:18px;
       height:430px;
     }
   }
   @media (max-width:900px)
   {
     .para{
       font-size:18px;
       height:510px;
     }
     .row2{
      margin-top:0%;
     }
   }
   @media (max-width:700px)
   {
     .para{
       font-size:18px;
       height:700px;
       background-color:lavender;
     }
   }
   
   @media (min-width:2200px)
   {
     .para{
       font-size:18px;
       height:600px;
     }
   }

  .row {
    font-size:10px;
    color:black;
  }

  .row h3{
    padding-top:4%;
    margin-left:5%;
  }
  
  .row1 img{
    height:500px;
    width:100%;
  }
  .row1{
    height:500px;
    width:100%;
  }
  .row2{
    height:360px;
    width:100%;
    padding-left:1%;
    padding-top:2%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-bottom:1%;
  }
  // .row3{
  //   height:180px;
  //   width:100%;
  //   padding-left:1%;
  //   padding-top:2%;
  //   display:flex;
  //   flex-direction:row;
  // }
  @media (max-width: 800px) {
    .row2{
      flex-direction: column;
      padding-left:5%;
      height:500px;
    }
  }
  // @media (max-width: 800px) {
  //   .row3{
  //     flex-direction: column;
  //     padding-left:5%;
  //     padding-top:0%;
  //   }
  // }
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
        <div class="row1">
        <div class="col-12 col-sm-12 col-md-12">
          <img src="https://previews.123rf.com/images/darkink/darkink1708/darkink170800002/83471466-school-library-and-reading-room-the-young-librarian-gives-out-the-books-at-the-counter-vector-flat.jpg"></img>
        </div>
        </div>        
        <div class="row2">
          <div class="col-12 col-md-6 order-1 order-md-1 order-sm-1">
          <h1 style={{textAlign:"center",paddingTop:"2%"}}>Books Available</h1>
            <h2 style={{textAlign:"center",paddingTop:"2%"}}>500</h2>
          </div>
          <div class="col-12 col-md-6 order-2 order-md-2 order-sm-2" >
            <h1 style={{textAlign:"center",paddingTop:"2%"}}>Computers Available</h1>
            <h2 style={{textAlign:"center"}}>60</h2>
          </div>
          <div class="col-12 col-md-6 order-1 order-md-1 order-sm-1" >
            <h1 style={{textAlign:"center"}}>Staff</h1>
            <h2 style={{textAlign:"center",paddingTop:"2%"}}>15</h2>
          </div>
          <div class="col-12 col-md-6 order-2 order-md-2 order-sm-2">
            <h1 style={{textAlign:"center",paddingTop:"2%"}}>Students</h1>
            <h2 style={{textAlign:"center",paddingTop:"2%"}}>1200</h2>
          </div>
        </div>

        <div class="para">
        
          <p>
          A library is a collection of books, and possibly other materials and media, that is accessible for use by its members and members of allied institutions. Libraries provide physical 
          (hard copies) or digital access (soft copies) materials, and may be a physical location or a virtual space, or both. A library's collection normally includes printed materials which can be borrowed, and a reference section of publications which are not permitted to leave the library and can only be viewed inside the premises. There may be other physical resources in many formats, such as commercial releases of films, television programmes, other video recordings,
           radio, music and audio recordings on DVD, Blu-ray, CD and cassette, besides access to information, music or other content held on bibliographic databases.
          </p>
          <p>
          Libraries can vary widely in size and may be organised and maintained by a public body such as a government, an institution such as a school or museum, a corporation, or a private individual. In addition to providing materials, libraries also provide the services of librarians who are trained experts in finding, 
          selecting, circulating and organising information, and in interpreting information needs, navigating and analysing very large amounts of information with a variety of resources.
          </p>
      
        </div>


        <h1  style={{textAlign:"center",margin:"1%",textDecoration:"underline green 2px"}}>Famous Books</h1>
        <div class="row">
        <div class="col-12 col-md-6 order-1 order-md-1">
             <center><a href="https://www.drishtiias.com/images/pdf/NCERT-Class-10-Science.pdf"><img src="https://d2cyt36b7wnvt9.cloudfront.net/exams/wp-content/uploads/2021/11/15232643/Screenshot-2022-08-15-175617.png" alt="pic" style={{paddingTop:"4%",
    height:"240px",
    width:"450px",
    paddingLeft:"10%"}}></img></a></center>
        </div>
        <div class="col-12 col-md-6 order-2 order-md-2">
             <h3 style={{textAlign:"center"}}>
              Author:Rajesh
             </h3>
             <h3 style={{textAlign:"center"}}>
              Date of Published:1 January 2019
             </h3>
             <h3 style={{textAlign:"center"}}>
             Book name:Science Text Book
             </h3>
        </div>
        <div class="col-12 col-md-6 order-3 order-md-4">
             <center><a href="https://drive.google.com/file/d/13EHHeWeXkvsFtk6B22t5tgNdduSNgTLK/view"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFRUXGBYaFxcVGRcXGhcWGBoYFxYZFxkbHiggHR0mHxkWIzEiJSorLi46GB8zODMsNyktLi0BCgoKDg0OGxAQGyslICUvLS0tLS0tMi0tLy0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQQAwgMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwQFBgECBwj/xABMEAACAQIDBQQFBgsFBgcAAAABAgMAEQQSIQUGEzFBByJRYRQycYGRI0JTobHRFRczNVJyc5KTwfAkYoKywxZDorPh4jRUY3TC0vH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAOREAAQMCBAMFBgQFBQAAAAAAAQACEQMhEjFBUQQTYQUycaHwFCKBkcHRQlKx4RUjJGLxQ3KCorL/2gAMAwEAAhEDEQA/ALthx3F/VH2VvaonbWEklw2SE2chLfKPDoLX76AsPhrUfuns6eGSQTuCco7vpMs5BvfVZFGXQjXzr4LAC0uxCdtfV17YcQQI+K6VsAfJf4j/ACqSyjwqM2G1obnoW8/Con8ISYqXhoxWInmlwSgOrZspsSRbKbHne2hP1/Bvw8LT3wj9F5dUTVd4q05R4UZR4VH4TakDMIo3DHkAtyBYX9bl9dJT7fhRiCWIDZWdVJRWPQtXUarAJJCywnZSuUeFGUeFVnG4h8NKGjJMUpBCk3XN1sSAEB/W8D5GwYXECRA68iLjQj7QDUtfJg5oWxdLZR4UZR4VtRV1Va5R4UZR4UnPMqKzuwVVBLMxACgakknkBXEt/O0uXEs2HwLNHBqGlF1eXxynmif8R8hodKdM1DbLU7Ir9vV2jYPBExg8eYaGOK1lPhI/JfZq3lXNdrdpm0cQTw2TDJ0EShnt5u4PxAWqbBhwvt/rlS1aEsZZgnqfoMv1XM+t+VK4rFSym800sp/9WR3+om1IBQOQresVQuJzKxLicyiito5CpDC11IIuLi4NxcHmPKrLiNsYR30gKJbEA6C+V1ZoR3baq8si355Uj5kVVAqxRVl9L2dlKiKSxYN3sxIyriAozZ75byQXAyk5GJ6Cm+0JcAYWEMciyZe6WL6NmiIzd8r6vGHLmV9xI6qCoqySY/Avl4kTZhkHcuqFQbOQA2ZWIynLcqLG1r6YOMwBVQ0LXVtFBdRw+LIT3sxbMUMepvbvWtpRTHVVyilsXkzvw75MzZL88lzlvqdbW60jRVWtFbUURde21PEmEbjSmFGQIZBclS4ygiwPU1AbiYfDLNM0GL9IJRQQUZSov1Y8wDooFrDx51NbwYqaPCqcPbiEwqt8nzmVSFEhCljewBPM0w3P2jipXYYoj1AygcC3rFSVMbsxFwRrpoa+Ip4hwz72JykX/wCJafJw8F9OSOY23l46z9Fd52b0MhVY5mscqcTTTmoN/hrW+6CAiR+6TfL3V5AclLsM7MBYa8qSxWHz4TkpAcnvs625csupNMN1tprG5RnU3LWsSRGijNzIuzEsATa9+dya93hHBtOlP5W/p+64qokujcqRx8uTFuw9YRsR7RESKRwGHAwMoP6YPwMZH2UpLHIcUs2RLMuiNIoLKVyXH7w6dbVrHg5AjYdJImR2Uq/EGYLo2q21Yqo5aGxOl9OnA7GXAE97zAj9FXEIAnbyJlZxyhsAjHL3eRdQwHeKi+hKjlqPKnW6btlYFWAOVgctluwDGzMcznX1jpppUdtzFJw0giYDItw55Eqcro4tyNwfDUdKe7nwizuoTKdAVZ2awsBfN0sBytUUzFRrdgB8hf6I7uk+s1Z6wTWa5J2w76ZQdn4du8w/tDD5qnlEPNhq3gCB87T0qdM1HYQudV/tO36OOc4XDN/ZkPeYf79h1/Zg8vHn4VUsLEBlUAHNzNhe9yOfSwF6aYdQo/rxp/BKQL3052uLk35W59K1q1BGBndHn1XHUqYrDJIrHcXuAPO/P3CtJUIJBpZRmUC4BBPMgc7a6+yk5SLnUc+f9CsQsk3JrZa2Vhfp/Xu/q9bRkfZ/XKila0UoLeXs9/srGYA+X2fVRQmzA0mSfOlpH05Umz6+H/5UqUmSfOs3od71iiLOY0ZjWtFQpWcxorFFEXZN7sOZMDlCCTWHQkDQMpJF3QXA5XYVEdnRgBdUgVJgg4jRypIGGY5e6sr5fH41Ib0Ms+zgUjOIVjDYIHY6MtzlTvErqbactaZ9n0CqXPDxUbsq5xMhWO4NgYywDE2A0N7V8aHYeEe0kg4jb7iemRbExrl9Ib1QRt6hdV2KgMNiB6x5i46dKrO8Gy1jUnis7sMuXujKtww7vO11HXTTTmDZN251eI5SDZ2U26MLXHuqF23vBJHNJH6KJFTKFYozZi3DsNAeWZ728BX0PC0DU4Sm3I4Rn1G1vNczWPqV3Bl9cwOmZ8frooSfHYd2ikmWRQFiiDoy5hwnujWYEHvFuXRtb2FsbMTBQTr6KkpMRUnMwAGVCgUAC57jDX+6gN8tq2xqoJeIcCHYlzf5bJ3WlUXjLZdeGDyt3vZfWYI82uBykSKgdeOoK5mvIQhAIChOfida25HE4Yxj5LX2Rxvh/wCw+6kNjQRz3VZWiOZmU3Uk5zquvPSw0I+291weG4aBbgkC17AX8L1UoduzDLbCopMZe+SQa8KOQJ3VJvdyD+oaW3g33iweESeUXmkW8cA0Zm8+eVB1bUeFyRfWhwzm2zJ2t5LDiKT2iXCB4g/ute0ffJdnQWQg4mQERKdco5GRh+iOg6mw8SPPisWLO7FnYkljqSzG7MT1JN/jSu2NqS4uZ552zSOdegA6Ko6KOg+0kmmyV3OIpt5bczmfovNq1PwhPUcWHu+q5rLsD/XmT/OkYWsQanN1928Rj2ZIFFhYu7myLztcgEknWwArnXOASYCigw187/XSbMLed+ddQHY7LlP9sS56cJrX9uf+VU7ezdPE7PC8ZVaNrqsqG6ltSAQRdWsL+GhsedJVjTcMwq6XF7/1yreJgPPl9lIxyDw8frt9311dt1+zrE42JZbpDG2qtICWYeKoPm+ZIva4uDeigNJyVRLi3Xp9t6wX5eX/AErpWM7Hp7XjxUbsBoHRkB/xBm+yuf7YwEuFlaGePJItvDUdGU8iD4/zFELHDMJi7r9v10kCLePPx8vuozc9NTy610HYPZTjJog0zphwQbKwLvY/pKCAvsvfxAojWl2S5+0ovp43+3+vfSFdL2j2N4pFLQzxzMPmFTET5KSWF/bYedc4xOHeN2jkUo6kqysLFSOYIopLS3NJ0UUUUIoooois+7e35MI1170ZtnTx818G+3kfKz7y75KYwmFY5nF2fkUB+aP7/n09vKgryrNcdbs+hVrCs9tx8jtI1jz1ldFPi6rGFjTY+Xh4/wCIXc+x783L+1l+2rxXlaLHzRn5KeaL9lI8f+UipOHfHaK8sdP7yG/zA13YQbl36/SUbVaGgFelqa4/HxQIXmkSNBzaRgo+JNeb8RvXtCTRsbiNf0XMf+S1RM93bPIzSN+lIzOfiTemBmrvkPvCk1mLru9Pa7EgMeAXjPy4rgrEvmAbM5+A8zyrkW0cbLPI008jSSNzZvqAtoAOgFgK0ItypF6vzA0QwR+v7fBZPqk5WWlbA1i1AFZrNKA13HsOy+gy29b0h837kdvq/nXDKtm4m38ZgnZ8PC88TECWMI7KSNRZlByuAfPQ6g6Wgq1N2F0ldV3o2lPg8fFiZGl9AELLJwwzqkt3OaRVBOt47MdBlI661jtG38wOMwMkEDu0paIqGjdR3XUtqRb1c1dB3e3mhxgsFeKXLdoJ1McgXkSFPrLfTMtx0NjpVB7Vdw4I4XxuFThshBljX1GViFLKvzSCQTbQi+l6gLofMEhcrwBA5qDdo116Zs1yPPSvUeyMvAhyerw48tuWXKLW91eV4pSvK3vAPLkRfkR4866buDvri8LGmHxGExEsCgCORIpC8adBa1nQDlaxA8dBUlZUXAG6sWA3vGz2nh2m8wdp5GiYo7q8RsV4bAEWGoyjlbkKpHaTt7DY6ZZsOcwEJQllZWzK5YZQw1ADkn321GnZgcLj4Dok8LXBDC9mHMEHVHU9DZgfA1w7tH3ZGzZ1SJiYJgzR5rFlIIEiZuZGqa9QbG+pMBXqghvRMuz4LJtLCqyg3lB1sdUVnHTxUV3/AHqxLRYLFSIbOmHmZSOjLGxB+IrgnZzIW2pgr/NZlGgGnDkPTnzOpruu+35uxv8A7XEf8pqapR7p9aKP7MMc8+zIJJZGkc8QF3uWOWR11JJJta1+tq5h2twIu1uS/KRQsxa9r3ZCdOuVFF/s50hu5htuSYdGwXF9H7wTJJAi91iGsrMD6wbUjWoTeUY6LEWx9+PkUjiGOQ8O7ZLFSwGufz50Co50sAIKhGjAB172a2Qg3tbnflz0tS20cPwyoyle7rcEZmDMCdemgt5WpPiHLl6Zs3nmta9+fWtWa4A00FhYAaXJ6c9SefjVlik6K2y0URPl5VmnmyMNxWeMGIM8TCIznKglLRgG/RsnFy30vbyqwb1DDhJIsPHBw8OIESZMvEkxJZTKuYG8i8MuWvexXneud/EhtUUsJJOugBIE3zuY+Dvy33bRlhdKqDitDpW7Vqa2JXNqsEVtetRWaqFK1YVoUpQiiplEkqa6jSnOIhUAFRblcXvzAYfz+FaxR3IHiRThirZ7FrnvWIA5a87npekomQWux9hWKXgYiG4ziUSW65WRUv8AFD9VclilUCxRW8zf+RpTDY94pBLAxhdeRjJB8/aD1B0NQrMfhdK7vtfd6eTauExiFRFFG6vckNqJAABbW+cfA+VK9pmLWLZuJL27yBQD85mIAH9dAT0rmuyO0HaLkq2JQKqM7SNCrMFW17BQATr4VH7Yxf4RIzYjEPLZ+Gs2QRsRclVWOyoxHI210vVgtjWbBjVTO8HZeuHwkuJGJLZIy4ThgX0vbNn+u1dT3SxqzYLDSKbgxR38mChWU+YYEe6uF47fHHSK0EuKcxlQrKEi10FxcKCOvI032TvJicKScPiZVvzUhWQnzViR7wL1Cq2q1rrBdl3E3enwcmNaUrlmxDSRhST3SWOY6aEgqLf3ahe0nZiY/HYHBcQIxTEuzABiq2Qpdbj1jG3X5tUx+0faciECZVItqkaZvPmCPgKr8O1cRFiPSFlYT2uZGs7EsCrXLgg6XHlbyopNVkQrjjN2U2NjsBM0/EV5WzEoECKAqFj3jpaQk+yutbw4JsRhMRChGaWGVFJ5XdGUX8ta86bc2/isXk9KmMuS+S6xrbNa/qKL8hz8Ke7H32x2FURxYg5BoEkCuAOgBYZgPIG1EbVa0kRZdt3B2NJg8DFBNl4imQtlNwM8juADYdGFcf7Vcck+0pChDCNEiJGozLmZhfyLkHzU0jtPf/aGIUo2IKKeYiVY7j9Yd4e41Vwo6UlVfUBaGtWLUWrNqzaoWK0y0VtaiimVLbvRF5GROGJGiZYeLly8UtHcDOCA5j4oUnS5FPMXsGbDYaQ4mNYixiECM0bSF1cZyuUmyCPiA3Ot100FNd3ERpJM2HXEKuHkbhMXFyHiAK5FZs3esBb5xuQL062tikeJrbL9Hb5P5fNM2QB17vykYADerz+dXOXP5+BvdJaT3dCCACagIFhIDHm5wn312MA5Unr6yjzVi3J7PUx2HE7zul2ZcqqvzTa+Yn+VWZex/C9cRiPcYh/pmn/Y9+bl/ay/bV4rqlQym0tBhc4PZBhOmIxPvMR/06bz9jsXzMVIP1kVvsK10+ikq3KZsuPYnscmH5PFRt+sjJ9haoXGdl20E1Eccn7OQf6gWu90VCjkMXmjFbuY3Dm74WVeepjLr+8AV+uoqOUgkjLf2A293SvVlR+0Nj4ef8vBFJ+uisfcSLiizPD7FeXzVinxWH9CCApxCsNlCXcZZG9IBfoWORhf5qEaZhfq20uy7AS3yLJCfGNyR+6+YW9lqqe1OyCZbnD4iOTwWQGM29ozAn3CkKnKeMhKjsRjtnuzl5Izd3tw454A0T8HKpMa8gqFSSviQAeeux1wyYhJYTGII1lMshSZgpDEIy8UNZytiEAPgSbhqg9qbn47D34uGksPnIOItvElL2HttUdiseXjijFwsYIIvoWLM2a3jYgUVS4zcKwbcxmB4DphguZyDdlkZhdsOx7zAWvke4vb1rWvTnEz7NldzK0fORgYkmj1McGRRkUXVWEgGZRy1uSWalVukTEEhSQOZAJA9p6e+ijH0CujYjAJisLIuQRtxOKbOy2jjCRnhm7C7ZhqAe7m150ls7DQnDPFlifPLijC0l42kCxouHyAANYuDcZlABYEG+lPApSSZmy3YnKLL/dAN9PeSarKY+iusMOzVkfhhGCeuWXE3RV4WdlVuWoYC92uSNRyisYNniNTFYyBoTznPd0MmYMMpPrXA05W6iovGbXklQqwQZrF2VcrSlfVMh6291R1qmVBf0CvG0pdkytK5IzH1cgnQaRqGICqq8wbHKLte+lQm9cuHZ74YqUMszDKCCEZYLBgQCPlBOQOgOmhFQVq2C0lS50jIKw7q7Lw80crTGxXl3suVbXz+evjppVbFLx4cteyk21NgTYeJ8KxwTUYlRI0UtwqKiUUrur6RxmGFUmVoJFzCQRcJS0bGUuQRZSq3FtcxqS3gdxh8su0/SXcRssMZMsZAmCs3GIscpSSwGU9w8xpURu5gjNOsa4gYd8rMkhJW7goMikEG5BY6fo8qmd5cLkhdZ8ThZpk4YUCLJiFBmUtY93u95ybqT3m11NcdXD7Wy7ZlsjAS7YHGWuaGi04SwxIvmvQpTyj8dbfddK7Hvzcv7WX/NV3qj9j35uX9rL9tXiu9RT7g8EUUUUV0UUUURFFFFERRRRREVE7U3dwuJ/L4eNz+kVGb3OO8PjUtRRIlc82l2S4N9YZJYT0FxIvwbvf8VRuH3Cx2ER44Gw86NckNnickjLp6y2sORNdVooszRYdF5uxu5mPh/KYWW3igEo9vyZaoWWPIcrgq3gwyn4HWvVdJTwI4s6qw8GAI+BqICzPDjQryzlrGSvRmJ3M2fJ62EhF+qKEPxS1Rc/Zhs5vVjkT9WWQ/wCYmowrM8O7RcIyUrFDeuxydkmDPqy4hf8AFEftjvWi9k0A5Ymb4R//AFqC07qPZ3qh7vbVXDJIrIWzG4tbXS1mv0+PM1GR4e4rqa9lOH+diMQfYYh/pmn+F7NMAlsySS2+kle3vClQfhUFjiM1PIcuNcMeI+Iorvf+x2z/APyWH/hp91FRyhurcg7rge7rwrKz4iAzxxwyOY9CLq0YDNcgFQC2hvckaE2qV3j2n6VG90njOH4ISJ1giSESOq/kxaXVTYcwMy8rio/dTDCSZ0OHfEhoHBiRhGSBLA2bOSLWKryN/rqe3rwhEE0p2fLhmk4AaV5kkWyyxZVyBza+RRcDprXJVfTHFtxd6Wge+2wJaLNLwbjEDhbe0YtOimDyfn9Vfux783L+1l+2nW+238RgxG0Sxsj5gQ4csGUFr6MBlsKa9j35uX9rL9tOd/Tb0c2vZpdD1+SbSuyrOG3q66OAwY2l4kAExvAJ+i1xG+NsB6SqrxDlVU1I4h9bwOUZZD/hNKbmbwzYwEyogFr3TMLC5CghiSSSr8uWUeNUmDZ0kTYmA3KxDE5b/wB6Ju/f9QDToZR41Kbn7QMGBxMnzhGoTzdpJ1QfvEVgyo7EC7Y+S9TiOEotpObSAJL2gHo8EtHyifEhSr76sMbwii+jlmjRrG7Opykg3sRmDAADw11pXb+8eKhkm4ccXDiCEFw5Zg2UZu6wAGZiBfnlPOxtU9rbKnXCI+SPLEykSoZC3NUJAZQLFgGJ8bnlVn2nj+NsaR/7iAjw7yED3Age40D3EEGQc/2+BQ0aAdSfTDS1xwHX8Qh3+5zc9tFjZ28uMkjEpjh4bArmUP3JGW6ZwX9UkqNPG1xTrcveabGE8RIwO9bIGW2UKTfMTe+dfC1j5VncL/wLewf8pKqvZ7s9pkYLPLCbv+TYqDYRcwCNe9z/ALoqwc4Fl5kLNzKTqVYkBuFwaCBu53XYAfAKw7L3nxMmKlwxWLuO8YYK41BbvG7nQKrG3XQXHOm+wd7Mdi7iOOC4voVfplubmUad5fHnUbujFk2nKlycszjMxuzWEwux6k86a9n+zmnzqs0sXrEmJ2Xlk0IUjU5uZ/RqjXvOEX112XRWo0GCqYAgUoMT3gSbdVadqbfxsEDu0UQkjZc2jsjh2ZV4Vm56KTc/O6HSt9ib48XCSTyKqvGGuFuAzfNAB1F8yDnzakdrIseDaIzCUpNCurZmUKYtG87d4/rVW8JgpUxqqB3JeDOFtoST3V8gJGNx4R+VWLnh1vRuuemyhUoOLgAQXOkSJa3DLb7h3u6zAkqybn704jFuQ8ceXUdwMpWwBLHMxuO8osNdfKs7xb4Nh8UqKimFSqzOwOjMMwCsDYZRYnQ31GlqhuzrErFxnY2VBMzH+6oiJ+ymUuz8RPhZX4cbZiZma8mcMflTYZcubKQvPkANNarjfyxBvnutncPQHGPDwAwENiYzFz1IF/GFcNu7dxKOq4dY8piMmaUObkZiyrkYWygC5OgzDW5AMXsfe3GTqJBFCUDASBQ6uqXAZxdiLAEn3UvuntLjbOlUm7JHID+6w+JtmP69I9lP5N6uCXOEEwRK5ywUuHqB7G4mODf/AFJzzMWPgldhb2YifFPAyRZVfL3Q6nnzJLEaKGNramw051ud65sRM0eDRCikrncFi5HMoAygLy1J6jqQKg9kIW2ji1XmZpwPaROBTrssOVpY2FpFMlwea/klI+KkH2Cqse50NnMnxstuIoU2Co9rRLRTgaDELujyvYTfRWGHb8sTvHjI1XKhkV4rlWUK7HQk960Z0v18NSx2Vt3HYpTJCkITUqrhm5FhlZ+ILMcp5KQLi9TW2sdhbSRzspKoxZQMzKjqVa1hcErm87XPKqLiN0JYUbEYTFNwgpkDBil0UX1ZSLmw9nsqzy4GAZHjdY8O2i9pLwGOJEEtJabXGwmQdgLNibdE2NjjNHmZDGwsHU9HsCwB62JI9oNSVVbcPa8uIgHG1dQLta2YFnUX87IDfrerTW7DLQQvPrUzTquYcwSLZWMW9eaKKKKss15k2HhEklcSSSxIsMjs8QuQEaO4YfoWJPTVV8gZDeSfCSZpIcViGkPCtE6MqELw1a5PgFL201FMdg4sRSyExrKXhkjSN42nV5C8TqrRrqQeGeXI2NS+2cLihhHebAYLCoTFrFEIpj8rHayhmOW9gQ2WuN9R7eJbiJAloHvNAMkTZwLnCQJwkRGYuqUwDSt13+9l0vse/Ny/tJf81Tu2N3ocSyPIGzJ6pDEW1vy5Xv1qB7Hvzcv7WX7ase3MRLHGDCmcllHItYE/ojU35X+bfMbgEV1uiLrThi8YcBg7zHmjFbGiliMcl3umQuTZytw1iwtpcA25G1Rqbm4cIY+/kLBst9M40De21x4e+pDamLmRIiid5nUOLF8oKMTqPAgC50+NNH2/LmZVwrtbMA7ZokYhXIJLp3VJS19bZlOo1qCxpzCuytUYIY4jWxIvv4p7iNixyQejyFnXxJseeYerbQG2nkKZR7pwCJobuYmIOTNoGBJuLeJPI3HKjbG0cUqRyYeHOGRyYypLhgBIgOoy5kWRLWNnePpe6h2zKJTH6OxAaNc5zKDxA/q92zZGCBrE2DFulqktB0RtWo0Q1xAmbEi+/j1SuzthRwxvEpcxuCMhbQA3zZSLEE3Ot+g5UnsbduLCsWhLgHmtwVPgTpf4fyFZxG1JuOsSQsF4qq0hDEZDHI5IsLDvIq3uR3+hsKSwm2ZcozwuXbETx6I6hIkkmWKRiQdGREN+RLjkCKjCLWyUGo8gguN875+O/wAViHdOBZGkQupa+azHvBjdgTz18b386bpuLhV9XOvsa1KR7wzsmcYNxbh91uIrHPM0Og4V7BVEh8Aw061q28sq6thXy2ZrnMuUCOSQBrpbmgUm/NxUctuwV/aa8k43X/uP3Wf9i8NwzH3shbNa4FmtlJ0GpIsNb8ha1SkGx41QRtmkADBS57yqy5CFYWI7ulxrrzpxs7FcWJJLAFgCQGDgHqMw0NuVO6kMaMgqvq1H95xN5uSb731VXg3LwyB1XOFcZXUHRgDdQdL6Gx/6XFSmD2PHHC0N2aNgRZjyUqFygixAsPbrUpRQNaMgj61R/ecTrck33VdwW6cESuilwkilXTNYNfQk21v7/benGxd3osKSYi4BvdSQVJ015XvpU1RQMaMgjq1VwIc4mc5JM+M5qvYXdWGKUzRl1Ym5s173bMwJa5IJ59fOttrbrYed+KUyyfpoWUnp3spBJt1qfopgbEQpFeqHY8bpymTMbTMx0yUBsrdmGG5AzE39bUd4ZWJv6xIuLsSbEi9jTWbcqA3CZkQm5QM+TN5Lmy28iDVpoqDTYbQEbxFVpJDyCc7m/io/ZezY8OmSMe0m1ybADkAAAAAAAALWAqQooq6yRRRRRF5q3YbFicnAjNMI3JXu96PMgcd4jqUOjA6aGpDeLZE3B4+JwcsLxrGiu0yTI2eck5sxaUN8q9u8w5X5VG7siL0gGbEvhUVGbiRnK5IZAIxob5rkkWOinTqJDeqeGUF4HwyZct1jebiYi7qLuhjjjFr5zYMe7764ahcOMZhZa0uDHyLxBcHBpBBi4cGhxkCZVKYHJPxtb0F0/se/Ny/tZftqx7bxzwoGSMucyg21ABPUDXX1RYGxYE2AJqudj/5uX9rL9tWTbm0TBGHCF7sq+AFz8462vyGmpKjS967XGAbrTh2yWiJytlKT2ttOSKJJFiJJIzpoXVcrFsqhgHZSBdQbkBsuY2BZPvJYhHgdsxsSBprKkQuDfTvgnyVj5VI4/anCWFih+UcKQ2jKCjvy5Zu7a1/fUV/tpAdDHLrl0IjOjLiGGgfXTDyaC51UWN6lQmuJ3wkyGSKAsOEXUEE5mEWIlAzLpY8ONbgHViNbg06m3kdUe8JaROJZsuVMyySRIbFi2U5DqL8xyzClBvNCqlY4pLIpNgERVVFiI5sLC0sY0GmoNrGsne+DMVCyMQ0im2S2aMRE27+oPGQC1+vK1ERtnbM8VykQdTBnBs3dkBByvY8mXNa3VbdRWuI3lbOUjhJyuylmuFOR4ENrDqJXt+ybnaldo7fMao+RSrQSzetqBEqOVFtDcPzv0862wm88MkgiCyBi7JcqCt1aVDcgmwvC/O3zeWYXIkot5wwQiGQBjGO9YEZ0EneF7iwIF+Vzp1slJvPmXuwNcqjHPyGeFpbEDmRZVI01YailMXvXGgc8KW8ZkzBgFvkWc9w3sbmCQD2eBFKRbxBhOFjJkht3Qyd9WlkiTKxYDMTE3dJAJsL63oiWwG2xI6IInUM0q3IsAYtO8vNc1iVJ0Isb94AzdVTD75xESF0cBAGGUG7KYYZmurZWVhxbZSNbDqbU6feiMNYxuBeRQSYxmaOYQWW721ckAsR08RRFYaKrT73Qgt3JCE4mcgKbcMxBtA1z+VB8e61WWiIooooiKKKKIiiiiiIooooiKKKKIvLEcEjkiKN5WAJyxozmw62UEgXIF/MVO7c3fTDROb4lpEKAlsO0cJLOqtaQggizG2uunsqI2fI6uWQzrZGMnorcOQRXXMVaxsA3DvpbTpzE5tnFQyQ4h4G2lJHniGbESZsMl5UIyhnzltLAEEjNc251yV31xXphvckAkAHMgQ4/hkZC2IE3MWypU2GmSRe/1yXTex/83L+1l+2rJtnaa4dA5UtdgunIXPVuQ8geZso1Iqt9j35uX9rL9tXVlB5i/wD01FdZnRaUS0BuISFGbU2ssMSSlGKsRe4YcNSpbO62LACwB07t7mwBIYS7xYZpUBXMFLEPb1JLxRLYW+cMSov0zEGrA8Sta4BtqLi9jWBAoNwq311sL6kE/WB8BRSor8PxF0RFZi8hQkgqBbNdhcd4ZlI08D4U1g3pS7GSJ0USyxK474ZomxAk5C4yrh2c9O8BctcVO+ipe+Rbgkg2F7nmb+J8a2ECj5q6EnkOZvc+03Pxoign3pizFQhNiignTvGVoHU6aFSrHwNtDWuE3kwilUjDDPlkFkIB9IeQq+v6RSRr/eLzwwyfoL4chyBuB8da19Dj+jT90eZ8PEn4miKNfeOARxyktkkZlU5ToysVZWHNStnJB1GR72ymmkm9kSsAyG3EeNmFiFynFC9uZ1wz3FuuhbrYViUAAKAByFhYe73mtGwsZ5op/wAI8z/8m+J8aIofEbxJHiHhdLBfn35nKjhbWtc5uV790nlqM/7TQFlUXIYEjQhibwhQFI+dxktcjpa/SYOGQkkopJ5kgXPLn8B8BWpwcdrcNLeGUeXl5D4CiJjJtZQ0wK9yDLxGOh1Tidxbd4WI1vzzDpSS7zYctkBYt0GU6n5O4Hn8rH8dL1LNApNyoJta5AJtrp7NT8a19Ej/AEE6fNHIWt/lX4Dwoih8ZvVh40ZznICuwspGYKjyd0m17hGseVxY2NSeAx6TZ8l7xu0bg6FXW1wR7CCPEEEXBBrP4Piz58i5iCOWliSTpyubm55mnEcYXkAPYLa0RKUUUURFFFFERRRRREUUUUReZ9j4mKLEF5zPlVXsMOzRs0geMqpZSLIbMTcj1R1tTzb28fpcRDcSArlyYeIg4dxxAxLWUEOoudbglQRlvlMHP6ze0/bWorI8NTfVbWcPeEQdvAZX+e0QFyCs5rcIyuuqdnm+GDweAWOeWz55DkVHc2J09UED3mpTEdrWEGkcOIk88qKPre/1VyTBqMt7U5rowrA8W5vugZLocva2fmYFj+tKF+oIftpL8a2I6YFP43/ZVBrWmA7+Sp7Y/wBR9l0Je1afrgF90/8A2U5h7WR/vMFIP1HV/tVa5pW1MBQcY/1/hdZwvapgW/KCeL9eO/8Ayyxqe2fvdgZ7CPFREnkrNkY/4Xsfqrg1JvAp5gUwLRvGnUL0yKzXm/Z2NxGH/wDD4iWK3zVY5fenqn3g1bNl9qGMisMREk6/pL8m/mTYFT7Mo9tQWldDOLpu6LslFUXD9qmz2UFjKh6q0ZJHvW4+ulvxobO+kk/hSfdVVtzG7q6UVS/xobO+kk/hSfdR+NDZ30kn8KT7qJzG7hXSiqX+NDZ30kn8KT7qPxobO+kk/hSfdROY3cK6UVS/xobO+kk/hSfdR+NDZ30kn8KT7qJzG7hXSiqX+NDZ30kn8KT7qPxobO+kk/hSfdROY3cK6UVS/wAaGzvpJP4Un3UfjQ2d9JJ/Ck+6icxm4V0oql/jQ2d9JJ/Ck+6sUTmN3C4ZP6ze0/bWop9gtmviJmRLAAszu2ixoD3nc+A+vlTnbWxREomgczYcnLnIysj/AKLr82/MHkb1nz6bXCmTe3nkCcgToMzFguPCc03wfq+80vTfB+r7zTiuoLgf3iiiiiiqiiiiiIoq17lYKKVZeIivYrbMAbXve16W2tjcPBJKpwkTLFGkrNdVJViVsqlbFrg6XF9Na8yp2lhruoNYXERqBnG8fmC9Sj2WalIVcYAM6TkT9lTqKvUEuFbE+j+jKLoSjlVAd1ymRALXuodbn9YdKjItsYfIHOCjGdMQ6hSrH+z5s+cZBlU5SA2vMXteqN7Uc4SKTsgc25EOO+zXTtBm9loeyI/1B8j61VVKjwFGUeA+FW38J4bgNMMNhnCiIlY5EZl4rBQsgyd0i/nyPhUnsgYeaSWP0aIGIoC6ZZI2LAmyvlHeHUW0uPGof2tgaXupGASD7zbEYQddMQ+ewJFh2O6Y5g+R9aFc/wAo8B8KMo8B8K6FsaPD4gSn0aJeHNJFyVrmM2LeqLA+FM9l43Cyyuno0SKpkXMSujo+TI4KgKzasoBNwDyqv8Y738p3u53FpyU/wd1v5gv0KpOQeA+FGUeA+FdDx0UEc2Hh9GibjmQA2Ay5EL6jKb3ANZ2BHh8VAk3oyJmzd2ytbKxXnYeFQ7toCmKhpnDvI1xDLP8AA7TS+YQdjPJw8wT4H79VzvKPAfCjKPAfCnW0lAlkAFgJGAA6AEgAUhXstdiaDuvGcC1xbOS0yjwHwoyjwHwreipVZK0yjwHwoyjwHwreipSStMo8B8KzW1FQklP8ZikVODBcRk5pGOjTPzu3gg+avTmdTohs/HNCxIAZWGV0bVJEPNXH8+YrbZuDMpZQruwVmVI7ZnYFRYCxvYFmIAuQhA8a2xuz3ijiaRHRnMndcFTlTJlcKQCAcxGv0ZPWwxbw9MU+XEg5zr1PX5RaIAEbuNQnmehePrlreZum+KjiVvkc2Q6hX5oTzQn51ujdRbrek6KK1a3C0NkmN81i44jKKKKKlQiiiiiK07l4+KJZRJIqXK2zG17A3qRD4T0o4pp4mYoqBWAOXKSQynmDqfqqi0V5VfsplWq+pjcMQgxGVrZToF6dDtR9Km2mGgxvO5O/VXD0XCBoZBiIxLHK0hkAGaQtmzq2vI5j8BW+ChwceGkw4xEd5BIGksoa0ma9/G2Y2v4CqZRUO7KxDC6q6Jn8OhJGm7jbK60Ha7xkxvn4b7K34mGCTDjDNjk4YWNRZFB+TZGUsb6nuW6DvHTlZ7s6fCwyzSLiUyzFWMYsFVwoUsv61hf2CqDW2U+BqHdjhzSw1HQZtDRmQSe7mcIv9CZDtl4M4G/N33V72ZJhoVmX0hW4ssspPqlTLqQPZ0NReztm4WFkZMWncCC2UZXCAhGkUNYyAHRxbpoarGU+FGU+FWb2VhxRUd72dm+G3rxuh7XeYlgt4/dX7HYrDSTQTekoDAXIHMMXQob+wE0bBxOFwsCQjEq4XNZjYE5mLdPbVBynwoynwrM9isNPlcx2G1vd0xHafxu+fRWHbNQGcDZ+P36JfaTgyyEG4LsQfEFiQaQosfCjKfCvYa3C0DZeQ92Jxcdf8oooynwrFj4GpVVmiiiiIooooiebJjVns0ixEjuSOzIqPmXvFl5ELnI6XCg6U+3sxEUkmeI370igmR5GaNMqxO5diQWPFI5XGU21uWGy8RGjnihzGylX4ZUPlJUnLm01C5SOodqdbxbaOKfOc188pAa1kRigjjTX1QqX6ayNp1M6LoDm8kjWfqoqiiioXOiiiiiIooooiKKKKIiiiihmLKWxInL19Ethmmf8iCq+IsP3m5/1yrGLbEx+vJIPPPf7DTjBSTRi0QDr4WufeAbj7KZ4rCzyMXaKS58FP1V8+6OYceH4974yvuGAcocrF8O7HSEl+EZfpZP3j99H4Rl+lk/eP31Yo9qyA3OBJ1ueYzG8GpGWxb5E+R4huCLhmGGzLC0JwspDNcMGIdRZARfJYghTe4+d5a6Rw+7fJU/qNneaZ4LHMzgSTui63a5NrC/L6veKdK1wf7aQRawLHW4B073n16+HOlsJiJUCj0VyFjZCBcKxJf5S2W+bv+OuUeVl8RtKVmJGEYA9Nbq2dmDKcosbMy21BFtNBYPZ4vh8k/qZ/F5pgXbvWxZJW/ItYqFVtNedyw9w5Xph+EZfpZP3jUniHdw18GQzNG11BGVk0OUW0U3k7vIFlt6oFL4nFPJ62COolDWBFzKBmde73WDjMDqBci1qH2f+3yT+o2d5qF/CMv0sn7x++to8dISAZJCDYEFjyqZmxsxJIwrC7xvYglbxiTQraxBZlYqLD5MCwHJtii7BVGHZERrqdSVTvHIzWGYDNcE6i7dDYS0UJF2+SrU9owmQ7I77JjRRRXuL4oZIoooqFK1rata2opKKKKKKEUUUURFFFFERRRRREUUUURa1m1ZoqZUQFi1FqzRRMI2WLUWrNFLphCxai1ZopdMIWLVm1FFJSAiiiioUoooooixWaxRQKyyBRaiiiIotRRRAi1FqKKIi1FqKKIii1FFECLUWoooo0RaiiiiFFqKKKKSi1FqKKIi1FqKKIi1FqKKIi1FFFEX/2Q==" alt="pic" style={{paddingTop:"4%",
    height:"240px",
    width:"450px",
    paddingLeft:"10%"}}></img></a></center>
        </div>
        <div class="col-12 col-md-6 order-4 order-md-3">
             <h3 style={{textAlign:"center"}}>
              Author:Suresh Naik
             </h3>
             <h3 style={{textAlign:"center"}}>
              Date of Published:16 April 2020 
             </h3>
             <h3 style={{textAlign:"center"}}>
             Book name:SSC Maths Text Book
             </h3>
        </div>
        <div class="col-12 col-md-6 order-5 order-md-6">
             <center><a href="https://www.apteacher.net/10thclass-textbooks/10thclass-textbooks-2022-ap-scert-download-pdf"><img src="https://nestambuy.com/wp-content/uploads/2022/01/VGS-10th-All-In-One-EM-2023-2-1.jpeg" alt="pic" style={{paddingTop:"4%",
    height:"240px",
    width:"450px",
    paddingLeft:"10%"}}></img></a></center>
        </div>
        <div class="col-12 col-md-6 order-6 order-md-5">
             <h3 style={{textAlign:"center"}}>
              Author:Sushma 
             </h3>
             <h3 style={{textAlign:"center"}}>
              Date of Published:20 May 2022
             </h3>
             <h3 style={{textAlign:"center"}}>
             Book name:All in One Question bank
             </h3>
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