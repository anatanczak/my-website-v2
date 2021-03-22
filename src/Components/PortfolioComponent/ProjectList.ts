import Project from './ProjectInterface';

/* SmartLife Images */
import SmartLifeThumbnail from '../../assets/projects/smartlife/smartlife_thumbnail.webp';

/* Meslistes Images */
import MeslistesThumbnail from '../../assets/projects/meslistes/meslistes_thumbnail.webp';

/* New Portfolio Images */
import NewPortfolioThumbnail from '../../assets/projects/newPortfolio/new_portfolio_thumbnail.webp';

/* Old Portfolio Images */
import OldPortfolioThumbnail from '../../assets/projects/oldPortfolio/old_portfolio_thumbnail.webp';

/* Blue Snail Images */
import BlueSnailThumbnail from '../../assets/projects/blueSnail/bluesnail_thumbnail.webp';

/* Success Builder Images */
import SuccessBuilderThumbnail from '../../assets/projects/successBuilder/success_builder_thumbnail.webp';

export enum BackgroundColorCode {
  'Lilly' = '#c7a9c3',
  'Grey' = '#f3f2f2',
  'PaleGreen' = '#a3d0cb',
  'DarkBlue' = '#122744'
}

const projectList: Array<Project> = [
  {
    id: 1,
    name: 'Smart Life',
    tags: ['web', 'uiux'],
    thumbnail: SmartLifeThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.Lilly,
    shortDescription: 'portfolio.project.smartLife.shortDescription',
    githubLink: 'https://github.com/anaviktoriv/SmartLife'
  },
  {
    id: 2,
    name: 'New Portfolio',
    tags: ['web', 'uiux'],
    thumbnail: NewPortfolioThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.PaleGreen,
    shortDescription: 'portfolio.project.newPortfolio.shortDescription',
    githubLink: 'https://github.com/anaviktoriv/my-website-v2'
  },
  {
    id: 3,
    name: 'Blue Snail',
    tags: ['ios'],
    thumbnail: BlueSnailThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.Grey,
    shortDescription: 'portfolio.project.blueSnail.shortDescription',
    githubLink: 'https://github.com/anaviktoriv/BlueSnail'
  },
  {
    id: 4,
    name: 'Meslistes',
    tags: ['ios'],
    thumbnail: MeslistesThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.Grey,
    shortDescription: 'portfolio.project.meslistes.shortDescription',
    githubLink: 'https://github.com/anaviktoriv/meslistes'
  },

  {
    id: 5,
    name: 'Old Portfolio',
    tags: ['web', 'uiux'],
    thumbnail: OldPortfolioThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.DarkBlue,
    shortDescription: 'portfolio.project.oldPortfolio.shortDescription',
    githubLink: 'https://github.com/anaviktoriv/myWebsite'
  },

  {
    id: 6,
    name: 'Success Builder',
    tags: ['ios'],
    thumbnail: SuccessBuilderThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.Lilly,
    shortDescription: 'portfolio.project.successBuilder.shortDescription',
    githubLink: 'https://github.com/anaviktoriv/Success-Builder'
  }
];

export default projectList;
