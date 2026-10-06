import safesynthImage from "../assets/safesynth-dashboard.png";
function Projects() {
  return (
    <section id="projects" className="projects-section">
        
      <div className="projects-container">

        <p className="section-label">My Work</p>
        <h2>Featured Projects</h2>

        <div className="project-card">

          <div className="project-info">

            <span className="project-tag">
              Undergraduate Research Project
            </span>

            <h3>SafeSynth-FR</h3>

            <p className="project-subtitle">
              Privacy-Preserving, Fair and Robust Face Recognition
              Using Synthetic Data
            </p>

            <p>
              SafeSynth-FR is an end-to-end facial recognition system
              designed to reduce the privacy risks associated with
              collecting real biometric facial data.
            </p>

            <p>
              The system is trained using synthetic facial data and uses
              MobileNetV2 for deep-learning-based face recognition,
              Haar Cascade for face detection, and a Flask web application
              for real-time recognition through image uploads and webcam input.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Flask</span>
              <span>TensorFlow</span>
              <span>Keras</span>
              <span>MobileNetV2</span>
              <span>OpenCV</span>
              <span>Haar Cascade</span>
              <span>Deep Learning</span>
              <span>Computer Vision</span>
            </div>

            <div className="project-image">
              <img
               src={safesynthImage}
               alt="SafeSynth-FR dashboard interface"
              />
           </div>

            <div className="project-features">

              <h4>Key Features</h4>

              <ul>
                <li>Privacy-preserving recognition using synthetic facial data</li>

                <li>
                  Image upload-based face recognition
                </li>

                <li>
                  Real-time webcam face detection and recognition
                </li>

                <li>
                  Recognition of known and unknown individuals
                </li>

                <li>
                  Masked and partially occluded face testing
                </li>

                <li>
                  Robustness testing under different lighting conditions
                </li>

                <li>
                  Confidence-based prediction results
                </li>
              </ul>

            </div>

            <div className="project-buttons">

              <a
                href="#"
                className="primary-btn"
              >
                View Project
              </a>

              <a
                href="#"
                className="secondary-btn"
              >
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