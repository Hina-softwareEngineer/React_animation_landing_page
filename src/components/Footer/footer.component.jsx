import React from "react";
import "./footer.style.scss";

import MainImg from "../../image/logo.png";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="logos">
          <div className="brand">
            <img src={MainImg} alt="" />
            <h2>Hope</h2>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <h3>Follow Us</h3>

          <div className="social-icons">
            <span>
              <TwitterIcon />
            </span>
            <span>
              <FacebookIcon />
            </span>
            <span>
              <PinterestIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
          </div>
        </div>
        <div className="useful">
          <h3>Useful Links</h3>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Blog</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Community</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; MarketPlace</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Career</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; About Us</li>
        </div>
        <div className="imp">
          <h3>Important Links</h3>
          <li>&#10148;&nbsp;&nbsp;&nbsp; About Us</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Our Company</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Portfolio</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Privacy Policy</li>
          <li>&#10148;&nbsp;&nbsp;&nbsp; Contact Us</li>
        </div>
        <div className="subscribe">
          <h3>Subscribe Now</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dolorem ea earum
          </p>

          <input type="text" placeholder="Enter your Email" />
          <button>Subscribe Now</button>
        </div>
      </div>

      <hr />
      <div className="copyright">
        <p>Copyright &copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
