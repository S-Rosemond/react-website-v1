import React, { Fragment } from 'react';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';
import HeroSection from './../../components/banner/HeroSection';

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Cards />
      <Footer />
    </Fragment>
  );
};

export default Home;
