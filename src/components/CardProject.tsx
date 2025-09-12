import React from "react";
import { useNavigate } from "react-router-dom";
import { CardProjectProps } from "type/type";

const CardProject: React.FC<CardProjectProps> = ({
  title,
  description,
  image,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <div className="group w-full max-w-xs h-[420px] flex flex-col border border-yellow-300 rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-yellow-500/30 transition-shadow duration-300">
      {/* Image with zoom effect */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-4 bg-gradient-to-r from-gray-900 to-blue-700">
        <div className="flex flex-col gap-3">
          <h5 className="text-lg md:text-xl font-semibold text-yellow-400">
            {title}
          </h5>

          <p className="text-sm md:text-base text-gray-200 line-clamp-4">
            {description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate(`/project/?id=${id}`)}
          className="mt-4 inline-block rounded-lg bg-yellow-500 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-yellow-400 hover:shadow-lg transition duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardProject;
