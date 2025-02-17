import { Link } from "react-router";
import "./TrackList.css";

export default function TrackList(props) {
  const trackLis = props.tracks.map((track) => (
    <div key={track._id}>
      <li>
        "{track.title}" by {track.artist}
      </li>
      <button>
        {" "}
        <Link to={`/edit-track/${track._id}`}>Edit</Link>{" "}
      </button>
      <button onClick={() => props.deleteTrack(track._id)}>Delete</button>
      <button onClick={() => props.setPlayingTrack(track)}>Play</button>
    </div>
  ));

  return (
    <section>
      <h1>Track List</h1>
      {trackLis.length !== 0 ? (
        <ul className="list">{trackLis}</ul>
      ) : (
        <h1>There are no tracks yet!</h1>
      )}
    </section>
  );
}
