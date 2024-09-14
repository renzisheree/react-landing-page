/* eslint-disable react/no-unescaped-entities */

import { FooterStyle } from "./style/footer";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-left">
        <img src="footer-icon.svg" alt="Footer Icon" />
        <p>
          makes it easy to beautify the space you’re in with the help of one of
          our indoor plants that are sure to lift the spirits and purify the
          air.
        </p>
      </div>
      <div className="footer-center">
        <ul className="menu">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <h4>Don't want to miss anything?</h4>
        <div className="subscribe-container">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
        <div className="social-icons">
          <img src="facebook-icon.svg" alt="Facebook" />
          <img src="ins-icon.svg" alt="Instagram" />
          <img src="youtube-icon.svg" alt="YouTube" />
          <img src="x-icon.svg" alt="Twitter" />
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
