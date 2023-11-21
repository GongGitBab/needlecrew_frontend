import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section1 from "../Section/Section1/Section1";
import Section2 from "../Section/Section2/Section2";
import Section3 from "../Section/Section3/Section3";
import Section4 from "../Section/Section4/Section4";
import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
