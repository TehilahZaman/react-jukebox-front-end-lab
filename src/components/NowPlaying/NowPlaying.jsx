import "./NowPlaying.css";
export default function NowPlaying(props) {
  return (
    <section className="now-playing">
      <h3>Now Playing: </h3>
      <dt>Title: {props.playingTrack.title}</dt>
      <dd></dd>
      <dt>Artist: {props.playingTrack.artist}</dt>
      <dd></dd>
    </section>
  );
}
