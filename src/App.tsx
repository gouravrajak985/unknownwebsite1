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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
      <Header />
      <div className="bg-transparent relative z-10">
        <Hero />
        <LeadForm />
      </div>
      <div className="relative z-20 bg-transparent">
        <Clients />
      </div>
      <div className="relative z-30 bg-transparent">
        <Services />
      </div>
      <div className="relative z-40 bg-transparent">
        <Features />
      </div>
      <div className="relative z-50 bg-transparent">
        <AddOns />
      </div>
      <div className="relative z-[60] bg-transparent">
        <S4Hana />
      </div>
      <div className="relative z-[70] bg-transparent">
        <Highlights />
      </div>
      <div className="relative z-[80] bg-transparent">
        <Testimonials />
      </div>
      <div className="relative z-[90] bg-transparent">
        <Team />
      </div>
      <div className="relative z-[100] bg-transparent">
        <VideoSection />
      </div>
      <div className="relative z-[110] bg-transparent">
        <Footer />
      </div>
    </div>
  );
}

export default App;
