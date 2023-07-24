import React, { useState, useEffect, useLayoutEffect } from "react";
import { useSpring, animated } from "react-spring";

// Załóżmy, że to są ścieżki do plików z obrazkami instrumentów
import instrumentImage1 from "./nuta.jpg";
import instrumentImage2 from "./nuta3.jpg";
import instrumentImage4 from "./nuta4.jpg";

const Background = () => {
  const instruments = [
    instrumentImage1,
    instrumentImage2,
    instrumentImage4,
    instrumentImage1,
    instrumentImage2,
    instrumentImage4,
    instrumentImage2,
    instrumentImage1,
  ];

  const [spacing, setSpacing] = useState(
    (window.innerWidth - instruments.length * 100) / (instruments.length + 1) // Odległość między nutkami
  );

  useLayoutEffect(() => {
    // Funkcja, która aktualizuje odstępy między nutkami przy zmianie rozmiaru okna
    const updateSpacing = () => {
      setSpacing(
        (window.innerWidth - instruments.length * 100) / (instruments.length + 1)
      );
    };

    // Nasłuchuj zmian rozmiaru okna i aktualizuj odstępy
    window.addEventListener("resize", updateSpacing);

    // Usuń nasłuchiwanie po zniszczeniu komponentu
    return () => {
      window.removeEventListener("resize", updateSpacing);
    };
  }, [instruments.length]);

  const springStyles = useSpring({
    from: { translateY: 0, opacity: 1 },
    to: async (next) => {
      while (true) {
        await next({ translateY: 5, opacity: 0.7 });
        await next({ translateY: 0, opacity: 1 });
      }
    },
    config: { duration: 1000 },
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "200px",
        overflow: "hidden",
      }}
    >
      {instruments.map((instrument, index) => (
        <animated.img
          key={index}
          src={instrument}
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            top: "50%",
            left: `${spacing * (index + 1) + index * 100 + 10}px`,
            transform: springStyles.translateY.interpolate(
              (y) => `translate(-50%, calc(-50% + ${y}px))`
            ),
            opacity: springStyles.opacity,
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
