// src/pages/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import omarPacha from '../assets/images/omar_pacha_2005.115.2.jpg';
import portraitOfAMan from '../assets/images/portrait_of_a_man_2006.170.19.jpg';
import portraitOfATelegrapherBoy from '../assets/images/portrait_of_a_telegrapher_boy_2023.146.83.jpg';
import theBeanSorters from '../assets/images/the_bean_sorters_2005.57.2.jpg';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className='relative w-screen h-screen bg-home-1 bg-cover bg-center flex justify-start items-center'>
        <div className="h-auto w-96 bg-white p-8 ml-32 border-gray-900 border-2">
          <h1 className="relative text-3xl font-bold mb-4">{t('welcome_to_artvirtuoso')}</h1>
          <p className="relative text-lg mb-4">
            {t('welcome_message')}
          </p>
          <Link to="/artvituso/explore" className="text-xl font-serif underline">{t('explore')}</Link>
        </div>
      </section>
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">{t('the_spotlight')}</h2>
        <div className="grid grid-cols-4 gap-4 px-12">
          <div>
            <img src={omarPacha} alt={t('omar_pacha')} className="w-full h-auto"/>
            <p className="mt-2">{t('omar_pacha')}<br/>{t('by_person_1')}</p>
          </div>
          <div>
            <img src={portraitOfATelegrapherBoy} alt={t('portrait_of_a_telegrapher_boy')} className="w-full h-auto"/>
            <p className="mt-2">{t('portrait_of_a_telegrapher_boy')}<br/>{t('by_person_1')}</p>
          </div>
          <div>
            <img src={theBeanSorters} alt={t('the_bean_sorters')} className="w-full h-auto"/>
            <p className="mt-2">{t('the_bean_sorters')}<br/>{t('by_person_1')}</p>
          </div>
          <div>
            <img src={portraitOfAMan} alt={t('portrait_of_a_man')} className="w-full h-auto"/>
            <p className="mt-2">{t('portrait_of_a_man')}<br/>{t('by_person_1')}</p>
          </div>
        </div>
      </section>
      <section className='relative w-screen h-screen bg-home-2 bg-cover bg-center flex justify-end items-center'>
        <div className="h-auto w-96 bg-white p-8 mr-32 border-gray-900 border-2">
          <h1 className="relative text-3xl font-bold mb-4">{t('join_our_art_events')}</h1>
          <p className="relative text-lg mb-4">
            {t('events_message')}
          </p>
          <Link to="/artvituso/events" className="text-xl font-serif underline">{t('explore_events')}</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
