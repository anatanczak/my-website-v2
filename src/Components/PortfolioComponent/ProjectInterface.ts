export default interface Project {
  id: number;
  name: string;
  tags: Array<string>;
  thumbnail: string;
  thumbnailBackgroundColor: string;
  shortDescription: string;
  githubLink: string;
  quote?: string;
  //TODO: make hero image required
  heroImage?: string;
  longDescription: string;
  links?: Array<ProjectLink>;
  features?: Array<ProjectFeature>;
  //TODO: make imageArray required
  images?: Array<string>;
}

export interface ProjectLink {
  label: string;
  url: string;
  description: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  visual?: string;
}
