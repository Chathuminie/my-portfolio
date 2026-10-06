function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <p className="section-label">Get In Touch</p>
        <h2>Contact Me</h2>

        <p className="contact-text">
          I am open to software engineering, web development, machine learning,
          and AI opportunities. Feel free to contact me or connect with me
          through GitHub and LinkedIn.
        </p>

        <div className="contact-links">
          <a href="mailto:chathuminijayalath2020@gmail.com" className="primary-btn">
            Email Me
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

export default Contact;