import { useState } from "react";
import { videoThumbNail } from "../../constants/images";
import { FaPlay } from "react-icons/fa6";

const VideoCard = () => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [playing, setPlaying] = useState(false);
  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - card.left) / card.width) * 100;
    const y = ((e.clientY - card.top) / card.height) * 100;
    setPosition({ x: `${x}%`, y: `${y}%` });
  };
  const handleMouseLeave = () => {
    setPosition({ x: "50%", y: "50%" });
  };
  const handlePlayClick = () => {
    setPlaying(true);
  };
  return (
    <div
      className="relative w-auto h-auto md:w-[560px] md:h-[315px] rounded-xl overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {playing ? (
        <iframe
          className="w-full h-full rounded-2xl border-1 border-[var(--primary)] w-auto xl:w-lg"
          src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
          title="About Us Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <img
            src={videoThumbNail}
            alt="video thumbnail"
            className="border-1 border-[var(--primary)] rounded-2xl overflow-hidden w-screen xl:w-lg"
          />
          <div
            className="absolute transition-all duration-200 ease-in-out"
            style={{
              left: position.x,
              top: position.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            <button onClick={handlePlayClick}>
              {<FaPlay className="w-12 h-12 md:w-16 md:h-16" />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default VideoCard;
