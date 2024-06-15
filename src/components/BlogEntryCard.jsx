import { Link } from "react-router-dom";

export const BlogEntryCard = ({ id, image, title, date, description }) => {
  return (
    <div className="space-y-2">
      <img src={image} alt="blog image" />
      <h3 className="text-2xl">{title}</h3>
      <span className="block text-yellow-600">{date}</span>
      <p className="line-clamp-3">{description}</p>
      <Link
        to={`/blog/${id}`}
        className="block px-4 py-2 text-sm font-bold text-center uppercase border-2 border-yellow-600 md:inline-block hover:bg-yellow-600 hover:text-white"
      >
        Más Información
      </Link>
    </div>
  );
};
