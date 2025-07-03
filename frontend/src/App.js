import React, { useEffect, useState } from 'react';
import api from './api'; // This should point to axios with baseURL set

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/api/events/')
      .then((res) => {
        const data = res.data;
        const events = Array.isArray(data) ? data : data.results || [];
        setProjects(events);
      })
      .catch((err) => {
        console.error("API fetch error:", err);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>TeamUp Projects</h1>
      {projects.length === 0 ? (
        <p>No projects yet!</p>
      ) : (
        <ul>
          {projects.map((event) => (
            <li key={event.id}>
              <strong>{event.title}</strong><br />
              {event.description}<br />
              {event.location} — {new Date(event.date).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
