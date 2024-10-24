import BrandsMarquee from '../features/Homepage/BrandsMarquee';
import ContactUs from '../features/Homepage/ContactUs';
import Footer from '../features/Homepage/Footer';
import Header from '../features/Homepage/Header';
import Hero from '../features/Homepage/Hero';
import MeetTheTeam from '../features/Homepage/MeetTheTeam';
import OurServices from '../features/Homepage/OurServices';
import VideoQuote from '../features/Homepage/VideoQuote';

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <VideoQuote />
      <BrandsMarquee />
      <OurServices />
      <MeetTheTeam />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Homepage;
