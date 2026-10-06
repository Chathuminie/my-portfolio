import safesynthImage from "../assets/safesynth-dashboard.png";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-label">My Work</p>
          <h2>Featured Project</h2>
        </div>

        <div className="project-card">

          <div className="project-image">
            <img
              src={safesynthImage}
              alt="SafeSynth-FR dashboard"
            />
          </div>

          <div className="project-info">

            <span className="project-tag">
              Undergraduate Research Project
            </span>

            <h3>SafeSynth-FR</h3>

            <p className="project-subtitle">
              Privacy-Preserving, Fair & Robust Face Recognition
            </p>

            <p>
              SafeSynth-FR is an end-to-end facial recognition system designed
              to reduce privacy risks by using synthetic facial data instead of
              real biometric datasets.
            </p>

            <p>
              The system combines deep learning, computer vision and a
              Flask-based web application to support image upload recognition
              and real-time webcam recognition.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Flask</span>
              <span>TensorFlow</span>
              <span>Keras</span>
              <span>MobileNetV2</span>
              <span>OpenCV</span>
            </div>

            <div className="project-stats">

              <div>
                <strong>93.33%</strong>
                <span>Classification Accuracy</span>
              </div>

              <div>
                <strong>30</strong>
                <span>Synthetic Identities</span>
              </div>

              <div>
                <strong>Real-Time</strong>
                <span>Webcam Recognition</span>
              </div>

            </div>

            <div className="project-buttons">
              <a href="#" className="primary-btn">
                View Project
              </a>

              <a href="#" className="secondary-btn">
                GitHub
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;