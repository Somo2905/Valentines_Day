import { useState } from "react";
import NavButton from "../components/NavButton";

export default function PageTwo() {
  const [flippedCard, setFlippedCard] = useState(null);

  const loveReasons = [
    "Tumhallii Pyaaaliii siii smile that lights up my whole world babbyyy 😍😍😍😍😍😍",
    "Tum mujhe bohot daat ti hooo 😭😭😭😭😭 Bt mere acche ke liye bolti ho babbbyyyy 🥰🥰🥰🥰",
    "The way you make distance feel small regularly mujhse baat kar ke babbbyyy 😘😘😘😘",
    "Tumhalaaa cutuuuuu randiii rona babbbyyyy 😗😗😗😗",
    "How you understand me like no one else 😍😍😍😍💘💘💘💘💘",
    "The way you believe in us ❤️❤️❤️❤️❤️",
    "Every little thing that makes you, YOU. Bohot sweetu cutuuu ho tum babbyy the way your are babbbyyy 💘💘💘💘💖💖💖💖💞💞💞💓💓💓💓"
  ];

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <div className="page page-two" style={{ backgroundImage: 'url(/src/assets/her-photos/photo13.jpeg)' }}>
      <div className="page-overlay"></div>

      <h2>Why I Love My Cutuuuuu Babbbbyyyyy 💖</h2>

      <div className="flip-cards-container">
        {loveReasons.map((reason, index) => (
          <div
            key={index}
            className={`flip-card ${flippedCard === index ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <span className="card-number">{index + 1}</span>
                <p>Tap to reveal ✨</p>
              </div>
              <div className="flip-card-back">
                <p>{reason}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-group" style={{ marginTop: '40px' }}>
        <NavButton text="← Back" to="/page-one" />
        <NavButton text="Next →" to="/page-three" />
      </div>
    </div>
  );
}

