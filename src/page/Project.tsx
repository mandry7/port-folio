import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CardProject from "components/CardProject";
import ModalDetails from "components/ModalDetails";

import { ProjectList, getprojectDetails } from "data/data";
import { Project } from "type/type";

const ProjectLists = () => {
  const [project, setProject] = useState<Project>();
  const search = useLocation().search;
  const navigate = useNavigate();

  useEffect(() => {
    const id = new URLSearchParams(search).get("id") as string;
    const project = getprojectDetails(parseInt(id));
    setProject(project);
  }, [search]);

  return (
    <div className="container relative z-10 m-auto overflow-y-scroll h-dvh scrollbar-thin no-scrollbar scrollbar-thumb-blue-500 scrollbar-track-yellow-100">
      <div className="mb-8">
        <h1 className="uppercase text-yellow-500 text-4xl font-bold text-center mb-2">
          My Projects
        </h1>
        <p className="text-lg text-gray-300 font-medium text-center">
          Here are all my projects
        </p>
      </div>
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 gap-8 items-center justify-center">
        {ProjectList.map((project) => (
          <div
            key={project.id}
            onClick={() => navigate(`/project/?id=${project.id}`)}
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
          >
            <CardProject {...project} />
          </div>
        ))}
      </div>
      {project && (
        <ModalDetails
          project={project}
          deleteQuery={() => navigate(`/project`)}
        />
      )}
    </div>
  );
};

export default ProjectLists;
