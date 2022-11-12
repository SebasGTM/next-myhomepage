import Head from 'next/head';
import Image from "next/image";
import frontPic from "../content/images/profilepic.jpg"


export default function HomePage() {
  return (
    <>
      <Head>
        <title>Sebastian H | Start</title>
      </Head>
      <main>
        <h2>
        <Image src={frontPic} class="profilepic" alt="Picture of the author" width={240} placeholder="empty" />
        Welcome to my Corner of the www. I'm Sebastian Heckmann and here I write about everything I like, but mainly Japan and Tech
        </h2>
        <p class="large">
        Als Spezialist für Frontend-Technologie kämpfe ich mich durch technische Spezifikationen, verbuggte Browser und technische Schuldenberge. Was ich herausfinde vermittle ich in 
        Schulungen, Workshops und Vorträgen weiter.
        </p>
      </main>
    </>
  );
}

