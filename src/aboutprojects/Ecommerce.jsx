import React from 'react';
import ProjectLayout from './ProjectLayout';
import { projectsData } from './projectsData';

const Ecommerce = () => {
  return <ProjectLayout {...projectsData['mern-ecommerce']} />;
};

export default Ecommerce;
