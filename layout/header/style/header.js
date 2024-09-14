import styled from "styled-components";

export const HeaderStyles = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 70px;
  .header-main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .logo {
    display: flex;
    align-items: center;
    max-width: 150px;
    text-decoration: none;
    color: black;
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 40px;
    font-size: 16px;
    color: black;
  }

  .menu-link {
    text-decoration: none;
    color: #0f4c81;
    transition: color 0.3s;
    font-size: 16px;
    font-weight: 600;
    line-height: 18.02px;

    &:hover {
      color: blue;
    }
  }

  .btn-get-started {
    background-color: #0f4c81;
    color: #42ff8a;
    border: none;
    border-radius: 12px;
    padding: 12px 46px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;

    &:hover {
      background-color: #004080;
    }
  }
`;
