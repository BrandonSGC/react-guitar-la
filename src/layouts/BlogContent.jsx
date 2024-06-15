import { Tag } from "../components";

export const BlogContent = ({
  title,
  image,
  description,
  sections,
  date,
  author,
  tags,
}) => {
  return (
    <section>
      {/* BLOG HEADER */}
      <header>
        <h1 className="text-4xl font-black md:text-5xl">{title}</h1>
        <img className="my-5 w-80" src={image} alt={title} loading="lazy" />
        <p className="text-lg">{description}</p>
      </header>

      {/* SECTIONS */}
      {sections.map((section, id) => (
        <div key={id} className="mt-5">
          <h3 className="text-3xl font-bold">{section.heading}</h3>
          <p className="mt-3 text-lg">{section.content}</p>
        </div>
      ))}

      {/* BLOG INFO */}
      <div className="mt-5 space-y-1">
        <p className="text-yellow-600">{date}</p>
        <p className="text-gray-500 ">Autor: {author}</p>

        <div>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </section>
  );
};
