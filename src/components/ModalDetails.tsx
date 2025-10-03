import React, { useState } from "react";
import { Project } from "type/type";

interface ProjectDetailsProps {
  project: Project;
  deleteQuery: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  deleteQuery,
  project,
}) => {
  const { title, description, image, period, stack } = project;
  const [showImagePreview, setShowImagePreview] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 dark:bg-black/70 backdrop-blur-sm"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl mx-4 sm:mx-6 bg-gradient-to-r from-gray-100 to-[#344F1F]/90 dark:bg-gradient-to-r dark:from-gray-900 dark:to-[#344F1F] rounded-2xl shadow-xl border border-gray-200 dark:border-yellow-400 overflow-hidden text-gray-900 dark:text-white">
        <div className="p-6 flex flex-col lg:flex-row gap-6">
          {/* Project Image */}
          <div
            className="flex-shrink-0 w-full lg:w-2/3 h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setShowImagePreview(true)}
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Project Info */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            <h3
              id="modal-title"
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-yellow-400 uppercase"
            >
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed">
              {description}
            </p>
            <div className="space-y-2">
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-200">
                <span className="text-gray-900 dark:text-yellow-400 font-semibold">
                  Period:
                </span>{" "}
                {period}
              </p>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-200">
                <span className="text-gray-900 dark:text-yellow-400 font-semibold">
                  Stack:
                </span>{" "}
                {stack}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button
            type="button"
            className="rounded-md bg-yellow-500 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-yellow-400 transition"
            onClick={deleteQuery}
          >
            Close
          </button>
        </div>
      </div>

      {/* Image Preview Overlay */}
      {showImagePreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setShowImagePreview(false)}
        >
          <img
            src={image}
            alt={title}
            className="max-w-[95%] max-h-[90%] object-contain rounded-lg shadow-lg"
          />
          <button
            className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-yellow-400"
            onClick={() => setShowImagePreview(false)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
