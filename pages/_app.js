import Head from 'next/head';
import NavBar from '../components/NavBar';

import '../styles/main.css';

export default function App({ Component, pageProps }) {
  console.log(Component.name);
  return (    
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      { Component.name != "ResumePage" &&
        <header class='pageHeader'>
          <NavBar />
        </header>
      }
      <div class="wrapper">
        <div id="main">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

