function Homepage() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">MEDITERRANEAN RESTAURANT</p>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Experience fresh Mediterranean flavors,
            authentic recipes, and a welcoming atmosphere.
          </p>
          <a href="#reservations" className="primary-button">
            Reserve a Table
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <h2>Welcome to Little Lemon</h2>
        <p>
          A family-owned Mediterranean restaurant bringing
          traditional flavors and modern dining together.
        </p>
      </section>

      <section className="section specials" id="menu">
        <h2>Our Specials</h2>
        <p>Explore our fresh Mediterranean dishes.</p>
      </section>
    </>
  );
}

export default Homepage;