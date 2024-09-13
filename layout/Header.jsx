import styled from "styled-components";

const HeaderStyles = styled.div`
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

    &:hover {
      color: blue;
    }
  }

  .btn-get-started {
    background-color: #0f4c81; /* Button background color */
    color: #42ff8a; /* Button text color */
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

const menuLink = [
  {
    url: "#feature",
    title: "Features",
  },
  {
    url: "#pricing",
    title: "Pricing",
  },
  {
    url: "#blog",
    title: "Blog",
  },
  {
    url: "#faq",
    title: "FAQs",
  },
];

const Header = () => {
  return (
    <HeaderStyles>
      <div className="header-main">
        <a href="">
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
        </a>
        <ul className="menu">
          {menuLink.map((item) => (
            <li className="menu-item" key={item.title}>
              <a href={item.url} className="menu-link">
                {item.title}
              </a>
            </li>
          ))}
          <button className="btn-get-started">Get Started</button>
        </ul>
      </div>
    </HeaderStyles>
  );
};

export default Header;
