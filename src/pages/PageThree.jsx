import NavButton from "../components/NavButton";

export default function PageThree() {
  return (
    <div className="page page-three" style={{ backgroundImage: 'url(/src/assets/her-photos/photo15.jpeg)' }}>
      <div className="page-overlay"></div>

      <div className="content-wrapper">
        <h2>A Little Surprise For You Mellliii Babbbbyyyyy💌</h2>
        <p className="surprise-text">
          No matter the miles between us, my heart is always with you baby.
          <br /><br />
          Every sunrise reminds me of your warmth when I woke up with you,
          <br />
          Every sunset makes me think of your beauty and vibrance,
          <br />
          And every star in the night sky represents a reason I love you 😘😘😘😘🥰🥰🥰🥰.
        </p>

        <div className="heart-container">
          <div className="heart">❤️</div>
        </div>

        <h3 className="question">Will you be my Valentine Baby? ❤️</h3>

        <div className="button-group" style={{ marginTop: '40px' }}>
          <NavButton text="← Back" to="/page-two" />
          <NavButton text="Home ❤️" to="/" />
        </div>
      </div>
    </div>
  );
}

