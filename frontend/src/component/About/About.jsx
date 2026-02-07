import './About.css';

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-header">
          <h1>About This App</h1>
          <p className="about-subtitle">
            A simple, secure, and powerful password generator
          </p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>🎯 What is This?</h2>
            <p>
              This is a free, open-source password generator that helps you create
              strong and secure passwords to protect your online accounts. All password
              generation happens directly in your browser - nothing is sent to any server,
              ensuring your passwords remain completely private.
            </p>
          </section>

          <section className="about-section">
            <h2>⚡ Features</h2>
            <ul>
              <li>Generate passwords from 4 to 32 characters long</li>
              <li>Customize with uppercase, lowercase, numbers, and special characters</li>
              <li>Real-time password strength indicator</li>
              <li>Add custom words to make passwords memorable</li>
              <li>One-click copy to clipboard</li>
              <li>100% client-side - your passwords never leave your device</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>👨‍💻 Who Created This?</h2>
            <p>
              Created by <strong>Abhinav</strong> as a learning project to explore
              modern web development with React and Vite.
            </p>
            <p>
              This project demonstrates building a practical, user-friendly tool
              while learning frontend development, state management, and deployment
              best practices.
            </p>
          </section>

          <section className="about-section">
            <h2>🛠️ Built With</h2>
            <div className="tech-stack">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Vite</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">CSS3</span>
            </div>
          </section>

          <section className="about-section">
            <h2>🔒 Privacy & Security</h2>
            <p>
              Your privacy is important. This app runs entirely in your browser using
              JavaScript's built-in cryptographic random number generator. No passwords
              are stored, logged, or transmitted anywhere. The code is open-source and
              can be reviewed on GitHub.
            </p>
          </section>

          <section className="about-section">
            <h2>📫 Get in Touch</h2>
            <p>
              Found a bug? Have a suggestion? Feel free to open an issue on{' '}
              <a 
                href="https://github.com/Abhinav10oo/password_Generator_2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub
              </a>
            </p>
          </section>
        </div>

        <div className="about-footer">
          <p>Made with ❤️ for better online security</p>
        </div>
      </div>
    </div>
  );
}

export default About;