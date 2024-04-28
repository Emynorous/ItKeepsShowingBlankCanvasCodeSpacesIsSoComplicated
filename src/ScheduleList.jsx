
import React from 'react';

function ScheduleList({ schedule }) {
  return (
    <div>
      <h3>Plánované hodiny a aktivity:</h3>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>
            <strong>Předmět:</strong> {item.subject}, <strong>Učebna:</strong> {item.classroom}, <strong>Čas:</strong> {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScheduleList;
