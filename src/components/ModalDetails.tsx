
import onBoarding from "assets/image/portfolio/onboarding.jpg"

import { Project } from "type/type";

interface ProjectDetailsProps {
  project : Project
  deleteQuery: () => void
}
const ProjectDetails : React.FC<ProjectDetailsProps> = ({deleteQuery, project}) => {
  const { title, description, image, period, stack} = project

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform w-[800px] overflow-hidden border-yellow-200 rounded-lg shadow-[0_4px_5px_3px_rgba(234,179,8,0.459)] bg-gradient-to-r from-gray-800 to-blue-500 text-left transition-all">
            <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex items-start gap-4">
                <div className="flex h-72 w-[75%] items-center justify-center rounded-md bg-gray-400 overflow-hidden">
                  <img  src={image}/>
                </div>
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-3xl font-semibold leading-6 text-yellow-500 uppercase"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-md text-gray-200">
                     {description}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-md text-gray-200">
                      <span className="text-yellow-500 font-semibold capitalize">period : </span>{period}
                    </p>
                    <p className="text-md text-gray-200">
                      <span className="text-yellow-500 font-semibold capitalize">stack : </span>{stack}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-4 py-3 flex justify-center sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 sm:ml-3 sm:w-auto"
                onClick={deleteQuery}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
