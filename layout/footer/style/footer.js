import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: #1e3a8a;
  color: white;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
    gap: 40px;
    padding-bottom: 100px;
    input {
      width: 150px;
    }
  }

  .footer-left {
    max-width: 350px;
    img {
      width: 126px;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
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
      @media (max-width: 768px) {
        flex-direction: row;
      }

      a {
        color: white;
        text-decoration: none;
        margin: 0 15px;
        font-size: 16px;
        font-weight: 600;
        line-height: 18px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .footer-right {
    h4 {
      margin-bottom: 15px;
      font-size: 16px;
      font-weight: 600;
      line-height: 18px;
    }

    .subscribe-container {
      position: relative;
      display: flex;

      input {
        padding: 13px 148px 15px 13px;
        border-radius: 12px;
        outline: none;
        width: 250px;
        text-align: left;
        border: 1px solid white;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
        @media (max-width: 768px) {
          width: 150px;
        }
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
