import styled from "styled-components";
import DecorativeLine from "./DecorativeLine";

const FeaturesStyle = styled.div`
  max-height: 804px;

  .container {
    display: flex;
    justify-content: flex-start;
    .feature-left {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 50px;
        font-weight: 700;
        line-height: 68px;
      }
    }
  }
`;
const FeaturesSection = () => {
  return (
    <FeaturesStyle>
      <div className="container">
        <div className="feature-left">
          <h1>
            Features That Made <br /> Us Unique <br />
            <DecorativeLine width={241}></DecorativeLine>
          </h1>
          <p>
            The location-sharing app is designed for family & friends safety, is
            the best way to protect your loved ones and keep them safe.
          </p>
          <button className="btn-start-for-free">Start For Free</button>
        </div>
        <div className="feature-right"></div>
      </div>
    </FeaturesStyle>
  );
};

export default FeaturesSection;
