import Watch from "./Watch";

export default function WatchesList({ watchesList, deleteWatch }) {
  return (
    <ul className="watches-list">
      {watchesList.map(w => <li className="watches-item" key={w.id}><Watch watch={w} deleteWatch={deleteWatch} /></li>)}
    </ul>
  );
}
