import ProjectCouple from './ProjectCoupleInterface';

/* SmartLife Images */
import SmartLifeThumbnail from '../../assets/projects/smartlife/smartlife_thumbnail.webp';

/* Meslistes Images */
import MeslistesThumbnail from '../../assets/projects/meslistes/meslistes_thumbnail.webp';

/* New Portfolio Images */
import NewPortfolioThumbnail from '../../assets/projects/newPortfolio/new_portfolio_thumbnail.webp';

/* Old Portfolio Images */
import OldPortfolioThumbnail from '../../assets/projects/oldPortfolio/old_portfolio_thumbnail.webp';

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
      thumbnail: SmartLifeThumbnail,
      thumbnailBackgroundColor: BackgroundColorCode.Lilly,
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque ultrices posuere.'
    },
    projectB: {
      id: 2,
      name: 'Meslistes',
      thumbnail: MeslistesThumbnail,
      thumbnailBackgroundColor: BackgroundColorCode.Grey,
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque ultrices posuere.'
    }
  },
  {
    projectA: {
      id: 3,
      name: 'New Portfolio',
      thumbnail: NewPortfolioThumbnail,
      thumbnailBackgroundColor: BackgroundColorCode.PaleGreen,
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque ultrices posuere.'
    },
    projectB: {
      id: 4,
      name: 'Old Portfolio',
      thumbnail: OldPortfolioThumbnail,
      thumbnailBackgroundColor: BackgroundColorCode.DarkBlue,
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque ultrices posuere.'
    }
  },
  {
    projectA: {
      id: 5,
      name: 'Blue Snail',
      thumbnail: '',
      thumbnailBackgroundColor: BackgroundColorCode.Grey,
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque ultrices posuere.'
    },
    projectB: {
      id: 6,
      name: 'Success Builder',
      thumbnail: '',
      thumbnailBackgroundColor: BackgroundColorCode.Lilly,
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque ultrices posuere.'
    }
  }
];

export default projectList;
