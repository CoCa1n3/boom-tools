import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import About1 from '../components/About1/About1';
import Kompan from '../components/Kompan/Kompan';
import Youtube from '../components/Youtube/Youtube';
import Pochemy from '../components/Pochemu/Pochemy';
import Karta from '../components/Karta/Karta';
import Service from '../components/Service1/Service';

const About = () => {
  return (
    <>
      <Header />
      <About1 />
      <Kompan />
      <Youtube />
      <Pochemy />
      <Karta />
      <Service />
      <Footer />
    </>
  );
};

export default About;
