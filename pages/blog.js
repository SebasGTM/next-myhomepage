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

                    <div class="article-head">
                      <Link class="article-title" href={`/posts/${post.slug}`}>
                            <h2 class="article-title">{post.title}</h2>
                      </Link>    
                      <div class="article-meta">{post.date}</div>
                    </div>
                <Link class="nodeco" href={`/posts/${post.slug}`}>
                    <div><img src={post.previmg} class="postimg" width="auto" height="400px" placeholder="empty" objectFit='contain' /></div>
                </Link>
                <div>{post.prevtext}</div> 
                <Link class="article-more" href={`/posts/${post.slug}`}>
                  read more →
                </Link>
            </article>
          ))}
      </main>
    </>
  );
}