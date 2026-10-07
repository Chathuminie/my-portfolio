import dashboard from "../assets/safesynth/dashboard.png";
import architecture from "../assets/safesynth/architecture.png";
import workflow from "../assets/safesynth/workflow.png";
import webcamResult from "../assets/safesynth/webcam-result.png";
import uploadResult from "../assets/safesynth/upload-result.png";
import noFace from "../assets/safesynth/no-face.png";
import multipleFaces from "../assets/safesynth/multiple-faces.png";

function SafeSynthDetails({ onClose }) {
  return (
    <section id="safesynth-details" className="safesynth-section">
      <div className="safesynth-container">

        <div className="safesynth-heading">
          <p className="section-label">Project Case Study</p>

          <h2>SafeSynth-FR</h2>

          <p>
            Privacy-Preserving, Fair & Robust Face Recognition using
            Synthetic Data
          </p>

          <button
            type="button"
            className="secondary-btn safesynth-close-btn"
            onClick={onClose}
          >
            Back to Projects
          </button>
        </div>

        <div className="safesynth-block">
          <h3>Project Overview</h3>

          <p>
            SafeSynth-FR is a privacy-preserving facial recognition system
            developed as an undergraduate research project. The system reduces
            reliance on real biometric datasets by using synthetic facial
            images for training and evaluation.
          </p>

          <p>
            It combines deep learning, computer vision and a Flask-based web
            application to support both image upload recognition and real-time
            webcam recognition.
          </p>

          <img
            src={dashboard}
            alt="SafeSynth-FR dashboard"
            className="safesynth-wide-image"
          />
        </div>

        <div className="safesynth-block">
          <h3>System Architecture</h3>

          <p>
            The application follows a complete recognition pipeline from the
            browser interface to face detection, preprocessing, prediction and
            final result display.
          </p>

          <div className="safesynth-image-center">
            <img
              src={architecture}
              alt="SafeSynth-FR system architecture"
              className="safesynth-diagram"
            />
          </div>
        </div>

        <div className="safesynth-block">
          <h3>Development Workflow</h3>

          <p>
            The model was developed using the SFHQ synthetic facial dataset.
            Faces were detected and cropped before preprocessing and
            augmentation. MobileNetV2 transfer learning was then used for
            recognition, followed by model evaluation and Flask integration.
          </p>

          <div className="safesynth-image-center">
            <img
              src={workflow}
              alt="SafeSynth-FR development workflow"
              className="safesynth-diagram workflow-image"
            />
          </div>
        </div>

        <div className="safesynth-block">
          <h3>Recognition Features</h3>

          <div className="safesynth-feature-grid">

            <div className="safesynth-feature-card">
              <h4>Image Upload Recognition</h4>

              <p>
                Users can upload an image and receive the predicted identity,
                confidence score and detection status.
              </p>

              <img
                src={uploadResult}
                alt="Successful image upload recognition"
              />
            </div>

            <div className="safesynth-feature-card">
              <h4>Live Webcam Recognition</h4>

              <p>
                The system supports real-time webcam recognition and can mark a
                detected face as known or unknown based on model confidence.
              </p>

              <img
                src={webcamResult}
                alt="Live webcam facial recognition"
              />
            </div>

          </div>
        </div>

        <div className="safesynth-block">
          <h3>Robust Recognition Scenarios</h3>

          <p>
            The application also handles cases where an image contains no
            detectable face or multiple faces.
          </p>

          <div className="safesynth-feature-grid">

            <div className="safesynth-feature-card">
              <h4>No Face Detected</h4>

              <img
                src={noFace}
                alt="SafeSynth-FR no face detected result"
              />
            </div>

            <div className="safesynth-feature-card">
              <h4>Multiple Faces Detected</h4>

              <img
                src={multipleFaces}
                alt="SafeSynth-FR multiple faces detected result"
              />
            </div>

          </div>
        </div>

        <div className="safesynth-block">
          <h3>Key Results</h3>

          <div className="safesynth-stats">

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
        </div>

        <div className="safesynth-block">
          <h3>Technologies Used</h3>

          <div className="project-tech">
            <span>Python</span>
            <span>Flask</span>
            <span>TensorFlow</span>
            <span>Keras</span>
            <span>MobileNetV2</span>
            <span>OpenCV</span>
            <span>Haar Cascade</span>
          </div>
        </div>

        <div className="safesynth-block">
          <h3>Project Summary</h3>

          <p>
            SafeSynth-FR demonstrates how synthetic facial data can be used to
            build a practical facial recognition system while reducing privacy
            concerns related to storing and processing real biometric data.
          </p>
        </div>

        <div className="safesynth-bottom-actions">
          <button
            type="button"
            className="secondary-btn safesynth-close-btn"
            onClick={onClose}
          >
            Back to Projects
          </button>
        </div>

      </div>
    </section>
  );
}

export default SafeSynthDetails;