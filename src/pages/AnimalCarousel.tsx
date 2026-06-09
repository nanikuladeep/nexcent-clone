import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAnimals } from "../services/api";
import { Animal } from "../types/Animal";

const AnimalCarousel = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetchAnimals().then((data) => setAnimals(data));
  }, []);

  useEffect(() => {
    if (animals.length === 0) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % animals.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animals]);

  const goTo = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrent((index + animals.length) % animals.length);
  };

  if (animals.length === 0) {
    return <h2 className="text-center mt-5">Loading animals…</h2>;
  }

  return (
    <div className="carousel-page-wrap">
      <div className="carousel-page-header">
        <h1 className="carousel-page-title">Animal Showcase</h1>
        <p className="carousel-page-sub">Browse every animal — one slide at a time</p>
      </div>

      <div className="zoo-carousel">
        {/* Slides */}
        <div className="zoo-carousel-track">
          {animals.map((animal, i) => (
            <div
              key={animal.id}
              className={`zoo-slide${i === current ? " zoo-slide--active" : ""}`}
              aria-hidden={i !== current}
            >
              <div className="zoo-slide-inner">
                <div className="zoo-slide-img-wrap">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="zoo-slide-img"
                  />
                </div>
                <div className="zoo-slide-info">
                  <span className="zoo-slide-category">{animal.category}</span>
                  <h2 className="zoo-slide-name">{animal.name}</h2>
                  <p className="zoo-slide-desc">{animal.description}</p>
                  <Link
                    to={`/animal/${animal.id}`}
                    className="zoo-slide-cta"
                    state={{ animal }}
                  >
                    Full Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="zoo-carousel-btn zoo-carousel-btn--prev"
          onClick={() => goTo(current - 1)}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          className="zoo-carousel-btn zoo-carousel-btn--next"
          onClick={() => goTo(current + 1)}
          aria-label="Next"
        >
          ›
        </button>

        {/* Dots */}
        <div className="zoo-carousel-dots">
          {animals.map((_, i) => (
            <button
              key={i}
              className={`zoo-dot${i === current ? " zoo-dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="zoo-pagination">
        <Link to="/animals" className="zoo-page-btn">
          1
        </Link>
        <button className="zoo-page-btn zoo-page-btn--active" disabled>
          2
        </button>
      </div>
    </div>
  );
};

export default AnimalCarousel;
