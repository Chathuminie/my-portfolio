function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-badge">
          Computer Science Graduate
        </span>

        <p className="hero-intro">Hello, I'm</p>

        <h1>Chathumini Jayalath</h1>

        <h2>
          Software Developer | AI & Machine Learning Enthusiast
        </h2>

        <p className="hero-description">
          I build practical software solutions, modern web applications,
          and intelligent systems. I am especially interested in artificial
          intelligence, machine learning, and applying technology to solve
          real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="https://github.com/Chathuminie"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chathumini-jayalath-115000267"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;