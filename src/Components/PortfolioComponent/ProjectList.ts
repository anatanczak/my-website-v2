import ProjectCouple from './ProjectCoupleInterface';

/* New Portfolio Images */
import NewPortfolioThumbnail from '../../assets/projects/newPortfolio/new_portfolio_thumbnail.webp';

/* Meslistes Images */
import MeslistesThumbnail from '../../assets/projects/meslistes/meslistes_thumbnail.webp';

export enum BackgroundColorCode {
  'Lilly' = '#c7a9c3',
  'Grey' = '#f3f2f2',
  'PaleGreen' = '#a3d0cb',
  'DarkBlue' = '#122744'
}

const projectList: Array<ProjectCouple> = [
  {
    projectA: {
      id: 1,
      name: 'Smart Life',
      thumbnail: '',
      thumbnailBackgroundColor: BackgroundColorCode.Lilly,
      shortDescription: 'lorem imsum'
    },
    projectB: {
      id: 2,
      name: 'Meslistes',
      thumbnail: MeslistesThumbnail,
      thumbnailBackgroundColor: BackgroundColorCode.Grey,
      shortDescription: 'lorem imsum dolorem'
    }
  },
  {
    projectA: {
      id: 3,
      name: 'New Portfolio',
      thumbnail: NewPortfolioThumbnail,
      thumbnailBackgroundColor: BackgroundColorCode.PaleGreen,
      shortDescription: 'lorem imsum'
    },
    projectB: {
      id: 4,
      name: 'Old Portfolio',
      thumbnail: '',
      thumbnailBackgroundColor: BackgroundColorCode.DarkBlue,
      shortDescription: 'lorem imsum dolorem'
    }
  },
  {
    projectA: {
      id: 5,
      name: 'Blue Snail',
      thumbnail: '',
      thumbnailBackgroundColor: BackgroundColorCode.Grey,
      shortDescription: 'lorem imsum'
    },
    projectB: {
      id: 6,
      name: 'Success Builder',
      thumbnail: '',
      thumbnailBackgroundColor: BackgroundColorCode.Lilly,
      shortDescription: 'lorem imsum dolorem'
    }
  }
];

export default projectList;
