import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Search from './components/Search';
import Selects from './components/Selects';
import SelectsCard from './components/SelectsCard';
import Caroussel from './components/Caroussel';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <SelectsCard />
      <Caroussel />
      <Footer />
    </div>
  );
}

export default App;
