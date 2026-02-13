import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import NavButton from "../components/NavButton";

export default function Landing() {
  // Import photos 1-12
  const photos = Array.from({ length: 12 }, (_, i) =>
    `/src/assets/her-photos/photo${i + 1}.jpeg`
  );

  const [selectedIndex, setSelectedIndex] = useState(null);
  const isLightboxOpen = selectedIndex !== null;
  const gridItemsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToPrevious = () => {
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  };
  const goToNext = () => {
    setSelectedIndex((selectedIndex + 1) % photos.length);
  };

  // GSAP Animations
  useEffect(() => {
    // Animate title with floating effect
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.to(titleRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate subtitle
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" }
    );

    // Staggered animation for photo grid items
    gsap.fromTo(
      gridItemsRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "back.out",
        delay: 0.5,
      }
    );
  }, []);

  // Hover effects for grid items
  const handleGridItemHover = (e, isHovering) => {
    gsap.to(e.currentTarget, {
      scale: isHovering ? 1.08 : 1,
      y: isHovering ? -5 : 0,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: isHovering
        ? "0 20px 40px rgba(0, 0, 0, 0.4)"
        : "0 8px 20px rgba(0, 0, 0, 0.3)",
    });

    // Rotate on hover
    gsap.to(e.currentTarget, {
      rotation: isHovering ? 2 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="page landing">
      <h1 className="title" ref={titleRef}>
        Happy Valentine's Day ❤️
      </h1>
      <p className="subtitle" ref={subtitleRef}>
        This is just for you gadhuu babbyyy 😍😍😍😍😍…
      </p>

      {/* Photo Grid */}
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            key={index}
            ref={(el) => (gridItemsRef.current[index] = el)}
            className="photo-grid-item"
            onClick={() => openLightbox(index)}
            onMouseEnter={(e) => handleGridItemHover(e, true)}
            onMouseLeave={(e) => handleGridItemHover(e, false)}
            style={{ cursor: "pointer" }}
          >
            <img src={photo} alt={`Memory ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>

            {/* Previous Button */}
            <button className="lightbox-nav lightbox-prev" onClick={goToPrevious}>
              ❮
            </button>

            {/* Image */}
            <img
              src={photos[selectedIndex]}
              alt={`Memory ${selectedIndex + 1}`}
              className="lightbox-image"
            />

            {/* Next Button */}
            <button className="lightbox-nav lightbox-next" onClick={goToNext}>
              ❯
            </button>

            {/* Image Counter */}
            <div className="lightbox-counter">
              {selectedIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}

      <div className="button-group">
        <NavButton text="Our Pyaalluu Story Babbyyyy 💕" to="/page-one" />
        <NavButton text="Why I Love My Sweeetttuuu Cuttuuuuu Babbbyyyyy 💖" to="/page-two" />
        <NavButton text="A Little Surprise for melliii hotttuuu sweeetttuuu Babbbyyyy 💌" to="/page-three" />
      </div>
    </div>
  );
}

