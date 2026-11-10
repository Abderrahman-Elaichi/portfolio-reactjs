export default function Hero() {
  return (
    <section id="home" className="hero">
      
      <div className="container-left">
        <div className="hero-content">
          <p className="hero-label">Front-End Developer</p>
          <h1>
            Hi, I&apos;m <span>Abderrahman</span>
          </h1>
          <h2>A front end developer </h2>
          <p className="hero-description">
           I design and develop modern websites and applications with clean code, thoughtful architecture, and a strong focus on user experience. My goal is to create intuitive, responsive, and engaging digital experiences.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-outline" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="container-right">
        <div className="code-card">
          <div className="code-title"><i class="fa-solid fa-code"></i> hello.js</div>
          <div className="code"><span>console.log</span>("Hello, World!");</div>
          <div className="result"><div className="result-title"><i class="fa-solid fa-display"></i> Output:</div><p className="result-txt">Hello,World!</p></div>
        </div>
      </div>
    </section>
  );
}
