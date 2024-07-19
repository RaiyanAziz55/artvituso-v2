// src/pages/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import omarPacha from '../assets/images/omar_pacha_2005.115.2.jpg';
import portraitOfAMan from '../assets/images/portrait_of_a_man_2006.170.19.jpg';
import portraitOfATelegrapherBoy from '../assets/images/portrait_of_a_telegrapher_boy_2023.146.83.jpg';
import theBeanSorters from '../assets/images/the_bean_sorters_2005.57.2.jpg';

const Home = () => {
  return (
    <div>
      <section className='relative w-screen h-screen bg-home-1 bg-cover bg-center flex justify-start items-center'>
        <div className="h-auto w-96 bg-white p-8 ml-32 border-gray-900 border-2">
        <h1 className="relative text-3xl font-bold mb-4">WELCOME TO ARTVIRTUOSO</h1>
          <p className="relative text-lg mb-4">
            Discover a world of art at your fingertips. ArtVirtuoso is an online gallery where you can buy and sell artwork, attend events, and explore a wide range of art pieces from talented artists around the world.
          </p>
          <Link to="/artvituso/explore" className="text-lg font-serif underline">Explore</Link>
        </div>
      </section>
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">The Spotlight</h2>
        <div className="grid grid-cols-4 gap-4 px-12">
          <div>
            <img src={omarPacha} alt="Omar Pacha" className="w-full h-auto"/>
            <p className="mt-2">Omar Pacha<br/>by Person 1</p>
          </div>
          <div>
            <img src={portraitOfATelegrapherBoy} alt="Portrait of a Telegrapher Boy" className="w-full h-auto"/>
            <p className="mt-2">Portrait of a Telegrapher Boy<br/>by Person 1</p>
          </div>
          <div>
            <img src={theBeanSorters} alt="The Bean Sorters" className="w-full h-auto"/>
            <p className="mt-2">The Bean Sorters<br/>by Person 1</p>
          </div>
          <div>
            <img src={portraitOfAMan} alt="Portrait of a Man" className="w-full h-auto"/>
            <p className="mt-2">Portrait of a Man<br/>by Person 1</p>
          </div>
        </div>
      </section>
      <section className='relative w-screen h-screen bg-home-2 bg-cover bg-center flex justify-end items-center'>
      <div className="h-auto w-96 bg-white p-8 mr-32 border-gray-900 border-2">
          <h1 className="relative text-3xl font-bold mb-4">JOIN OUR ART EVENTS</h1>
          <p className="relative text-lg mb-4">
            Dive into the world of art with our exclusive events. From gallery openings to artist talks, workshops, and virtual tours, ArtVirtuoso offers a variety of events for art lovers and creators alike. Connect with fellow art enthusiasts and gain insights from industry professionals.
          </p>
          <Link to="/artvituso/events" className="text-lg font-serif underline">Explore Events</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
