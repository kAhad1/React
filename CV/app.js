const CV = () => {
  return (
    <div className="cv-container">
      <header>
        <h1>Abdul Ahad</h1>
        <p>Software Developer | Web Developer</p>
      </header>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: <a href="mailto:xyz@gmail.com">Ahad@gmail.com</a></li>
          <li>Phone: <a href="tel:+11234567890">+92 3323245949</a></li>
          <li>Location: Karachi, Pakistan</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>BS in Software Engineering, XYZ University - 2027</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>Firebase</li>
          <li>HTML5 / CSS3</li>
          <li>JavaScript</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>Software Engineer at ABC Corp - 2022-Present</li>
          <li>Frontend Developer at XYZ Inc. - 2020-2022</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://example.com/project-a" target="_blank" rel="noopener noreferrer">
              Project A: E-commerce website built with React 
            </a>
          </li>
          <li>
            <a href="https://example.com/project-b" target="_blank" rel="noopener noreferrer">
              Project B: Portfolio website using React and styled-components
            </a>
          </li>
        </ul>
      </section>

     
    </div>
  );
}

ReactDOM.render(<CV />, document.getElementById('root'));