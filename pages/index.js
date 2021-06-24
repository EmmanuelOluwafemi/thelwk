import 'antd/dist/antd.css';

import Head from 'next/head'
import Footer from '../components/Footer'

// Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import Covid from '../components/home/Covid'
import MusicTrends from '../components/home/MusicTrends'
import HomeNews from '../components/HomeNews'
import NetflixTrend from '../components/NetflixTrend'
import TrendsUpdate from '../components/TrendsUpdate'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeNews />
      <TrendsUpdate />
      <NetflixTrend />
      <MusicTrends />
      <Covid />
      <Footer />
    </>
  )
}
