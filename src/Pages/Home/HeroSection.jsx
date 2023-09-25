export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Tyler Tran 👋</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span> <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            I'm a student and aspiring software engineer.
            <br /> Learn more about me below and download my CV!
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
        <button className="btn btn-primary">Download Resume/CV</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img2.png" alt="Hero Section" />
      </div>
    </section>
  );
}
