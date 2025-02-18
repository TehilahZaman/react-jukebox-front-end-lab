import "./TrackList.css";
export default function TrackList(props) {
  const trackLis = props.tracks.map((track) => (
    <div key={track._id}>
      <li onClick={() => props.setSelectedTrack(track)}>
        "{track.title}" by {track.artist}
      </li>
      <button onClick={() => props.setPlayingTrack(track)}>Play</button>
    </div>
  ));

  return (
    <section>
      <h1>Track List</h1>
      <button className="form-button" onClick={props.handleFormVisible}>{props.buttonText}</button>
      {trackLis.length !== 0 ? (
        <ul className="list">{trackLis}</ul>
      ) : (
        <h1>There are no tracks yet!</h1>
      )}
    </section>
  );
}
