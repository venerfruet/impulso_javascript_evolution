import React from 'react';
import { Banner } from '../components/Banner';
import ImageBanner from '../images/construcao.png';

const Home = () => {
  return (
    <>
      <Banner src={ImageBanner} alt='em construção' />
    </>
  );
}

export default Home;