export default function Home({ setCurrentPage }) {
  return (
    <section className="page home-page">
      <div className="hero">
        <h1>Hello Homosapiens</h1>
        <p>Take a look at</p>
        <button className="cta-button" onClick={() => setCurrentPage('projects')}>My Efforts</button>
      </div>

      <div className="about-me">
        <h3>Not About Me</h3>
        <p>
          Its me vs me. Don't try to pry just stay away.
        </p>
      </div>

    <div className="Ideas">
      <h3>
    some of my thoughts to share
      </h3>
    <p>Worry about yourself guys. This is not the best time to rotting in a room.
    </p>
    </div>
    </section>
  )
}
