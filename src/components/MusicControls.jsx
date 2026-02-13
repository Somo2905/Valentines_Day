import { useEffect, useRef } from "react";
import musicFile from "../assets/Tum_Se_Hi_Jab_We_Met.mp3";

export default function MusicControls() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Try to play on component mount
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked, wait for user interaction
        });
      }
    };

    // Try immediate play
    playAudio();

    // Unmute on first user interaction
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("click", handleUserInteraction, { once: true });
    window.addEventListener("touchstart", handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  return (
    <audio ref={audioRef} autoPlay muted loop>
      <source src={musicFile} type="audio/mpeg" />
    </audio>
  );
}

