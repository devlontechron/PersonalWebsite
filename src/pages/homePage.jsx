import React from 'react';
export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Hi, I’m Jon&nbsp;Doe</h1>
        <p>Software engineer, fitness buff, film-photography lover.</p>
      </section>

      <section className="cta">
        <a href="#/projects" className="btn">See my work</a>
        <a href="#/contact"  className="btn outline">Get in touch</a>
      </section>
    </main>
  );
}

