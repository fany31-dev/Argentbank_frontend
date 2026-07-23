function Features({ image, alt, title, texte }) {
  return (
    <>
      <div className="feature-item">
        <img className="feature-icon" src={image} alt={alt} />
        <h3 className="feature-item-title">{title}</h3>
        <p>{texte}</p>
      </div>
    </>
  );
}

export default Features;
