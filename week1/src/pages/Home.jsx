import wowImage from '../images/wow.JPG';

export default function Home({ setCurrentPage }) {
  return (
    <section className="page home-page">
      <div className="hero">
        <span className="hero-tag">Hello Homosapiens. I am</span>
        <h1>Mandeep Rajbhandari</h1>
        <p className="hero-description">
          I am a creative frontend developer (React.jsx). I am currently living
          in kathmandu, Nepal and completed my bachelor's degree in computer
          science affilated to london metropolitan university.
        </p>
        <div className="hero-actions">
          <button
            className="cta-button"
            onClick={() => setCurrentPage('projects')}
          >
            My Efforts
          </button>
          <button
            className="secondary-button"
            onClick={() => setCurrentPage('contact')}
          >
            Open to work
          </button>
        </div>
      </div>

      <div className="home-panels">
        <aside className="about-card">
          <h3>About Me</h3>
          <div className="about-image-wrap">
            <img src={wowImage} alt="About me" className="about-card-image" />
          </div>
          <p>
            I am Mandeep Rajbhandari. A 23 years old who is currently learning (intern) at Swift Technology
            Pvt Ltd based in Kathmandu, Nepal.
          </p>
        </aside>

        <aside className="skills-card">
          <h3>Education</h3>
          <ul className="skills-gained-list">
            <li>
              Kaligandaki Secondary School <br></br>2005–2017
            </li>
            <li>
              Trinity International College (Science) -- 2018–2020
              <br></br>
            </li>
            <li>
              Informatics College <br></br>
              (BIT) -- 2022–2025
            </li>
            <li>
              Intern at Xdezo Technology <br></br>Nov 2024 – Febuary 2025
            </li>
            <li>
              Intern at Swift Technology <br></br> May 2026 – Present
            </li>
          </ul>
        </aside>
      </div>

      <div className="home-bottom">
        <aside className="hobbies-card">
          <h3>Hobbies & Interests</h3>
          <ul className="hobbies-list">
            <li>Reading Books</li>
            <li>Football on a turf</li>
            <li>Photography & editing</li>
            <li>Binge Watching Movies and Series</li>
          </ul>
        </aside>

        <aside className="languages-card">
          <h3>Languages</h3>
          <ul className="languages-list">
            <li>Nepali — Native</li>
            <li>English — Fluent</li>
            <li>Hindi — Conversational</li>
            <li>Korean — Conversational</li>

          </ul>
        </aside>
      </div>
    </section>
  );
}
