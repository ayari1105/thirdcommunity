export default function Hero() {
  return (
    <section className="new-hero">
      <div className="hero-image-wrapper">
          <img
          src="/images/main.jpg"
          alt="main visual"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}