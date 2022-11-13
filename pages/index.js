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
        This Website is just a little project to test out different means of webhosting while also sharing some of thoughts and experiences with family, friends and colleagues.
        A few articles are still in a migration process from a previous webpage and format. Take a look around if you want. More content will soon follow.
        </p>
        <p>
          Bellow are some articles that might be of interest:
        </p>
      </main>
    </>
  );
}

