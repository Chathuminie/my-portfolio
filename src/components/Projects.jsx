import safesynthImage from "../assets/safesynth-dashboard.png";
import heartPairImage from "../assets/heart-pair/heart-pair-home.png";

function Projects({ onViewSafeSynth, onViewHeartPair }) {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-label">My Work</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-list">

          {/* =========================
              SAFESYNTH-FR
          ========================= */}

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
                SafeSynth-FR is an end-to-end facial recognition system
                designed to reduce privacy risks by using synthetic facial
                data instead of real biometric datasets.
              </p>

              <p>
                The system combines deep learning, computer vision and a
                Flask-based web application to support image upload
                recognition and real-time webcam recognition.
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
                <button
                  type="button"
                  className="primary-btn project-view-btn"
                  onClick={onViewSafeSynth}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>

          {/* =========================
              HEART PAIR
          ========================= */}

          <div className="project-card">
            <div className="project-image">
              <img
                src={heartPairImage}
                alt="Heart Pair memory matching game"
              />
            </div>

            <div className="project-info">
              <span className="project-tag">
                Full-Stack Web Game
              </span>

              <h3>Heart Pair</h3>

              <p className="project-subtitle">
                Interactive Memory Matching Game with Motivation & Leaderboard
              </p>

              <p>
                Heart Pair is a full-stack memory matching game where players
                flip cards to find matching heart pairs before the timer runs
                out.
              </p>

              <p>
                Successful matches increase the player's score and display
                motivational messages, while unsuccessful matches decrease
                available lives. The game also includes difficulty levels,
                authentication, player profiles and a dynamic leaderboard.
              </p>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>REST API</span>
                <span>JWT</span>
              </div>

              <div className="project-stats">
                <div>
                  <strong>3</strong>
                  <span>Difficulty Levels</span>
                </div>

                <div>
                  <strong>5</strong>
                  <span>Starting Lives</span>
                </div>

                <div>
                  <strong>Dynamic</strong>
                  <span>Leaderboard</span>
                </div>
              </div>

              <div className="project-buttons">
                <button
                  type="button"
                  className="primary-btn project-view-btn"
                  onClick={onViewHeartPair}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;