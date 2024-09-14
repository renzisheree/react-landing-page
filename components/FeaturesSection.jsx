import styled from "styled-components";
import DecorativeLine from "./DecorativeLine";
import FeatureComponent from "./FeatureComponent";

const FeaturesStyle = styled.div`
  width: 100%;
  background-color: #f5f5f5;

  .container {
    display: flex;
    padding: 50px;
    justify-content: flex-start;

    .feature-left {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;

      h1 {
        font-size: 50px;
        font-weight: 700;
        line-height: 68px;

        span {
          display: inline-flex;
          flex-direction: column;
        }
      }

      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        color: #424242;
        max-width: 460px;
      }
    }

    .feature-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 40px;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;

      .feature-left {
        align-items: flex-start;

        h1 {
          font-size: 36px;
          line-height: 48px;
        }

        p {
          font-size: 16px;
        }
      }

      .feature-right {
        align-items: center;
      }
    }
  }

  @media (max-width: 480px) {
    .container {
      .feature-left {
        h1 {
          font-size: 28px;
          line-height: 36px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
`;

const FeaturesSection = () => {
  return (
    <FeaturesStyle id="feature">
      <div className="container">
        <div className="feature-left">
          <h1>
            Features That Made <br /> Us{" "}
            <span>
              Unique
              <DecorativeLine width={241} />
            </span>
          </h1>
          <p>
            All you need to have is Famee.ly | The location-sharing app and a
            smartphone. Check out what you can do with Famee.ly.
          </p>
        </div>
        <div className="feature-right">
          <FeatureComponent
            srcIcon="/image/location.svg"
            title="Location sharing"
            text="Locate & protect your family 24/7 with real-time location and geo-fencing"
          />
          <FeatureComponent
            srcIcon="/image/alert.svg"
            title="Place alerts"
            text="Get notified as loved ones come and go from their most visited places"
            after={true}
          />
          <FeatureComponent
            srcIcon="/image/location-history.svg"
            title="Location history"
            text="See location history of your family's whereabouts easily throughout the day"
            after={true}
          />
        </div>
      </div>
    </FeaturesStyle>
  );
};

export default FeaturesSection;
