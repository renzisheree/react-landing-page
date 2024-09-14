import { HeaderStyles } from "./style/header";

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
        <a href="#hero">
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
