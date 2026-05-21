export default function Projects() {
  const projects = [
    { id: 1, title: 'I am jose mourinho', description: 'you cannot put pressure on me' },
    { id: 2, title: 'I am being serious', description: '6 7' },
    { id: 3, title: 'shut the fa cup', description: 'well well well' },
  ]

  return (
    <section className="page projects-page">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
