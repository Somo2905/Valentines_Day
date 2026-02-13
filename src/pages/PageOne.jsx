import NavButton from "../components/NavButton";

export default function PageOne() {
  return (
    <div className="page page-one">
      <h2>Our Pyallluuuu Story Babbbbyyyy 😍😍😍😍😍 💕</h2>

      <div className="story-container" style={{ backgroundImage: 'url(/her-photos/photo14.jpeg)' }}>
        <div className="story-overlay">
          <p className="story-text">
            From the first message to every late-night call bbbbaaabbbyyyy…
            <br /><br />
            Every moment I have spent with you has been special babbyyy 😘😘😘😘😘😘. The way we connected,
            the laughter we've shared, and the dreams we've built together
            make every day brighter.
            <br /><br />
            Distance means nothing when someone means everything.
            Zameen se aasman tak I am yours babbbbbyyyy 🥰🥰🥰🥰😘😘😘😍😍😍💓💓💓💓💓💞💞💞❤️❤️❤️❣️❣️❣️💖💖💖💝💝💝💘💘💘💘
          </p>
        </div>
      </div>

      <div className="button-group" style={{ marginTop: '40px' }}>
        <NavButton text="← Back Home" to="/" />
        <NavButton text="Next →" to="/page-two" />
      </div>
    </div>
  );
}

