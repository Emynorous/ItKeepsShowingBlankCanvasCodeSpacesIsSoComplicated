
import React, { useState } from 'react';

function ScheduleForm({ onAddSchedule }) {
  const [subject, setSubject] = useState('');
  const [classroom, setClassroom] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = {
      subject,
      classroom,
      time
    };
    onAddSchedule(newSchedule);
    setSubject('');
    setClassroom('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Předmět"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="text"
        placeholder="Učebna"
        value={classroom}
        onChange={(e) => setClassroom(e.target.value)}
      />
      <input
        type="text"
        placeholder="Čas"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Přidat</button>
    </form>
  );
}

export default ScheduleForm;
