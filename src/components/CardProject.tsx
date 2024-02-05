import React from "react";
import { useNavigate } from "react-router-dom";

import { CardProjectProps } from "type/type";

import "assets/scss/cardProject.scss";

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  image,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div className=" card-container">
      <div className=" h-48 flex justify-center">
        <img className="rounded-t-lg h-full" src={image} alt={image} loading="lazy"  />
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="h-40">
          <p className="mb-4 text-base text-neutral-200">{description}</p>
        </div>

        <button
          type="button"
          className="card-button"
          onClick={() => navigate(`/project/?id=${id}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CardProject;
