import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '../lib/posts';


export async function getStaticProps() {
    const posts = await getPosts();
    return {
      props: { posts },
    };
}


export default function BlogPage({ posts }) {
    console.log(posts);
  return (
    <>
      <Head>
        <title>Sebastian H | Blog</title>
      </Head>
      <main>
        {posts.map((post) => (
            <article key={post.slug}>

                <Link href={`/posts/${post.slug}`}>
                    <div class="art-head"><h2>{post.date} — {post.title}</h2></div>
                    <div><img src={post.previmg} class="postimg" width="auto" height="400px" placeholder="empty" objectFit='contain' /></div>
                    <div>{post.prevtext}</div>
                </Link>
            </article>
          ))}
      </main>
    </>
  );
}

/*



*/