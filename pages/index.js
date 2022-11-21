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
        <Image src={frontPic} class="profilepic" alt="Profile pic" width={240} placeholder="empty" />
        Hello, I'm Sebastian Heckmann and welcome to my Corner of the web.<br />
        </h2>
        <p class="large">
        This Website is just a little project to test out different webtechnologies and hosting services while also sharing some of thoughts and experiences with family, friends and colleagues.
        The website is still in the construction phase and a lot of articles are in a migration process. Take a look around if you want. More content will follow soon.
        </p>
        <br />
      </main>
    </>
  );
}

