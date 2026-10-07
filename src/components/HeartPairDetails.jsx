import homeImage from "../assets/heart-pair/heart-pair-home.png";
import loginImage from "../assets/heart-pair/heart-pair-login.png";
import registerImage from "../assets/heart-pair/heart-pair-register.png";
import levelsImage from "../assets/heart-pair/heart-pair-levels.png";
import gameplayImage from "../assets/heart-pair/heart-pair-gameplay.png";
import motivationImage from "../assets/heart-pair/heart-pair-motivation.png";
import winImage from "../assets/heart-pair/heart-pair-win.png";
import leaderboardImage from "../assets/heart-pair/heart-pair-leaderboard.png";
import accountImage from "../assets/heart-pair/heart-pair-myaccount.png";
import howToPlayImage from "../assets/heart-pair/heart-pair-howtoplay.png";
import mongodbImage from "../assets/heart-pair/heart-pair-mongodb.png";

function HeartPairDetails({ onClose }) {
  return (
    <section id="heartpair-details" className="heartpair-section">
      <div className="heartpair-container">

        <div className="heartpair-heading">
          <p className="section-label">Project Case Study</p>

          <h2>Heart Pair</h2>

          <p>
            Interactive Memory Matching Game with Motivation, Authentication,
            Leaderboard and Persistent Scores
          </p>

          <button
            type="button"
            className="secondary-btn heartpair-close-btn"
            onClick={onClose}
          >
            Back to Projects
          </button>
        </div>

        <div className="heartpair-block">
          <h3>Project Overview</h3>

          <p>
            Heart Pair is a full-stack memory matching game where players flip
            cards to find matching heart pairs before the timer runs out.
          </p>

          <p>
            The game combines memory-based gameplay with motivational feedback,
            user authentication, difficulty levels, persistent scores, a player
            profile and a dynamic leaderboard.
          </p>

          <img
            src={homeImage}
            alt="Heart Pair home screen"
            className="heartpair-wide-image"
          />
        </div>

        <div className="heartpair-block">
          <h3>Authentication System</h3>

          <p>
            Players can register and log in before playing. Authentication is
            handled through the backend using JWT-based user sessions.
          </p>

          <div className="heartpair-feature-grid">
            <div className="heartpair-feature-card">
              <h4>Login</h4>

              <img
                src={loginImage}
                alt="Heart Pair login screen"
              />
            </div>

            <div className="heartpair-feature-card">
              <h4>Registration</h4>

              <img
                src={registerImage}
                alt="Heart Pair registration screen"
              />
            </div>
          </div>
        </div>

        <div className="heartpair-block">
          <h3>Difficulty Levels</h3>

          <p>
            Players can choose between Easy, Medium and Hard modes. Each level
            changes the number of cards and the available time, creating
            different levels of difficulty.
          </p>

          <img
            src={levelsImage}
            alt="Heart Pair difficulty selection"
            className="heartpair-wide-image"
          />
        </div>

        <div className="heartpair-block">
          <h3>Core Gameplay</h3>

          <p>
            The Game Logic Module handles card flipping, matching, scoring,
            lives, timing and game completion.
          </p>

          <p>
            Clicking a card triggers the card-flip logic. Matching two cards
            awards points, while an unsuccessful match reduces the player's
            remaining lives.
          </p>

          <img
            src={gameplayImage}
            alt="Heart Pair gameplay screen"
            className="heartpair-wide-image"
          />
        </div>

        <div className="heartpair-block">
          <h3>Motivational Feedback</h3>

          <p>
            Every successful pair displays a motivational message. This adds a
            positive feedback element to the memory game and makes the gameplay
            experience more engaging.
          </p>

          <img
            src={motivationImage}
            alt="Heart Pair motivational message"
            className="heartpair-wide-image"
          />
        </div>

        <div className="heartpair-block">
          <h3>Game Completion</h3>

          <p>
            Players must match all pairs before the timer runs out. When the
            round is completed successfully, the game displays the player's
            final score and provides an option to play again.
          </p>

          <img
            src={winImage}
            alt="Heart Pair game completion screen"
            className="heartpair-wide-image"
          />
        </div>

        <div className="heartpair-block">
          <h3>Leaderboard & Player Account</h3>

          <p>
            Scores are stored and retrieved through the backend API. The
            leaderboard ranks players by score, while the account page displays
            the player's personal high score.
          </p>

          <div className="heartpair-feature-grid">
            <div className="heartpair-feature-card">
              <h4>Leaderboard</h4>

              <img
                src={leaderboardImage}
                alt="Heart Pair leaderboard"
              />
            </div>

            <div className="heartpair-feature-card">
              <h4>My Account</h4>

              <img
                src={accountImage}
                alt="Heart Pair player account"
              />
            </div>
          </div>
        </div>

        <div className="heartpair-block">
          <h3>How to Play</h3>

          <p>
            The game provides a dedicated guide explaining the rules, scoring
            system, lives, motivational messages and game objective.
          </p>

          <img
            src={howToPlayImage}
            alt="Heart Pair how to play screen"
            className="heartpair-wide-image"
          />
        </div>

        <div className="heartpair-block">
          <h3>Database Integration</h3>

          <p>
            MongoDB is used to store user and score data. The API layer handles
            communication between the frontend and backend using RESTful
            endpoints.
          </p>

          <img
            src={mongodbImage}
            alt="Heart Pair MongoDB score records"
            className="heartpair-wide-image"
          />
        </div>

        <div className="heartpair-block">
          <h3>System Modules</h3>

          <div className="heartpair-module-grid">
            <div>
              <h4>Game Logic Module</h4>
              <p>
                Handles card flipping, matching, score updates, lives, timing
                and game completion.
              </p>
            </div>

            <div>
              <h4>API Module</h4>
              <p>
                Retrieves and submits authentication, score and leaderboard
                data using RESTful endpoints.
              </p>
            </div>

            <div>
              <h4>UI Module</h4>
              <p>
                Displays cards, animations, motivational feedback and player
                interactions.
              </p>
            </div>
          </div>
        </div>

        <div className="heartpair-block">
          <h3>Key Features</h3>

          <div className="heartpair-stats">
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
        </div>

        <div className="heartpair-block">
          <h3>Technologies Used</h3>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>REST API</span>
            <span>JWT</span>
            <span>Socket.IO</span>
          </div>
        </div>

        <div className="heartpair-block">
          <h3>Project Summary</h3>

          <p>
            Heart Pair demonstrates full-stack web development through an
            interactive browser game that combines authentication, game logic,
            motivational feedback, persistent data storage and leaderboard
            functionality.
          </p>
        </div>

        <div className="heartpair-bottom-actions">
          <button
            type="button"
            className="secondary-btn heartpair-close-btn"
            onClick={onClose}
          >
            Back to Projects
          </button>
        </div>

      </div>
    </section>
  );
}

export default HeartPairDetails;