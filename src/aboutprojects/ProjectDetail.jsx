import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectLayout from './ProjectLayout';
import { projectsData } from './projectsData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData[slug];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return <ProjectLayout {...project} />;
};

export default ProjectDetail;
