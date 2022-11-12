import Head from 'next/head';
import NavBar from '../components/NavBar';
import '../styles/main.css';

function App({ Component, pageProps }) {
  return (    
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header class='pageHeader'>
        <NavBar />
      </header>
      <div class="wrapper">
        <div id="main">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default App;
