function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <p className="section-label">About Me</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-grid">
          <div className="about-profile-card">
            <div className="profile-code">
              <span>&lt;developer&gt;</span>

              <h3>Chathumini Jayalath</h3>

              <p>
                Computer Science Graduate
              </p>

              <p>
                Software Developer
              </p>

              <p>
                AI & Machine Learning Enthusiast
              </p>

              <span>&lt;/developer&gt;</span>
            </div>
          </div>

          <div className="about-content">
            <h3>
              Building practical and intelligent software solutions
            </h3>

            <p>
              I am a Computer Science graduate passionate about building
              practical software solutions, modern web applications, and
              intelligent systems.
            </p>

            <p>
              I am particularly interested in machine learning and artificial
              intelligence, with a focus on applying these technologies to
              solve real-world problems.
            </p>

            <p>
              My work includes projects such as SafeSynth-FR, a
              privacy-preserving facial recognition system developed using
              synthetic data, deep learning, computer vision, and a Flask-based
              web application.
            </p>

            <div className="about-highlights">
              <div className="about-highlight">
                <h4>Web Development</h4>
                <p>Building responsive and practical web applications.</p>
              </div>

              <div className="about-highlight">
                <h4>AI & Machine Learning</h4>
                <p>
                  Exploring intelligent systems and real-world AI applications.
                </p>
              </div>

              <div className="about-highlight">
                <h4>Problem Solving</h4>
                <p>
                  Turning technical challenges into clear and usable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;