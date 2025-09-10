import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Posts from "./components/Posts";
import Link from "next/dist/client/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log("Posts:", posts);

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <Link href="/add-posts">Add Post</Link>
        
        <h1>Feed</h1>

        {posts.map((post) => (
          <Posts key={post.id} {...post} />
        ))}
      </main>
    </div>
  );
}
