import styled from "styled-components";
import DecorativeLine from "./DecorativeLine";
import FeatureComponent from "./FeatureComponent";

const FeaturesStyle = styled.div`
  max-height: 804px;
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
      }

      h1 span {
        display: inline-flex;
        flex-direction: column;
      }
      p {
        font-size: 18px;
        font-weight: 40;
        line-height: 30px;
        color: #424242;
        max-width: 500px;
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
  .after {
    opacity: 0.4;
  }
`;
const FeaturesSection = () => {
  return (
    <FeaturesStyle>
      <div className="container">
        <div className="feature-left">
          <h1>
            Features That Made <br /> Us{" "}
            <span>
              Unique
              <DecorativeLine width={241}></DecorativeLine>
            </span>
          </h1>
          <p>
            All you need to have is Famee.ly | The location -sharing app and a
            smartphone. Check out what you can do with Famee.ly
          </p>
        </div>
        <div className="feature-right">
          <FeatureComponent
            srcIcon="location.svg"
            title="Location sharing"
            text=" Locate & protect your family 24/7 with real-time location and
                geo-fencing"
          ></FeatureComponent>{" "}
          <FeatureComponent
            srcIcon="alert.svg"
            title="Place alerts"
            text="Get notified as loved ones come and go from their most visit
                places"
            after={true}
          ></FeatureComponent>{" "}
          <FeatureComponent
            srcIcon="location-history.svg"
            title="Location history"
            text="See location history of your family's whereabouts easily
                throughout the day"
            after={true}
          ></FeatureComponent>{" "}
        </div>
      </div>
    </FeaturesStyle>
  );
};

export default FeaturesSection;
