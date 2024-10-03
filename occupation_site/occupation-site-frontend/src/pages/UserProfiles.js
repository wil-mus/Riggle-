import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get('/api/profiles/')
      .then(res => setProfiles(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {profiles.map(profile => (
        <div key={profile.user}>
          <h3>{profile.occupation}</h3>
          <a href={profile.rate_card} target="_blank" rel="noopener noreferrer">View Rate Card</a>
          <div>
            {Object.entries(profile.social_media_links).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer">{platform}</a>
            ))}
          </div>
          <button onClick={() => handleContact(profile.contact_email)}>Contact</button>
        </div>
      ))}
    </div>
  );
}

const handleContact = (email) => {
  const message = prompt('Enter your message:');
  axios.post('/api/contact/', { recipient: email, message })
    .then(res => alert('Message sent!'))
    .catch(err => console.error(err));
};

export default UserProfiles;
