import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import { About } from './Components/About';
import { Whypeoplechooseus } from './Components/Whypeoplechooseus';
import { Ourlatestprojects } from './Components/Ourlatestprojects';
import { Services } from './Components/Services';
import { Designers } from './Components/Designers';
import { Testimonial } from './Components/Testimonial';
import { Newsletter } from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <Whypeoplechooseus />
      <Ourlatestprojects />
      <Services />
      <Designers />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;

// https://themewagon.github.io/iStudio/