import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchAnimalById } from "../services/api";
import { Animal } from "../types/Animal";

const AnimalDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const selectedAnimal = (location.state as { animal?: Animal } | null)?.animal;

  const [animal, setAnimal] = useState<Animal | null>(selectedAnimal ?? null);
  const [isLoading, setIsLoading] = useState(!selectedAnimal);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    if (selectedAnimal && selectedAnimal.id === Number(id)) {
      setAnimal(selectedAnimal);
      setIsLoading(false);
      return;
    }

    const getAnimal = async () => {
      setIsLoading(true);
      const data = await fetchAnimalById(id);
      setAnimal(data ?? null);
      setIsLoading(false);
    };

    void getAnimal();
  }, [id, selectedAnimal]);

  if (isLoading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (!animal) {
    return <h2 className="text-center mt-5">Animal not found.</h2>;
  }

  return (
    <div className="container py-4 py-md-5 details-wrap">
      <div className="card shadow p-4 p-md-5 details-card">
        <img
          src={animal.image}
          alt={animal.name}
          className="details-image"
        />

        <h2 className="details-name">{animal.name}</h2>

        <h4 className="details-category">Category: {animal.category}</h4>

        <p className="details-description">{animal.description}</p>

        <Link to="/animals" className="details-back">Back to Gallery</Link>
      </div>
    </div>
  );
};

export default AnimalDetails;