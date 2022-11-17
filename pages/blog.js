import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '../lib/posts';


export async function getStaticProps() {
  let page = 1;
  const postData = await getPosts(page);

  return {
    props: { postData },
  };
}


export default function BlogPage({ postData }) {
    console.log(postData);
  return (
    <>
      <Head>
        <title>Sebastian H | Blog</title>
      </Head>
      <a name="top"></a>
      <main>
        {postData.posts.map((post) => (
            <article key={post.slug}>
                    <div class="article-head">
                      <Link class="article-title" href={`/posts/${post.slug}`}>
                            <h2 class="article-title">{post.title}</h2>
                      </Link>    
                      <div class="article-meta">{post.date}</div>
                    </div>
                <Link class="nodeco" href={`/posts/${post.slug}`}>
                    <img src={post.previmg} class="postimg" width="auto" placeholder="empty" />
                </Link>
                <div>{post.prevtext}</div> 
                <Link class="article-more" href={`/posts/${post.slug}`}>
                  read more →
                </Link>
            </article>
          ))}
          <div class="post-navigation">
            <span class="page-number">Page {postData.pagnation.page}</span>
            {
              postData.pagnation.page > 1 &&
              <a class="newer-posts" href={postData.pagnation.prev}>← newer posts</a>
            }
            <a class="older-posts" href={postData.pagnation.next}>older posts →</a>
          </div>
      </main>
      <div class="blog-footer"><a href="#top">↑ Back to top ↑</a></div>
    </>
  );
}