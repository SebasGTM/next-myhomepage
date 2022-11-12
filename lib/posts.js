import matter from 'gray-matter';
import { marked } from 'marked';
import { readdir, readFile } from 'fs/promises';
import { existsSync } from 'fs';

export async function getPost(slug) {
  const source = await readFile(`content/posts/${slug}.md`, 'utf8');
  const { data: { date, title, prevtext }, content } = matter(source);

  let prevPath = `/static/post-media/${slug}/preview.jpg`;
  let previmg = existsSync("public" + prevPath) ? prevPath : "";

  const body = marked(content);
  return { date, title, prevtext, body, previmg };
}

export async function getPosts() {
  
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }
  return posts;
}

export async function getSlugs() {
  const suffix = '.md';
  const files = await readdir(`content/posts`);
  return files.filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}
