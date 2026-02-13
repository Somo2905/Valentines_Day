import { useState } from "react";

export default function LetterAnimation({ onClose }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpening(true);
  };

  return (
    <div className="letter-container">
      <div 
        className={`letter-envelope ${isOpening ? 'opening' : ''}`}
        onClick={!isOpening ? handleEnvelopeClick : undefined}
      >
        <div className="letter-flap"></div>
        <div className="letter-content">
          <p>
            Pyaallluuuu Babbbbbyyyy😘😘😘
            Click anywhere outside to continue to your Valentine's surprise! ❤️
          </p>
        </div>
      </div>
      {isOpening && (
        <button className="close-letter" onClick={onClose}>
          Continue →
        </button>
      )}
    </div>
  );
}

