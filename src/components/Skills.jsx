function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <p className="section-label">My Skills</p>
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Programming</h3>
            <p>Python</p>
            <p>JavaScript</p>
            <p>Java</p>
          </div>

          <div className="skill-card">
            <h3>Web Development</h3>
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Flask</p>
          </div>

          <div className="skill-card">
            <h3>AI & Machine Learning</h3>
            <p>TensorFlow</p>
            <p>Keras</p>
            <p>MobileNetV2</p>
            <p>Computer Vision</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git</p>
            <p>GitHub</p>
            <p>VS Code</p>
            <p>OpenCV</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;