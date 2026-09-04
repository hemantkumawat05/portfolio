import React from 'react';
import ProjectLayout from './ProjectLayout';
import { projectsData } from './projectsData';

const AiBlog = () => {
  return <ProjectLayout {...projectsData['ai-blog']} />;
};

export default AiBlog;
