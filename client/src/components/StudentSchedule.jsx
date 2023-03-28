import React from "react";
import styles from "./StudentSchedule.module.scss";
import subjectsColorSchema from "./SubjectsColorSchema.module.scss";
import { MDBSpinner } from "mdb-react-ui-kit";
import { useSchoolConfig } from "../hooks/useSchoolConfig";
import { useGetStudentSchedule } from "../hooks/useGetStudentSchedule";

const useScheduleGrid = () => {
  const [schoolConfig] = useSchoolConfig();
  const { days, slots } = schoolConfig;

  return React.useMemo(
    () => Array(days.length).fill(Array(slots.length).fill(null)),
    [days.length, slots.length],
  );
};

const SUBJECT_TO_COLOR = {
  Math: subjectsColorSchema.math,
  German: subjectsColorSchema.german,
  English: subjectsColorSchema.english,
  "C.S": subjectsColorSchema.computerScience,
  Technology: subjectsColorSchema.technology,
  Chemistry: subjectsColorSchema.chemistry,
  Physics: subjectsColorSchema.physics,
  Biology: subjectsColorSchema.biology,
  History: subjectsColorSchema.history,
  Geography: subjectsColorSchema.geography,
  Art: subjectsColorSchema.art,
  Music: subjectsColorSchema.music,
  "P.E": subjectsColorSchema.physicalEducation,
};

const Slot = ({ slot, isLoading }) => {
  const [{ slots }] = useSchoolConfig();
  if (!slot)
    return (
      <div className={`${styles.scheduleCell} ${styles.scheduleSlot}`}>
        {isLoading && (
          <MDBSpinner className="mx-2" color="info">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        )}
      </div>
    );
  return (
    <div
      className={`${styles.scheduleCell} ${styles.scheduleSlot} ${
        SUBJECT_TO_COLOR[slot.subjectName]
      }`}
      // style={{ backgroundColor: SUBJECT_TO_COLOR[slot.subjectName] }}
    >
      <span className={styles.mobileTimeSlot}>
        {slots[slot.slot].from} - {slots[slot.slot].to}
      </span>
      <p className={`${styles.scheduleSubject}`}>{slot.name}</p>
      <p className={`${styles.scheduleSubject}`}>{slot.subjectName}</p>
      <p>{slot.teacher.name}</p>
    </div>
  );
};

const Schedule = () => {
  const { data: sessions, isLoading, error } = useGetStudentSchedule();
  const [{ slots, days }] = useSchoolConfig();
  const scheduleGrid = useScheduleGrid();

  if (error)
    return (
      <div>
        <p>Some error has happened.</p> <p>Please try refreshing your page.</p>
      </div>
    );
  return (
    <div className={styles.schedulePage}>
      <div className={styles.scheduleContainer}>
        <div className={`${styles.dayColumn} ${styles.slotsColumn}`}>
          <div className={`${styles.scheduleCell} ${styles.weekDayLabel}`} />
          {slots.map((slot) => (
            <div
              key={`${slot.from}-${slot.to}`}
              className={`${styles.scheduleCell} ${styles.scheduleLabel}`}
            >
              {slot.from} - {slot.to}
            </div>
          ))}
        </div>

        {scheduleGrid.map((col, dayIndex) => (
          <>
            <label
              key={`${days[dayIndex]}:mobile`}
              htmlFor={days[dayIndex]}
              className={styles.weekDayLabelMobile}
            >
              {days[dayIndex]}
            </label>
            <input
              key={`${days[dayIndex]}:checkbox`}
              id={days[dayIndex]}
              type="checkbox"
              hidden
            />
            <div key={`day-${dayIndex}`} className={styles.dayColumn}>
              <div
                key={days[dayIndex]}
                className={`${styles.scheduleCell} ${styles.scheduleLabel} ${styles.weekDayLabel}`}
              >
                {days[dayIndex]}
              </div>

              {col.map((_, slotIndex) => (
                <Slot
                  key={`slot-${dayIndex}-${slotIndex}`}
                  slot={sessions?.find(
                    (s) => s.weekDay === dayIndex && s.slot === slotIndex,
                  )}
                  isLoading={isLoading}
                />
              ))}
            </div>
          </>
        ))}
      </div>
      {isLoading && <span>loading your schedule...</span>}
    </div>
  );
};

export default Schedule;
