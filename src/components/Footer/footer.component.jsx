import React from "react";
import "./footer.style.scss";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src="" alt="" />
        <h2>Hope</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <h3>Follow Us</h3>

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
      <div>
        <h3>Useful Links</h3>
        <li>&#10148; </li>
        <li>&#10148; </li>
        <li>&#10148; </li>
        <li>&#10148; </li>
        <li>&#10148; </li>
      </div>
      <div>
        <h3>Important Links</h3>
        <li>&#10148; </li>
        <li>&#10148; </li>
        <li>&#10148; </li>
        <li>&#10148; </li>
        <li>&#10148; </li>
      </div>
      <div>
        <h3>Subscribe Now</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          dolorem ea earum
        </p>

        <input type="text" placeholder="Enter your Email" />
        <button>Subscribe Now</button>
      </div>

      <hr />
      <div>
        <p>Copyright &copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
