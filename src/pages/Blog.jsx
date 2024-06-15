import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogEntryCard, Container } from "../components";
import { blogs } from "../data";
import { BlogContent } from "../layouts";

export const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    setBlog(blogs.find((blog) => blog.id === parseInt(id)));
  }, [id]);

  return (
    <Container className="py-20 grid gap-5 md:gap-14 md:grid-cols-[4fr,1fr]">
      {blog ? (
        <BlogContent {...blog} />
      ) : (
        <h1 className="text-4xl font-black md:text-5xl">
          No se encontró el blog...
        </h1>
      )}

      <aside>
        <h3 className="mb-5 text-3xl font-black">Otros Blogs</h3>
        <div className="grid gap-5">
          {blogs
            .filter((entry) => entry.id !== parseInt(id))
            .slice(0, 2)
            .map((entry) => (
              <BlogEntryCard key={entry.id} {...entry} />
            ))}
        </div>
        <Link
          to="/blog"
          className="block mt-5 text-xl text-yellow-600 underline hover:text-yellow-700"
        >
          Ver más...
        </Link>
      </aside>
    </Container>
  );
};
