import React from 'react';
import { Banner } from '../components/Banner';
import ImageBanner from '../images/banner.jpg';

const Home = () => {
  return (
    <Banner src={ImageBanner} alt='modelo com jaqueta' />
  );
}

export default Home;