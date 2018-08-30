import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  const patientJourney = {
    'OR': {
      'duration': 240, // these values are in minutes
      'events': ['Anesthesia Start', 'Patient ready to transfer to CVICU']
    },
    'CVICU': {
      'duration': 4620,
      'events': ['Transfer', 'Foley, Central Line', 'Patient ready to transfer to Acute Care']
    },
    'Acute Care': {
      'duration': 14760,
      'events': ['Transfer', 'Ready to Discharge', 'Discharge']
    },
    'Home': {
      'duration': 0,
      'events': []
    }
  };

  ReactDOM.render(<App journeyData={patientJourney} />, document.getElementById('root'));
});
