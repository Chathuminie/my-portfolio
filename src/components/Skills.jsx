function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="section-label">My Skills</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>JavaScript</span>
              <span>Java</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Web Development</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Flask</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>AI & Machine Learning</h3>
            <div className="skill-tags">
              <span>TensorFlow</span>
              <span>Keras</span>
              <span>MobileNetV2</span>
              <span>Computer Vision</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>OpenCV</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;