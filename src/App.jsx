import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";

import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";

import * as trackService from "./services/trackService.js";
// import TrackList from "./components/TrackList/TrackList.jsx";
import TrackForm from "./components/TrackForm/TrackForm.jsx";
import TrackDetails from "./components/TrackDetails/TrackDetails.jsx";
import NowPlaying from "./components/NowPlaying/NowPlaying.jsx";

function App() {
  const [tracks, setTracks] = useState([]);
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null); // show show route
  const [playingTrack, setPlayingTrack] = useState(null); // for now playing

  useEffect(() => {
    async function fetchTracks() {
      const data = await trackService.index();

      // console.log(data, "<-- fetched data");
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

  // create function for delete
  // pass as props int details
  // details gives track id
  // lifts it to App
  // app passed it to service
  async function deleteTrack(selectedTrackId) {
    try {
      const response = await trackService.deleteTrack(selectedTrackId);

      if (response.err) {
        throw new Error(response.err);
      }

      const filteredTracks = tracks.filter(
        (track) => track._id !== selectedTrackId
      );
      setTracks(filteredTracks);
      setSelectedTrack(null);
    } catch (err) {
      console.log(err);
    }
  }

  function handleFormVisible(trackId) {
    setFormIsVisible(!formIsVisible);
    if (!trackId) {
      setSelectedTrack(null);
    }
  }

  async function handleUpdateTrack(selectedTrackId, formData) {
    const updatedTrack = await trackService.updateTrack(
      selectedTrackId,
      formData
    );

    if (updatedTrack.err) {
      throw new Error(updatedTrack.err);
    }

    setSelectedTrack(updatedTrack);

    const updatedTracksArray = tracks.filter(
      (track) => track._id !== updatedTrack._id
    );
    setTracks([...updatedTracksArray, updatedTrack]); // this puts the updated track at the bottom of the lsit

    setFormIsVisible(false);
  }

  const buttonText = formIsVisible ? "Close Form" : "New Track";

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <TrackList
        tracks={tracks}
        handleFormVisible={handleFormVisible}
        buttonText={buttonText}
        setSelectedTrack={setSelectedTrack}
        setPlayingTrack={setPlayingTrack}
      /> */}

      {playingTrack ? <NowPlaying playingTrack={playingTrack} /> : null}

      {formIsVisible && (
        <TrackForm
          createTrack={createTrack}
          handleFormVisible={handleFormVisible}
          selectedTrack={selectedTrack}
          handleUpdateTrack={handleUpdateTrack}
        />
      )}
      <TrackDetails
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
        deleteTrack={deleteTrack}
        handleFormVisible={handleFormVisible}
      />
    </>
  );
}

export default App;
