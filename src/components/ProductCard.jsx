export default function ProductCard({ product, compact = false }) {
  return (
    <article className={`product-card ${product.tone} ${compact ? 'compact' : ''}`}>
      <div className="product-media">
        <img src={product.image} alt={`${product.name} 产品图`} loading="lazy" />
      </div>
      <div className="product-body">
        <div>
          <span className="category">{product.category}</span>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
        </div>
        <dl className="spec-list">
          <div>
            <dt>规格</dt>
            <dd>{product.size}</dd>
          </div>
          <div>
            <dt>材质</dt>
            <dd>{product.material}</dd>
          </div>
          <div>
            <dt>温区</dt>
            <dd>{product.temp}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
