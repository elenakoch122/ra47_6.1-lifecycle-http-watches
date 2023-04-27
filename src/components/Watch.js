import moment from "moment/moment";
import { useEffect, useState } from "react";

export default function Watch({ watch, deleteWatch }) {
  const localTimezone = new Date().getTimezoneOffset() / 60;
  const diffHour = localTimezone + Number(watch.timeZone);

  const [hour, setHour] = useState(Number(moment().format('h')) + diffHour);
  const [minute, setMinute] = useState(moment().format('mm'));
  const [second, setSecond] = useState(moment().format('ss'));

  useEffect(() => {
    const timeout = setInterval(() => {
      setHour(Number(moment().format('h')) + diffHour);
      setMinute(moment().format('mm'));
      setSecond(moment().format('ss'));
    }, 0);

    return () => clearInterval(timeout);
  }, [diffHour]);

  return (
    <div className="watch">
      <h4 className="watch__title">
        {watch.watchName} ({watch.timeZone >= 0 ? '+' : '-'}{Math.abs(watch.timeZone)})
        <span className="watch__close" onClick={() => deleteWatch(watch.id)}>&#10006;</span>
      </h4>
      <div className="watch__body">
        <div className="watch__center"></div>
        <div className="watch__hourHand" style={{ transform: `rotate(${hour * 30 + minute / 12 * 6}deg)` }}></div>
        <div className="watch__minuteHand" style={{ transform: `rotate(${minute * 6}deg)` }}></div>
        <div className="watch__secondHand" style={{ transform: `rotate(${second * 6}deg)` }}></div>
      </div>
    </div>
  );
}
