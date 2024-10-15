import BrandsMarquee from '../features/Homepage/BrandsMarquee';
import Footer from '../features/Homepage/Footer';
import Header from '../features/Homepage/Header';
import Hero from '../features/Homepage/Hero';
import KeyFeatures from '../features/Homepage/KeyFeatures';
import VideoQuote from '../features/Homepage/VideoQuote';

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <VideoQuote />
      <BrandsMarquee />
      <KeyFeatures />
      <Footer />
    </div>
  );
}

export default Homepage;
