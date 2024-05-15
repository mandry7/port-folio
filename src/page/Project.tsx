import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CardProject from "components/CardProject";
import ModalDetails from "components/ModalDetails";

import { ProjectList, getprojectDetails } from "data/data";
import { Project } from "type/type";

import "assets/scss/project.scss";

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
      <div className="project-container">
        <div className="mb-8">
          <h1 className="project-title">My Projects</h1>
          <p className="project-paragraph">Here are all my projects</p>
        </div>
        <div className="project-list">
          {ProjectList.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/project/?id=${project.id}`)}
              className="project-item"
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
