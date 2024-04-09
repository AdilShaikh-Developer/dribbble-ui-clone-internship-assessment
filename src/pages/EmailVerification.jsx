import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import {
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { LuMailCheck } from "react-icons/lu";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

import { Link } from "react-router-dom";

import Logo from "../components/Logo";

const EmailVerification = () => {
  return (
    <div className="email-verification-page">
      <div className="navbar">
        <div>
          <Logo />
          <ul>
            <li>
              <a href="#">Inspiration</a>
            </li>
            <li>
              <a href="#">Find Work</a>
            </li>
            <li>
              <a href="#">Learn Design</a>
            </li>
            <li>
              <a href="#">Go Pro</a>
            </li>
            <li>
              <a href="#">Hire Designers</a>
            </li>
          </ul>
        </div>
        <ul>
          <li className="search-bar">
            <CiSearch /> <input type="text" placeholder="Search" />
          </li>
          <li>
            <PiSuitcaseSimpleLight />
          </li>
          <li>
            <CgProfile />
          </li>
          <li>
            <button className="submit-button">Upload</button>
          </li>
        </ul>
      </div>

      <div className="email-verification-container">
        <h5>Please verify your email...</h5>
        <LuMailCheck />
        <span>
          Please verify your email address. We've sent a confirmation email to
        </span>
        <span className="user-email">account@refero.design</span>
        <span>
          Click the confirmation link in that email to begin using Dribbble.
        </span>
        <span>
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can{" "}
          <Link>resend the confirmation email.</Link>
        </span>
        <span>
          Wrong email adress? <Link>Change it.</Link>
        </span>
      </div>

      <footer>
        <div className="branding-container">
          <Logo />
          <p>
            Dribbble is the world's leading community for creatives to share
            grow, and get hired.
          </p>
          <ul>
            <li>
              <FaDribbble />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaPinterest />
            </li>
          </ul>
        </div>
        <div className="links-containers">
          <ul className="designer-links">
            <h5>For designers</h5>
            <li>
              <a href="#">Go Pro!</a>
            </li>
            <li>
              <a href="#">Explore design work</a>
            </li>
            <li>
              <a href="#">Design blog</a>
            </li>
            <li>
              <a href="#">Overtime podcast</a>
            </li>
            <li>
              <a href="#">Playoffs</a>
            </li>
            <li>
              <a href="#">Weekly Warm-Ups</a>
            </li>
            <li>
              <a href="#">Refer a Friend</a>
            </li>
            <li>
              <a href="#">Code of conduct</a>
            </li>
          </ul>
          <ul className="hire-designers-links">
            <h5>Hire designers</h5>
            <li>
              <a href="#">Post a job opening</a>
            </li>
            <li>
              <a href="#">Post a freelance project</a>
            </li>
            <li>
              <a href="#">Search for designers</a>
            </li>
            <h5>Brands</h5>
            <li>
              <a href="#">Advertise with us</a>
            </li>
          </ul>
          <ul className="company-links">
            <h5>Company</h5>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Media kit</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Cookie policy</a>
            </li>
          </ul>
          <ul className="directories-links">
            <h5>Directories</h5>
            <li>
              <a href="#">Design jobs</a>
            </li>
            <li>
              <a href="#">Designers for hire</a>
            </li>
            <li>
              <a href="#">Freelance designers for hire</a>
            </li>
            <li>
              <a href="#">Tags</a>
            </li>
            <li>
              <a href="#">Places</a>
            </li>
            <h5>Design assests</h5>
            <li>
              <a href="#">Dribbble Marketplace</a>
            </li>
            <li>
              <a href="#">Creative Market</a>
            </li>
            <li>
              <a href="#">Fontspring</a>
            </li>
            <li>
              <a href="#">Font Squirrel</a>
            </li>
          </ul>
          <ul className="design-resources-links">
            <h5>Design Resources</h5>
            <li>
              <a href="#">Freelancing</a>
            </li>
            <li>
              <a href="#">Design Hiring</a>
            </li>
            <li>
              <a href="#">Design Portfolio</a>
            </li>
            <li>
              <a href="#">Design Education</a>
            </li>
            <li>
              <a href="#">Creative Process</a>
            </li>
            <li>
              <a href="#">Design Industry Trends</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default EmailVerification;
