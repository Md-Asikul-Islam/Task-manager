import React from "react";
import Header from './Header';
import HeroSection from './HeroSection';
import TaskBoard from './TaskBoard';
import Footer from './Footer';

function Home() {
  return (
    <div className="container w-[clamp(8rem,60%,70rem)] mx-auto">
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </div>
  );
}

export default Home;
