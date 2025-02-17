import "./NowPlaying.css";

export default function NowPlaying(props) {
  return (
    <section className="now-playing">
      <dt>Playing: {props.playingTrack.title}</dt>
      <dd></dd>
      <dt>By: {props.playingTrack.artist}</dt>
      <dd></dd>
    </section>
  );
}
