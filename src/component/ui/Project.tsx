import React from 'react';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

interface ProjectProps {
  project: ProjectData;
}


export const Project: React.FC<ProjectProps> = ({ project }) => (
  <div>
    <h3 className="text-xl font-normal text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-3 cursor-pointer">
      {project.title}
    </h3>
    <p className="text-gray-400 text-base leading-relaxed mb-4">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <span key={tech} className="px-2 py-1 text-gray-400 text-sm">{tech}</span>
      ))}
    </div>
  </div>
);