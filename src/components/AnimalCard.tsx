import { Link } from "react-router-dom";
import { Animal } from "../types/Animal";

interface Props {
  animal: Animal;
}

const AnimalCard = ({ animal }: Props) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow">
        <img
          src={animal.image}
          className="card-img-top"
          alt={animal.name}
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5>{animal.name}</h5>
          <p>{animal.category}</p>

          <Link
            to={`/animal/${animal.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;