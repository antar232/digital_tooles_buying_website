import { useState, Suspense } from 'react'
import './App.css'
import CTASection from './Component/CTASection/CTASection'
import Footer from './Component/Footer/Footer'
import HeroSection from './Component/HeroSection/HeroSection'
import Navbar from './Component/Navbar/Navbar'
import PremiumTools from './Component/PremiumTools/PremiumTools'
import Cart from './Component/PremiumTools/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import GetStartedPage from './Component/GetStartedPage/GetStartedPage'
import PricingPage from './Component/PricingPage/PricingPage'

const getPremiumTools = async () => {
  const res = await fetch("./data.json");
  return res.json();
}
const dataPromise = getPremiumTools();

function App() {
  const [activeTab, setActiveTab] = useState('premium'); 
  const [carts, setCarts] = useState([]);
  return (
    <>
      <Navbar cartsCount={carts.length} />
      <HeroSection />

      <main className="min-h-[400px]">
        {activeTab === 'premium' ? (
          <Suspense fallback={<div className="text-center p-20 text-2xl font-bold">Loading Tools...</div>}>
            <PremiumTools 
              dataPromise={dataPromise} 
              carts={carts} 
              setCarts={setCarts} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
            />
          </Suspense>
        ) : (
          <Cart carts={carts} setCarts={setCarts} setActiveTab={setActiveTab} />
        )}
      </main>
      
      <GetStartedPage></GetStartedPage>
      <PricingPage></PricingPage>
      <CTASection />
      <ToastContainer position="top-center" autoClose={2000} />
      <Footer />
    </>
  )
}

export default App;