import moment from "moment/moment";

export default function Watch({ watch }) {
  const hour = moment().format('h');
  const minute = moment().format('mm');
  const second = moment().format('ss');
  console.log(hour, minute, second);
  return (
    <div className="watch">
      <h4 className="watch__title">
        {watch.watchName} ({watch.timeZone >= 0 ? '+' : '-'}{Math.abs(watch.timeZone)})
        <span className="watch__close">&#10006;</span>
      </h4>
      <div className="watch__body">
        <div className="watch__hourHand" style={{ transform: `rotate(${0}deg)` }}></div>
        <div className="watch__minuteHand" style={{ transform: `rotate(${0}deg)` }}></div>
        <div className="watch__secondHand" style={{ transform: `rotate(${0}deg)` }}></div>
      </div>
    </div>
  );
}
