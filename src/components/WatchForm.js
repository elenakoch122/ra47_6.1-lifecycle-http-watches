import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function WatchForm({ addWatch }) {
  const [watchName, setWatchName] = useState('');
  const [timeZone, setTimeZone] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addWatch({ watchName, timeZone, id: uuidv4() });
    setWatchName('');
    setTimeZone('');
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="form__label" htmlFor="watchName">Название
        <input className="form__input" type="text" id="watchName" value={watchName} onChange={(e) => setWatchName(e.target.value)} required />
      </label>

      <label className="form__label" htmlFor="timeZone">Временная зона
        <input className="form__input" type="number" id="timeZone" value={timeZone} onChange={(e) => setTimeZone(e.target.value)} required min="-12" max="12"/>
      </label>

      <button className="form__btn">Добавить</button>
    </form>
  );
}
