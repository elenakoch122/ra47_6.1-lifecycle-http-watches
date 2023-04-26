export default function Watch({ watch }) {
  return (
    <div className="watch">
      <h4 className="watch__title">
        {watch.watchName} ({watch.timeZone >= 0 ? '+' : '-'}{Math.abs(watch.timeZone)})
        <span className="watch__close">&#10006;</span>
      </h4>
      <div className="watch__body">
        <div className="watch__hourHand"></div>
        <div className="watch__minuteHand"></div>
        <div className="watch__secondHand"></div>
      </div>
    </div>
  );
}
