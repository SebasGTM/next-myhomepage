import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import mailIcon from "../content/images/mail.svg"
import linkedIcon from "../content/images/linkedin.svg"
import cvIcon from "../content/images/cv-icon.svg"
import gitIcon from "../content/images/Octicons-mark-github.svg"


export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sebastian H | About</title>
      </Head>
      <main>
        <div class="contact">
          <h3>Contact</h3>        
          <a class="mailto" href="mailto:sebastian.heckmann@outlook.com"><Image src={mailIcon} class="mailicon" alt="Picture of the author" width={40} placeholder="empty" />sebastian.heckmann@outlook.com</a>
        </div>
        <div class="links">
          <h3>More</h3>
          <Link href={"https://www.linkedin.com/in/sebastian-heckmann/"}><Image src={linkedIcon} class="linked-icon" alt="LinkedIn" placeholder="empty" /></Link>
          <Link href={"/resume"}><Image src={cvIcon} class="linked-icon" alt="Resume" placeholder="empty" /></Link>
          <Link href={""}><Image src={gitIcon} class="linked-icon" alt="Github" placeholder="empty" /></Link>
        </div>
      </main>
    </>
  );
}

// <Link href={"/resume"}><Image src={cvIcon} class="linked-icon" alt="Resume" placeholder="empty" /></Link>