import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Team:UGM Indonesia - 2023</title>
        <link rel="shortcut icon" href="/assets/logo_short.png" />
      </Head>

      <Navbar />
      <h1 className='text-6xl underline py-[100px]'>Landing Page</h1>
      <Footer />
    </>
  );
}
