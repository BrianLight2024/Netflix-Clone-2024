import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="footer_icons">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Term of Uses</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <div className="service_code">
            <p>Service Code</p>
          </div>
          <div className="copy-right">&copy; 1997-2024 Netflix,inc</div>
        </div>
      </div>
    </>
  );
}

export default Footer;

// const Footer = () => {
//   return (
//     <div>
// <div className='footer_outer_container'>
// <div className='footer_inner_container'>
//   <div className='footer_icons'>
// <FacebookOutlinedIcon/>
// <InstagramIcon/>
// <YouTubeIcon/>
//   </div>
//   <div className='footer_data'>
// <div>
//   <ul>
//     <li>Audio Description</li>
//     <li>Investor Relations</li>
//     <li>Legal Notice</li>
//   </ul>
// </div>
// <div>
//   <ul>
//     <li>Help Center</li>
//     <li>Jobs</li>
//     <li>Cookie Preferences</li>
//   </ul>
// </div>
// <div>
//   <ul>
//   <li>Gift Cards</li>
//     <li>Term of Uses</li>
//     <li>Corporate Information</li>
//   </ul>
// </div>
// <div>
//   <ul>
//     <li>Media Center</li>
//     <li>Privacy</li>
//     <li>Contact us</li>
//   </ul>
// </div>
//   </div>
//   <div className='service_code'>
//     <p>Service Code</p>
//   </div>
//   <div className='copy-right'>
//     &copy; 1997-2024 Netflix,inc
//   </div>
// </div>
// </div>

//     </div>
//   )
// }
//  <div>
// <div className='footer_outer_container'>
// <div className='footer_inner_container'>
//   <div className='footer_icons'>
// <FacebookOutlinedIcon/>
// <InstagramIcon/>
// <YouTubeIcon/>
//   </div>
//   <div className='footer_data'>
// <div>
//   <ul>
//     <li>Audio Description</li>
//     <li>Investor Relations</li>
//     <li>Legal Notice</li>
//   </ul>
// </div>
// <div>
//   <ul>
//     <li>Help Center</li>
//     <li>Jobs</li>
//     <li>Cookie Preferences</li>
//   </ul>
// </div>
// <div>
//   <ul>
//   <li>Gift Cards</li>
//     <li>Term of Uses</li>
//     <li>Corporate Information</li>
//   </ul>
// </div>
// <div>
//   <ul>
//     <li>Media Center</li>
//     <li>Privacy</li>
//     <li>Contact us</li>
//   </ul>
// </div>
//   </div>
//   <div className='service_code'>
//     <p>Service Code</p>
//   </div>
//   <div className='copy-right'>
//     &copy; 1997-2024 Netflix,inc
//   </div>
// </div>
// </div>


// https://developer.themoviedb.org/reference/trending-movies
// https://developer.themoviedb.org/docs/image-basics


// .banner_button{
//     cursor: pointer;
//     color: #fff;
//     outline: none;
//     border: none;
//     font-size: 1.2rem;
//     font-weight: 700;
//     border-radius: 0.2vw;
//     padding: 1rem 3rem;
//     margin-right: 2rem;
//     background-color: rgba(51, 51, 51, 0.5);
// }
// .play{
//     color: #000;
//     background-color: #fff;
// }
// .banner_button:hover {
//     color: #000;
//     background-color: #c6c6c6;
//     transition: a11 0.2s;
// }
