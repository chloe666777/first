export default function PageHero({ image, title }) {
  return (
    <div className="page-hero" aria-label={title}>
      <img src={image} alt="" aria-hidden="true" />
    </div>
  );
}
