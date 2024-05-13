import AboutUsSection from "../components/AboutUsSection";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import OurForteSection from "../components/OurForteSection";
import OurPortfolioSection from "../components/OurPortfolioSection";
import StatisticSection from "../components/StatisticSection";
import OurProcess from "../components/OurProcess";
import TopBar from "../components/TopBar";
import Banner from "../components/Banner";
import ScrollTop from "../components/ScrollTop";

function Homepage() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Banner />
      <OurForteSection />
      <OurPortfolioSection />
      <AboutUsSection />
      <StatisticSection />
      <OurProcess />
      <FooterSection />
      <ScrollTop/>
    </div>
  );
}

export default Homepage;
