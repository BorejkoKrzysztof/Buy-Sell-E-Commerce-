import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PromotionBar from './Components/PromotionBar/PromotionBar';

function App() {
  return (
    <>
      <PromotionBar />
      <Navbar />
      <div style={{ minHeight: '100vh', backgroundColor: 'silver' }} />
      <Footer />
    </>
  );
}

export default App;
