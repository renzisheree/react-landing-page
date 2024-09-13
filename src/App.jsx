import "./App.css";
import Layout from "../layout/Layout";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";

const HomeStyles = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
`;
function App() {
  return (
    <HomeStyles>
      <Layout>
        <HeroSection></HeroSection>
      </Layout>
    </HomeStyles>
  );
}

export default App;
