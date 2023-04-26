import Watch from "./Watch";

export default function WatchesList({ watchesList }) {
  return (
    <ul className="watches-list">
      {watchesList.map(w => <li className="watches-item" key={w.id}><Watch watch={w} /></li>)}
    </ul>
  );
}
