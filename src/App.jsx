import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import MusicControls from "./components/MusicControls";
import LetterAnimation from "./components/LetterAnimation";
import FloatingHearts from "./components/FloatingHearts";

function App() {
  const [showLetter, setShowLetter] = useState(true);

  useEffect(() => {
    // Show letter animation on first load
    const hasSeenLetter = sessionStorage.getItem("hasSeenLetter");
    if (hasSeenLetter) {
      setShowLetter(false);
    }
  }, []);

  const handleCloseLetter = () => {
    setShowLetter(false);
    sessionStorage.setItem("hasSeenLetter", "true");
  };

  return (
    <>
      <FloatingHearts />
      {showLetter && <LetterAnimation onClose={handleCloseLetter} />}
      <MusicControls />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="/page-three" element={<PageThree />} />
      </Routes>
    </>
  );
}

export default App;

