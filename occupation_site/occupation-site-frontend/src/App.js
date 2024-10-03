import React, { useState } from 'react';
import OccupationCard from './components/OccupationCard';
import './App.css';
import ContactForm from './components/ContactForm';


function App() {
  const [occupations, setOccupations] = useState([
    {
      name: 'James Mwangi',
      occupation: 'Software Developer',
      rateCard: '$50/hr',
      socialMedia: {
        linkedin: 'https://linkedin.com/jamesmwangi',
        twitter: 'https://twitter.com/jamesmwangi',
      },
    },
    {
      name: 'Dorothy Mwenga',
      occupation: 'Graphic Designer',
      rateCard: '$40/hr',
      socialMedia: {
        linkedin: 'https://linkedin.com/dorothymwenga',
        instagram: 'https://instagram.com/dorothymwenga',
      },
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rate Cards</h1>
      </header>
      <main>
      <ContactForm />
        {occupations.map((person, index) => (
          <OccupationCard key={index} person={person} />
        ))}
      </main>

    </div>
    
  );
}

export default App;
