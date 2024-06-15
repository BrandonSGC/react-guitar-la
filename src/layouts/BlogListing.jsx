import { BlogEntryCard, Container, Heading } from "../components";
import { blogs } from "../data";

export const BlogListing = () => {
  return (
    <section className="py-20">
      <Container>
        <Heading text="Nuestro Blog" />

        {/* List Blogs Entries */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((entry) => (
            <BlogEntryCard key={entry.id} {...entry} />
          ))}
        </div>
      </Container>
    </section>
  );
};
