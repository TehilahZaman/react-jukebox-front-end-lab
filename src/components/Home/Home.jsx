import { useState } from "react";
import TrackList from "../TrackList/TrackList.jsx";
import NowPlaying from "../NowPlaying/NowPlaying.jsx";

export default function Home(props) {
  const [playingTrack, setPlayingTrack] = useState(null); // for now playing
  return (
    <section className="Home">
      <TrackList
        tracks={props.tracks}
        deleteTrack={props.deleteTrack}
        setPlayingTrack={setPlayingTrack}
      />
      {playingTrack ? <NowPlaying playingTrack={playingTrack} /> : null}
    </section>
  );
}
