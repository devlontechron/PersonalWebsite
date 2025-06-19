import React from 'react';
import { useEffect, useState } from 'react';
import Media from '../models/media.js';
import './pages/media.css';                 // optional page-specific styles

export default function MediaPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/media.json')
      .then(r => r.json())
      .then(data => setItems(data.map(o => new Media(o))))
      .catch(console.error);
  }, []);

  return (
    <section className="media-page">
      <h1>Media</h1>

      {items.map(m => (
        <article key={m.title} className="media-card">
          <h3>{m.title}</h3>
          <ul>
            {m.links.map((url, idx) => (
              <li key={idx}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
