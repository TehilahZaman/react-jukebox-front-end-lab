import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";

import * as trackService from "./services/trackService.js";
import TrackForm from "./components/TrackForm/TrackForm.jsx";

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchTracks() {
      const data = await trackService.index();
      setTracks(data);
    }
    fetchTracks();
  }, []);

  async function createTrack(formData) {
    try {
      const newTrack = await trackService.create(formData);
      setTracks([...tracks, newTrack]);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteTrack(deleteTrackId) {
    try {
      const response = await trackService.deleteTrack(deleteTrackId);

      if (response.err) {
        throw new Error(response.err);
      }

      const filteredTracks = tracks.filter(
        (track) => track._id !== deleteTrackId
      );
      setTracks(filteredTracks);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateTrack(editingTrackId, formData) {
    const updatedTrack = await trackService.updateTrack(
      editingTrackId,
      formData
    );

    if (updatedTrack.err) {
      throw new Error(updatedTrack.err);
    }

    const updatedTracksArray = tracks.filter(
      (track) => track._id !== updatedTrack._id
    );
    setTracks([...updatedTracksArray, updatedTrack]); // this puts the updated track at the bottom of the lsit
  }

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home tracks={tracks} deleteTrack={deleteTrack} />}
        />
        <Route
          path="/add-track"
          element={
            <TrackForm
              tracks={tracks}
              createTrack={createTrack}
              handleUpdateTrack={handleUpdateTrack}
            />
          }
        />
        <Route
          path="/edit-track/:trackId"
          element={
            <TrackForm tracks={tracks} handleUpdateTrack={handleUpdateTrack} />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
