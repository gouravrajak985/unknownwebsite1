import Header from './components/Header';
import Hero from './components/Hero';
import LeadForm from './components/LeadForm';
import Clients from './components/Clients';
import Services from './components/Services';
import Features from './components/Features';
import AddOns from './components/AddOns';
import S4Hana from './components/S4Hana';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LeadForm />
      <Clients />
      <Services />
      <Features />
      <AddOns />
      <S4Hana />
      <Highlights />
      <Testimonials />
      <Team />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
