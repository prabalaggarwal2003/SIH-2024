import React from 'react';
import './parts.css'; // Import the CSS file

const Parts = () => {
  return (
    <div className="containers">
      <h1 className='headi'>Meet the Three Branches of Government!</h1>

      {/* Executive Branch */}
      <div className="executive">
        <h2>1. The Executive Branch</h2>
        <p>
          Imagine you're the captain of a ship! The <strong>Executive</strong> branch is like the ship's captain. It's led by the President (the captain) and their team, who make sure the laws are followed and the ship (our country) is sailing smoothly!
        </p>
        <p>
          They decide how to steer the ship, but they can’t make the rules. They make sure the crew (the government) is working together to keep everything running well.
        </p>
      </div>

      {/* Legislative Branch */}
      <div className="legislative">
        <h2>2. The Legislative Branch</h2>
        <p>
          The <strong>Legislative</strong> branch is like the people who write the rulebook for the ship. It’s made up of the <strong>Ruling Party</strong>, and their job is to create the laws that keep everyone safe and happy.
        </p>
        <p>
          They’re like a group of smart sailors who think about new rules to help everyone on board, and they work together to write them down. There are two teams: the <strong>Lok Sabha</strong> and the <strong>Rajya Sabha</strong>, and they both work to come up with the best ideas!
        </p>
      </div>

      {/* Judiciary Branch */}
      <div className="judiciary">
        <h2>3. The Judiciary Branch</h2>
        <p>
          The <strong>Judiciary</strong> branch is like the ship's referees. They don’t write the rules, but they make sure everyone is playing fair! Judges and courts decide if someone broke the rules or if the rules are fair for everyone.
        </p>
        <p>
          They look at the rulebook and help solve problems when people disagree about what the rules mean. They help keep the ship running smoothly and make sure everyone is treated fairly.
        </p>
      </div>

      <h3>Together, they keep the ship of our country sailing smoothly!</h3>
    </div>
  );
};

export default Parts;