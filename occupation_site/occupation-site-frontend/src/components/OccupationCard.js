import React from 'react';

function OccupationCard({ person }) {
  return (
    <div className="card">
      <h2>{person.name}</h2>
      <p>Occupation: {person.occupation}</p>
      <p>Rate: {person.rateCard}</p>
      <div>
        <h4>Social Media:</h4>
        <ul>
          {person.socialMedia.linkedin && (
            <li>
              <a href={person.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          )}
          {person.socialMedia.twitter && (
            <li>
              <a href={person.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          )}
          {person.socialMedia.instagram && (
            <li>
              <a href={person.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          )}
        </ul>
      </div>
      <button>Contact</button>
    </div>
  );
}

export default OccupationCard;
