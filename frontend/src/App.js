import React, { useEffect, useState } from 'react';

function App() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    sport_type: '',
    location: '',
    date: ''
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/events/')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/events/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEvent)
    })
      .then(res => res.json())
      .then(data => {
        setEvents([...events, data]);
        setNewEvent({
          title: '',
          description: '',
          sport_type: '',
          location: '',
          date: ''
        });
      });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Segoe UI', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#0077cc' }}>🏀 TeamUp by Jayden McBride 🌍</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '30px', background: '#f4f4f4', padding: '15px', borderRadius: '8px' }}>
        <h2 style={{ color: '#333' }}>Add a New Event</h2>
        <input name="title" placeholder="Title" value={newEvent.title} onChange={handleChange} style={inputStyle} />
        <input name="description" placeholder="Description" value={newEvent.description} onChange={handleChange} style={inputStyle} />
        <input name="sport_type" placeholder="Sport Type" value={newEvent.sport_type} onChange={handleChange} style={inputStyle} />
        <input name="location" placeholder="Location" value={newEvent.location} onChange={handleChange} style={inputStyle} />
        <input name="date" placeholder="Date (YYYY-MM-DDTHH:MM)" value={newEvent.date} onChange={handleChange} style={inputStyle} />
        <button type="submit" style={buttonStyle}>➕ Add Event</button>
      </form>

      <h2>📅 Upcoming Events</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {events.map((event, index) => (
          <li key={index} style={eventCard}>
            <h3>{event.title}</h3>
            <p><strong>Sport:</strong> {event.sport_type}</p>
            <p>{event.description}</p>
            <p><strong>📍 Location:</strong> {event.location}</p>
            <p><strong>🕒 Date:</strong> {new Date(event.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '8px',
  margin: '10px 0',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  background: '#0077cc',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const eventCard = {
  background: '#fff',
  padding: '15px',
  marginBottom: '15px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

export default App;