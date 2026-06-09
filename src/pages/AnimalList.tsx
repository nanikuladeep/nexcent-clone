import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimalCard from "../components/AnimalCard";
import { fetchAnimals } from "../services/api";
import { Animal } from "../types/Animal";

const AnimalList = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    fetchAnimals().then((data) => setAnimals(data));
  }, []);

  return (
    <div className="container py-4 py-md-5">
      <section className="hero-panel mb-4 mb-md-5">
        <p className="hero-kicker mb-2">Interactive Animal Gallery</p>
        <h1 className="hero-title mb-2">Explore beautiful animals from around the world</h1>
        <p className="hero-subtitle mb-0">Tap any card to view that animal's complete details.</p>
      </section>

      <div className="row g-4">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

      {/* Pagination */}
      <div className="zoo-pagination">
        <button className="zoo-page-btn zoo-page-btn--active" disabled>
          1
        </button>
        <Link to="/animals/carousel" className="zoo-page-btn">
          2
        </Link>
      </div>
    </div>
  );
};

export default AnimalList;