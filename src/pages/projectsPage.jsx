import React from 'react';
import { useEffect, useState } from 'react';
import Project from '../models/project.js';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(json => setProjects(json.map(obj => new Project(obj))))
      .catch(console.error);
  }, []);

  return projects.map(p => (
    <article key={p.title}>
      {p.image && <img src={p.image} alt="" />}
      <h3>{p.title}</h3>
      <p>{p.about}</p>
      {p.hasLink() && <a href={p.link}>Learn more</a>}
    </article>
  ));
}
