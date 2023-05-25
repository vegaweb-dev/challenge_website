import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
// import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Footer1 from './components/Footer1';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {/* <Testimonial /> */}
      <Footer />
      <Footer1 />
    </div>
  );
}

export default App;
