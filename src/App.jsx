import "./App.css";
import Layout from "../layout/Layout";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import OverviewSection from "../components/OverviewSection";
import FeaturesSection from "../components/FeaturesSection";

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
        <OverviewSection></OverviewSection>
        <FeaturesSection></FeaturesSection>
      </Layout>
    </HomeStyles>
  );
}

export default App;
