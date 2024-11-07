import { useQuery } from "@tanstack/react-query";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { getProjects } from "@/requests";
import { clsx } from "clsx";

const twoColClassNames = "grid grid-cols-6 gap-8";
const firstColClassNames = "col-start-1 col-end-3";
const secondColClassNames = "col-start-3 col-end-7";

function ProjectsList() {
  const { data } = useQuery({
    queryKey: ["projects-list"],
    queryFn: getProjects,
  });

  console.log(data);

  const projects = data?.projects;

  if (!projects || projects?.length === 0) return <>No projects found...</>;

  return (
    <ul className="flex flex-col space-y-12">
      {projects.map((project) => (
        <li className="card" key={project.id}>
          <article className="flex flex-wrap gap-8">
            <header className={twoColClassNames}>
              <h3 className={clsx(firstColClassNames, "text-4xl")}>
                {project.subtitle}
              </h3>
              <p className={secondColClassNames}>{project.shortDescription}</p>
            </header>
            <figure>
              <img src={project?.image?.url} />
            </figure>
            <div className={twoColClassNames}>
              <div className={firstColClassNames}>
                <h2 className="font-bold">{project.title}</h2>
                {project.externalLink && (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    className="btn mt-2"
                  >
                    Visit project
                  </a>
                )}
              </div>
              <div className={secondColClassNames}>
                <DocumentRenderer document={project?.description?.document} />
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default ProjectsList;
