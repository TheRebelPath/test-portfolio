import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  MatrixBackground,
  Footer
} from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative">
          <Navbar />
          <MatrixBackground/>
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
