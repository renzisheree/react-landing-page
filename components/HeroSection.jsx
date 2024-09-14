import styled from "styled-components";
import CustomAvatar from "./CustomAvatar";
import DecorativeLine from "./DecorativeLine";

const HeroStyles = styled.div`
  min-height: 750px;
  width: 100%;
  display: flex;

  .container {
    margin-top: 189px;
    width: 100%;
    height: 435px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 80px;

    @media (max-width: 768px) {
      margin-left: 0; /* Adjust margin for smaller screens */
      flex-direction: column; /* Stack elements */
    }
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-items: center;
    gap: 20px;
    justify-content: space-around;
    align-items: flex-start;
    width: 537px;

    @media (max-width: 768px) {
      width: 100%; /* Full width on smaller screens */
      align-items: center; /* Center align items */
    }
  }

  h1 {
    font-size: 72px;
    font-weight: bold;
    line-height: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
      font-size: 48px; /* Adjust font size */
      line-height: 60px;
      text-align: center; /* Center align text */
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #424242;

    @media (max-width: 768px) {
      font-size: 16px; /* Adjust font size */
      line-height: 24px;
      text-align: center; /* Center align text */
    }
  }

  .btn-start-for-free {
    background-color: #0f4c81;
    color: #42ff8a;
    border: none;
    border-radius: 12px;
    padding: 17px 60px;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #004080;
    }

    @media (max-width: 768px) {
      padding: 12px 30px; /* Adjust padding */
      font-size: 18px; /* Adjust font size */
    }
  }

  .hero-right {
    position: relative;
    width: 50%;
    height: 100%;

    @media (max-width: 768px) {
      display: none; /* Hide on smaller screens */
    }
  }

  .world-map {
    width: 100%;
    height: 100%;
    background-image: url("/image/map.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .avatar {
    position: absolute;
    width: 60px;
    height: 60px;
  }

  .avatar-1 {
    top: 15%;
    left: 25%;
  }
  .avatar-2 {
    top: 20%;
    right: 30%;
  }
  .avatar-3 {
    bottom: 30%;
    left: 35%;
  }
  .avatar-4 {
    bottom: 25%;
    right: 35%;
  }
  .avatar-5 {
    top: 20%;
    left: 40%;
    width: 117px;
    height: 135px;
  }

  /* Location Dot Styles */
  .location-dot-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .outer-circle {
    width: 67px;
    height: 67px;
    border-radius: 50%;
    background-color: rgba(66, 255, 138, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .middle-circle {
    width: 21.88px;
    height: 21.88px;
    border: 2px solid white;
    border-radius: 50%;
    background-color: #1e3a8a;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner-dot {
    width: 8.2px;
    height: 8.2px;
    border-radius: 50%;
    background-color: #42ff8a;
  }
`;

const HeroSection = () => {
  return (
    <HeroStyles>
      <div className="container">
        <div className="hero-left">
          <h1>
            Always By
            <DecorativeLine width={241} />
            Your Side
          </h1>
          <p>
            The location-sharing app is designed for family & friends safety, is
            the best way to protect your loved ones and keep them safe.
          </p>
          <button className="btn-start-for-free">Start For Free</button>
        </div>
        <div className="hero-right">
          <div className="world-map">
            <CustomAvatar
              src="/image/avatar1.png"
              alt="Avatar 1"
              className="avatar avatar-1"
            />
            <CustomAvatar
              src="/image/avatar-cat.png"
              alt="Avatar 2"
              className="avatar avatar-2"
            />
            <CustomAvatar
              src="/image/avatar-shower.png"
              alt="Avatar 3"
              className="avatar avatar-3"
            />
            <CustomAvatar
              src="/image/avatar-hoodie.png"
              alt="Avatar 4"
              className="avatar avatar-4"
            />
            <CustomAvatar
              src="/image/image-center.png"
              alt="Avatar 5"
              className="avatar avatar-5"
            />
            <div
              className="location-dot-container"
              style={{ top: "30%", left: "10%" }}
            >
              <div className="outer-circle">
                <div className="middle-circle">
                  <div className="inner-dot"></div>
                </div>
              </div>
            </div>
            <div
              className="location-dot-container"
              style={{ bottom: "40%", right: "20%" }}
            >
              <div className="outer-circle">
                <div className="middle-circle">
                  <div className="inner-dot"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};

export default HeroSection;
