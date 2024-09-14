import "./App.css";
import Layout from "../layout/Layout";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import OverviewSection from "../components/OverviewSection";
import FeaturesSection from "../components/FeaturesSection";
import FAQSection from "../components/FAQSection";

const HomeStyles = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
function App() {
  return (
    <HomeStyles>
      <Layout>
        <HeroSection></HeroSection>
        <OverviewSection></OverviewSection>
        <FeaturesSection></FeaturesSection>
        <FAQSection></FAQSection>
      </Layout>
    </HomeStyles>
  );
}

export default App;
