export interface ProjectCategory {
  name: string;
  label: string;
}

export const projectCategories: Array<ProjectCategory> = [
  {
    name: 'all',
    label: 'portfolio.projectCategories.all'
  },
  {
    name: 'web',
    label: 'portfolio.projectCategories.web'
  },
  {
    name: 'ios',
    label: 'portfolio.projectCategories.ios'
  },
  {
    name: 'uiux',
    label: 'portfolio.projectCategories.uiux'
  }
];
