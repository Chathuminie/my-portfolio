import safesynthImage from "../assets/safesynth-dashboard.png";
import heartPairImage from "../assets/heart-pair/heart-pair-home.png";
import visionaryVerseImage from "../assets/visionary-verse.png";

function Projects({ onViewSafeSynth, onViewHeartPair }) {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        {/* =========================
            FEATURED PROJECTS
        ========================= */}

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

        {/* =========================
            CONTRIBUTED PROJECTS
        ========================= */}

        <div className="projects-heading contributed-heading">
          <p className="section-label">Team Experience</p>
          <h2>Contributed Projects</h2>
        </div>

        <div className="projects-list">

          {/* =========================
              VISIONARY VERSE
          ========================= */}

          <div className="project-card contributed-project-card">

            <div className="project-info">
              <span className="project-tag">
                Group Project
              </span>

              <h3>Visionary Verse</h3>

              <p className="project-subtitle">
                Digital Marketing Agency Management System
              </p>

              <p>
                Visionary Verse is a web-based management system developed as
                a group project for managing clients, projects, staff tasks,
                approvals, notifications and agency operations.
              </p>

              <p>
                My team role was Scheduling Manager, while my main development
                contribution focused on the Client Management module.
              </p>

              <div className="project-tech">
                <span>PHP</span>
                <span>MySQL</span>
                <span>JavaScript</span>
                <span>PDO</span>
                <span>SQL</span>
                <span>MVC</span>
                <span>Fetch API</span>
                <span>GitHub</span>
              </div>

              <div className="contribution-box">
                <h4>My Contribution</h4>

                <p>
                  Developed the Client Management module, including backend
                  controller and model functionality for creating, viewing,
                  updating, activating, deactivating and deleting client
                  records.
                </p>

                <p>
                  Also implemented client search and status filtering,
                  interactive edit forms and asynchronous client data loading
                  using JavaScript and the Fetch API.
                </p>
              </div>

              <div className="project-buttons contributed-buttons">
                <a
                 href="https://github.com/Keneth-Ravindu/Project-Visionary-Verse"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="secondary-btn contributed-github-btn"
           >
             View on GitHub
                </a>
              </div>
            </div>

            <div className="contributed-project-image">
              <img
                src={visionaryVerseImage}
                alt="Visionary Verse web application login screen"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;