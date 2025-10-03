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
    <div className="group w-full max-w-xs h-[420px] flex flex-col border border-[#F4991A] rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-gray-100 to-[#344F1F]/90 dark:bg-gray-800 hover:shadow-[rgba(244,153,26,0.3)] transition-shadow duration-300">
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
      <div className="flex flex-1 flex-col justify-between p-4 bg-gradient-to-r from-gray-100 to-[#344F1F]/90 dark:bg-gradient-to-r dark:from-gray-900 dark:to-[#344F1F]">
        <div className="flex flex-col gap-3">
          <h5 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-[#F4991A]">
            {title}
          </h5>

          <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 line-clamp-4">
            {description}
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate(`/project/?id=${id}`)}
          className="mt-4 inline-block rounded-lg bg-[#F4991A] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-[#F4991A]/90 hover:shadow-lg transition duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardProject;
