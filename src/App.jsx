
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

export default function App() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)',
        }}
      />
      {/* Content */}
      <Navbar/>
      <div className="min-h-[calc(100vh-153px)] z-10 relative">
        <Home />
      </div>
      <Footer />
    </div>
  );
}