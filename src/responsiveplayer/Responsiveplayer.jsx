import "./responsiveplayer.scss";
import ReactPlayer from "react-player";

export default function Responsiveplayer() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=JnHtn6JspCk"
        width="105%"
        height="100%"
        controls={true}
      />
      <div className="text">
        <h2>Galvo Machines</h2>
      </div>
    </div>
  );
}
