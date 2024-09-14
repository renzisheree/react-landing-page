/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
const OverviewStyles = styled.div`
  height: 789px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .overview-left {
    flex: 1;
    background-image: url("image/map-layout.png");
    width: 100%;
    height: 100%;
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .overview-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 40px;
    max-width: 100%;
    gap: 1rem;
  }

  h1 {
    font-size: 50px;
    line-height: 62px;
    font-weight: 700;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    color: #424242;
    margin-bottom: 2rem;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat-item {
    text-align: center;

    h2 {
      font-size: 42px;
      color: #0f4c81;
      font-weight: 700;
      line-height: 62px;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    h3 {
      font-size: 24px;
      font-weight: 600;
      line-height: 28px;
    }
  }

  .map {
    position: absolute;
    height: 567px;
    width: 392px;
  }

  .notify-img {
    position: absolute;
    top: 10px;
    left: 10px;
    width: calc(100% - 20px);
    z-index: 2;
  }

  .map-img {
    padding: 5px;
    background-color: white;
    border-radius: 30px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
  }

  .bob-location-img {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: calc(100% - 20px);
    z-index: 2;
  }
`;

const StatsData = [
  { value: 2556, title: "App downloads" },
  { value: 1998, title: "Daily active users" },
  { value: 980, title: "Good reviews" },
];

const OverviewSection = () => {
  return (
    <OverviewStyles>
      <div className="container">
        <div className="overview-left">
          <div className="map">
            <img
              src="/image/map-img.png"
              alt=""
              className="
              map-img"
            />
            <img src="image/famely-notify.png" alt="" className="notify-img" />
            <img
              src="image/bob-location.png"
              alt=""
              className="bob-location-img"
            />
          </div>
        </div>
        <div className="overview-right">
          <h1>The Location-Sharing App</h1>
          <p>
            Famee.ly aims to help parents and caregivers protect their loved
            ones with easy tracking and alerting messages. Simply install the
            Famee.ly on your loved ones's phone. Once registered, each member
            appears on the private map so you'll always know where your family
            members and friends are.
          </p>
          <div className="stats">
            {StatsData.map((data) => (
              <div key={data.title} className="stat-item">
                <h2>{data.value}</h2>
                <h3>{data.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </OverviewStyles>
  );
};

export default OverviewSection;
