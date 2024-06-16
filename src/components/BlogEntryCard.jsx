import { Link } from "react-router-dom";
import { Image } from "./";

export const BlogEntryCard = ({ id, image, title, date, description }) => {
  return (
    <div className="space-y-2">
      <Image src={image} alt="blog image" />
      <Link
        to={`/blog/${id}`}
        title={`Read more about ${title}`}
        className="text-2xl line-clamp-2 hover:text-yellow-900"
      >
        {title}
      </Link>
      <span className="block text-yellow-600">{date}</span>
      <p className="line-clamp-3">{description}</p>
      <Link
        to={`/blog/${id}`}
        title={`Read more about ${title}`}
        className="block px-4 py-2 text-sm font-bold text-center uppercase border-2 border-yellow-600 md:inline-block hover:bg-yellow-600 hover:text-white"
      >
        Más Información
      </Link>
    </div>
  );
};
