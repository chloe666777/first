export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="card__img">
        <img src={product.image} alt={`${product.name} 产品图`} loading="lazy" />
      </div>
      <div className="card__body">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <dl className="spec-list">
          <div><dt>规格</dt><dd>{product.size}</dd></div>
          <div><dt>材质</dt><dd>{product.material}</dd></div>
          <div><dt>温区</dt><dd>{product.temp}</dd></div>
        </dl>
      </div>
    </article>
  );
}
