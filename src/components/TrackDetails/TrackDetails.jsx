import "./TrackDetails.css";
export default function TrackDetails({
  selectedTrack,
  setSelectedTrack,
  deleteTrack,
  handleFormVisible,
}) {
  return (
    <section>
      {!selectedTrack ? (
        <h2>No Details Available</h2>
      ) : (
        <div className="details">
          <dt>Track Details:</dt>
          <dd></dd>
          <dt>Track Title: "{selectedTrack.title}"</dt>
          <dd></dd>
          <dt>Artist: {selectedTrack.artist}</dt>
          <dd></dd>
          <div className="buttons">
            <button onClick={() => deleteTrack(selectedTrack._id)}>
              Delete
            </button>
            <button onClick={() => handleFormVisible(selectedTrack)}>
              Edit Track
            </button>
            <button onClick={() => setSelectedTrack(null)}>
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
