import Home from "../components/Home";
import About from "../components/About";
import Best from "../components/Best";
import Footer from "../components/Footer";

function HomePage({arr}) {
   return (
      <>
      <Home />
      <About />
      <Best arr={arr}/>
      <Footer />
      </>
   );
}

export default HomePage;