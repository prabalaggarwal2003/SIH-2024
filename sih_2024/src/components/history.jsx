import React from 'react';
import './history.css';

const historyEvents = [
  {
    date: '6 December 1946',
    event: 'Formation of the Constitution Assembly (in accordance with French practice).',
    color: '#FFDDC1',
  },
  {
    date: '9 December 1946',
    event: 'The first meeting was held in the Constitution Hall. J. B. Kripalani addressed the assembly; Sachchidananda Sinha became temporary president. The Muslim League boycotted the meeting.',
    color: '#CFFFCF',
  },
  {
    date: '11 December 1946',
    event: 'The Assembly appointed Rajendra Prasad as its president, H. C. Mukherjee as vice-president, and B. N. Rau as constitutional legal adviser. Initially, there were 389 members, which declined to 299 after partition.',
    color: '#C4E0E5',
  },
  {
    date: '13 December 1946',
    event: 'An "Objective Resolution" was presented by Jawaharlal Nehru, laying down the principles of the constitution. This later became the Preamble of the Constitution.',
    color: '#FFABAB',
  },
  {
    date: '22 January 1947',
    event: 'Objective Resolution unanimously adopted.',
    color: '#FFC3A0',
  },
  {
    date: '22 July 1947',
    event: 'National flag adopted.',
    color: '#FF677D',
  },
  {
    date: '15 August 1947',
    event: 'India achieved independence. India split into the Dominion of India and the Dominion of Pakistan.',
    color: '#D4A5A5',
  },
  {
    date: '29 August 1947',
    event: 'Drafting Committee appointed with B. R. Ambedkar as chairman. Other members included K.M. Munshi, Muhammed Sadulla, Alladi Krishnaswamy Iyer, N. Gopalaswami Ayyangar, Devi Prasad Khaitan, and BL Mitter.',
    color: '#C4E0E5',
  },
  {
    date: '16 July 1948',
    event: 'Along with Harendra Coomar Mookerjee, V. T. Krishnamachari was elected as second vice-president of Constituent Assembly.',
    color: '#FFDDC1',
  },
  {
    date: '26 November 1949',
    event: 'The Constitution of India was passed and adopted by the assembly.',
    color: '#CFFFCF',
  },
  {
    date: '24 January 1950',
    event: 'Last meeting of Constituent Assembly. The Constitution was signed and accepted (with 395 Articles, 8 Schedules, and 22 Parts).',
    color: '#C4E0E5',
  },
  {
    date: '26 January 1950',
    event: 'The Constitution came into force. (The process took 2 years, 11 months, and 18 days—at a total expenditure of ₹6.4 million.)',
    color: '#FFABAB',
  },
];

const History = () => {
  return (
    <div className="history-container">
      <h2 className="title">Timeline of the Formation of the Constitution of India</h2>
      <div className="history-timeline">
        {historyEvents.map((item, index) => (
          <div
            key={index}
            className="history-event"
            style={{ backgroundColor: item.color }}
          >
            <h3 className="date">{item.date}</h3>
            <p className="event-description">{item.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;