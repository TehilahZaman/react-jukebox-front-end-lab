export default function NowPlaying(props) {
  return (
    <section>
      <dt>Playing: {props.playingTrack.title}</dt>
      <dd></dd>
      <dt>By: {props.playingTrack.artist}</dt>
      <dd></dd>
    </section>
  );
}
