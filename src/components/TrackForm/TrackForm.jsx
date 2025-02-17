import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const initialState = { title: "", artist: "" };

export default function TrackForm(props) {
  console.log(props.tracks)
  const navigate = useNavigate();
  const { trackId } = useParams();

  const editingTrack = props.tracks.find((track) => track._id === trackId);
  // find the track whose _id matches the params trackId

  const [formData, setFormData] = useState(
    editingTrack ? editingTrack : initialState
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (editingTrack) {
      props.handleUpdateTrack(editingTrack._id, formData);
    } else {
      props.createTrack(formData);
    }
    setFormData(initialState);
    navigate("/");
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Track Title: </label>
      <input
        type="text"
        name="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="artist">Track Artist:</label>
      <input
        type="text"
        name="artist"
        id="artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <button type="submit">
        {" "}
        {editingTrack ? "Edit Track" : "Add New Track"}{" "}
      </button>
    </form>
  );
}
