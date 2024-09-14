/* eslint-disable react/prop-types */
import styled from "styled-components";

const FeatureComponentStyle = styled.div`
  background-color: white;
  border-radius: 20px;
  display: flex;
  padding: 40px 12px;
  gap: 10px;
  transition: opacity 0.3s;

  img {
    width: 80px;
    height: 80px;
  }

  .feature-content {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: flex-start;

    h3 {
      font-size: 24px;
      font-weight: 600;
      line-height: 28px;
    }

    p {
      max-width: 478px;
      font-size: 18px;
      line-height: 30px;
      font-weight: 400;
      color: #424242;
    }
  }

  &.after {
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    padding: 30px 10px;

    img {
      width: 60px;
      height: 60px;
    }

    .feature-content {
      h3 {
        font-size: 20px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 20px 8px;

    img {
      width: 50px;
      height: 50px;
    }

    .feature-content {
      h3 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }
    }
  }
`;

const FeatureComponent = ({ srcIcon, title, text, after = false }) => {
  return (
    <FeatureComponentStyle className={after ? "after" : ""}>
      <img src={srcIcon} alt="" />
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </FeatureComponentStyle>
  );
};

export default FeatureComponent;
