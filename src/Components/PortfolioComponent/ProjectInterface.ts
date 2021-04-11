export default interface Project {
  id: number;
  name: string;
  tags: Array<string>;
  thumbnail: string;
  thumbnailBackgroundColor: string;
  shortDescription: string;
  githubLink: string;
  hasDetailedinfo: boolean;
  technologies?: Array<string>;
  quote?: string;
  images?: Array<string>;
  longDescription: string;
  links?: Array<ProjectLink>;
  features?: Array<ProjectFeature>;

  videos?: Array<string>;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  visual?: string;
}
