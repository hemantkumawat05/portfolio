import React from 'react';
import ProjectLayout from './ProjectLayout';
import { projectsData } from './projectsData';

const EcommerceAdmin = () => {
  return <ProjectLayout {...projectsData['mern-ecommerce-admin']} />;
};

export default EcommerceAdmin;
