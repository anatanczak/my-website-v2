import Project from './ProjectInterface';

export default interface ProjectCouple {
  projectA: Project;
  projectB?: Project;
}
