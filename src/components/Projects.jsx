import React from 'react';

function Projects() {
  const items = [
    {
      id: 1,
      title: 'Brand Identity',
      img: 'https://source.unsplash.com/random/800x600?sig=1&design',
    },
    {
      id: 2,
      title: 'Website Redesign',
      img: 'https://source.unsplash.com/random/800x600?sig=2&ui',
    },
    {
      id: 3,
      title: 'Mobile App',
      img: 'https://source.unsplash.com/random/800x600?sig=3&app',
    },
  ];

  return (
    <section id="projects">
      <h2>Selected Works</h2>
      <div className="projects-grid">
        {items.map((item) => (
          <div className="project-card" key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>
              Brief description of this project highlighting design goals and
              results.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
