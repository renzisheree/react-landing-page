/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: #1e3a8a;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-bottom: 100px;

  .footer-left {
    max-width: 350px;
    img {
      width: 126px;
    }
    p {
      margin-top: 10px;
    }
  }

  .footer-center {
    display: flex;
    justify-content: center;
    align-content: center;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      margin-left: auto;
      margin-right: auto;

      a {
        color: white;
        text-decoration: none;
        margin: 0 15px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .footer-right {
    h4 {
      margin-bottom: 15px;
    }

    .subscribe-container {
      position: relative;
      display: flex;

      input {
        padding: 10px;
        border: none;
        border-radius: 12px;
        outline: none;
        width: 250px;
        padding-right: 60px;
        border: px solid white;
      }

      button {
        position: absolute;
        right: 0;
        top: 0;
        padding: 0 20px;
        height: 100%;
        border-radius: 12px;
        border: none;
        border: 1px solid white;
        background-color: #34d399;
        color: white;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #4ade80;
        }
      }
    }
  }

  .social-icons {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;

    img {
      width: 32px;
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;

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
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">FAQs</a>
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
