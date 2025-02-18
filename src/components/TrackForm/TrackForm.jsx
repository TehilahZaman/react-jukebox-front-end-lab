import "./TrackForm.css";
import { useState } from "react";

const initialState = { title: "", artist: "" };

export default function TrackForm(props) {
  const [formData, setFormData] = useState(
    props.selectedTrack ? props.selectedTrack : initialState
  );
  // for update route:
  // if the edit button is pushed, it sends the track info to the app toggle/handle function
  // so the track id exists and selected track is not null
  // in list when the track is selected, selected track updates to tha track
  // and is pased to Form
  // if the selected track exists
  // then the form data is pre filled out with the trakc info

  function handleSubmit(e) {
    e.preventDefault();
    if (props.selectedTrack) {
      props.handleUpdateTrack(props.selectedTrack._id, formData);
    } else {
      props.createTrack(formData);
    }
    props.handleFormVisible(props.selectedTrack);
    setFormData(initialState);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
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
        {props.selectedTrack ? "Edit Track" : "Add New Track"}{" "}
      </button>
    </form>
  );
}
