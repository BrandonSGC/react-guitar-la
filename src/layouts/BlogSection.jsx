import { BlogEntryCard, Container, Heading } from "../components";
import { blogEntries } from "../data";

export const BlogSection = () => {
  return (
    <section className="py-20">
      <Container>
        <Heading text="Nuestro Blog" />

        {/* List Blogs Entries */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {blogEntries.map((entry) => (
            <BlogEntryCard key={entry.id} {...entry} />
          ))}
        </div>
      </Container>
    </section>
  );
};
