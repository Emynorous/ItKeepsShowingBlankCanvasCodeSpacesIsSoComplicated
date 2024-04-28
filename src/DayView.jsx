
import React, { useState } from 'react';
import ScheduleList from './ScheduleList';
import ScheduleForm from './ScheduleForm';

function DayView(props) {
  const [schedule, setSchedule] = useState([]);

  const handleAddSchedule = (newSchedule) => {
    setSchedule([...schedule, newSchedule]);
  };

  return (
    <div>
      <h2>{props.match.params.day}</h2>
      <ScheduleForm onAddSchedule={handleAddSchedule} />
      <ScheduleList schedule={schedule} />
    </div>
  );
}

export default DayView;
