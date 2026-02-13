import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingHearts() {
  const heartsRef = useRef([]);

  useEffect(() => {
    // Animate floating hearts with GSAP
    heartsRef.current.forEach((heart, index) => {
      if (!heart) return;

      // Reset initial state
      gsap.set(heart, { y: 0, x: 0, opacity: 0.6 });

      // Vertical floating animation - move UP (negative value)
      gsap.to(heart, {
        y: -window.innerHeight - 200,
        opacity: 0,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        delay: Math.random() * 5,
        ease: "none",
      });

      // Horizontal wiggle motion
      gsap.to(heart, {
        x: 80 * Math.sin(index),
        duration: 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div className="floating-hearts">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (heartsRef.current[i] = el)}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "0",
            position: "absolute",
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
