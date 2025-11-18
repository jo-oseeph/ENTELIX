import React from "react";
import { projects } from "../about/projectsData";

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-950 mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const hasLiveLink = Boolean(
              project.link && project.link.startsWith("http")
            );

            const handlePlaceholderClick = (event) => {
              event.preventDefault();
              alert("Coming soon");
            };

            return (
              <article
                key={project.id}
                className="group relative rounded-2xl border bg-white shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1"
              >
                {/* Media placeholder */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-900 to-red-500 flex items-center justify-center text-white uppercase tracking-[0.2em] text-xs text-center px-4">
                    {project.title}
                  </div>

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-blue-950/0 opacity-0 transition-all duration-300 group-hover:bg-blue-950/40 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {hasLiveLink ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-red-600"
                      >
                        View Project
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={handlePlaceholderClick}
                        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-blue-900 shadow-md transition-colors duration-300 hover:bg-white"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-red-500 text-xs font-semibold uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-semibold text-blue-950 mb-2 transition-colors duration-300 group-hover:text-red-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;