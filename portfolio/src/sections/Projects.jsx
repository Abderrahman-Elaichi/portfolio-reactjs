
import { useState } from "react";
import useRepos from "../hooks/useRepos";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");

  const { data = [], isLoading, isError, refetch } =
    useRepos("Abderrahman-Elaichi");

  const languages = [
    "All",
    ...new Set(data.map(repo => repo.language).filter(Boolean))
  ];

  const filteredProjects = data.filter(repo => {
    const matchesSearch = repo.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesLanguage =
      language === "All" || repo.language === language;

    return matchesSearch && matchesLanguage;
  });

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (isError) {
    return (
      <section className="projects" id="projects">
        <div className="container">
          <h2>My Projects</h2>
          <p>Something went wrong.</p>
          <button onClick={() => refetch()}>Try again</button>
        </div>
      </section>
    );
  }

  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="projects-header">
          <span className="section-label">MY WORK</span>
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on.</p>
        </div>

        <div className="projects-filters">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div className="projects-container">
          {filteredProjects.length === 0 ? (
            <p className="no-projects">No projects found.</p>
          ) : (
            filteredProjects.map(repo => (
              <article className="project-card" key={repo.id}>
                <div className="project-card-top">
                  <span className="project-icon">{"</>"}</span>

                 
                </div>

                <h3>{repo.name}</h3>

                <p className="project-description">
                  {repo.description || "No description available."}
                </p>

                <div className="project-card-footer">
                  <span>GitHub project</span>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project →
                  </a>
                </div>
              </article>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
