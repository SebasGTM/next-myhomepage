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

export async function getPosts(page) {
  const show_per_page = 3;
  const slugs = await getSlugs();
  const posts = [];
  for (const slug of slugs) {
    const post = await getPost(slug);
    posts.push({ slug, ...post });
  }

  let start = show_per_page * (page -1);
  const postPart = posts.splice(start, start + show_per_page);
  let isLast = posts.length <= start + show_per_page;
  
  let prev = null;
  if (page == 2)
    prev = "../blog";
  else
    prev = "/blog/" + (page-1);

  let next = "/blog/" + (page+1);
  const pagnation = { page, prev, next, isLast }
  const postData = { posts:postPart, pagnation }

  return postData;
}

export async function getSlugs() {
  const suffix = '.md';
  const files = await readdir(`content/posts`);
  return files.filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}

export async function getPages() {
  const show_per_page = 3;

  let noPages = Math.ceil((await getSlugs()).length / show_per_page);
  noPages++;
  let pagesArr = Array.from(Array(noPages).keys());
  pagesArr.shift();
  
  return ["1", "2", "3"];
}
