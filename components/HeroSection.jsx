import styled from "styled-components";

const HeroStyles = styled.div`
  height: 750px;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;

  .container {
    margin-top: 189px;
    width: 1331px;
    height: 435px;
    display: flex;
    align-items: center;
    margin-left: 109px;
    background-color: gray;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-items: center;
    gap: 20px;
    justify-content: space-around;
    align-items: flex-start;
    width: 537px;
  }

  h1 {
    font-size: 72px;
    font-weight: bold;
    line-height: 90px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #424242;
  }

  .btn-start-for-free {
    background-color: #0f4c81;
    color: #42ff8a;
    border: none;
    border-radius: 12px;
    padding: 14px 48px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #004080;
    }
  }
`;

const HeroSection = () => {
  return (
    <HeroStyles>
      <div className="container">
        <div className="hero-left">
          <h1>
            Always By <br /> Your Side
          </h1>
          <p>
            The location-sharing app is designed for family & friends safety, is
            the best way to protect your loved ones and keep them safe.
          </p>
          <button className="btn-start-for-free">Start For Free</button>
        </div>
        <div className="hero-right">right</div>
      </div>
    </HeroStyles>
  );
};

export default HeroSection;
