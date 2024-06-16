export const Image = ({ src = "", alt = "", className = "" }) => {
  const srcBase = src.split(".")[0];
  return (
    <picture>
      <source srcSet={`${srcBase}.avif`} type="image/avif" />
      <source srcSet={`${srcBase}.webp`} type="image/webp" />
      <img className={className} src={src} alt={alt} loading="lazy" />
    </picture>
  );
};
