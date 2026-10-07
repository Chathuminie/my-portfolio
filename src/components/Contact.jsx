function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">Get In Touch</p>
          <h2>Contact Me</h2>
        </div>

        <p className="contact-text">
          I am open to software development, web development, AI, and machine
          learning opportunities. Feel free to send me a message or connect
          with me through GitHub and LinkedIn.
        </p>

        <form
          className="contact-form"
          action="https://formspree.io/f/xkjoovdg"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>

        <div className="contact-socials">
          <a
            href="https://github.com/Chathuminie"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chathumini-jayalath-115000267/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:chathuminijayalath2020@gmail.com">
            Email
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;