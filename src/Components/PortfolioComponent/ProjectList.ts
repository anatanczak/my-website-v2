import Project from './ProjectInterface';

/* SmartLife Images */
import SmartLifeThumbnail from '../../assets/projects/smartlife/smartlife_thumbnail.webp';

/* Meslistes Images */
import MeslistesThumbnail from '../../assets/projects/meslistes/meslistes_thumbnail.webp';
import MeslistesLightModeIphones from '../../assets/projects/meslistes/meslistes_hero_image.webp';
import MeslistesDarkModeIphones from '../../assets/projects/meslistes/meslistes_dark_mode_iphones.webp';
import MeslistesVerticalPhonesLightMode from '../../assets/projects/meslistes/meslistes_vertical_iphones_light_mode.webp';
import MeslistesVerticalPhonesDarkMode from '../../assets/projects/meslistes/meslistes_vertical_iphones_dark_mode.webp';

/* New Portfolio Images */
import NewPortfolioThumbnail from '../../assets/projects/newPortfolio/new_portfolio_thumbnail.webp';
import NewPortfolioHeroImage from '../../assets/projects/newPortfolio/new_portfolio_hero_img.webp';

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
    githubLink: 'https://github.com/anatanczak/SmartLife',
    hasDetailedinfo: false,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet',
    technologies: ['PHP', 'JS', 'HTML', 'CSS', 'Symfony', 'Twig', 'Bootstrap'],
    longDescription: 'sjhkjshgjkshgkjhsgk'
  },
  {
    id: 2,
    name: 'New Portfolio',
    tags: ['web', 'uiux'],
    thumbnail: NewPortfolioThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.PaleGreen,
    shortDescription: 'portfolio.project.newPortfolio.shortDescription',
    githubLink: 'https://github.com/anatanczak/my-website-v2',
    hasDetailedinfo: true,
    technologies: ['React JS', 'SASS', 'TypeScript'],
    quote: 'portfolio.project.newPortfolio.quote',
    images: [NewPortfolioHeroImage],
    longDescription: 'portfolio.project.newPortfolio.longDescription',
    links: [
      {
        label: 'portfolio.project.newPortfolio.link1',
        url:
          'https://xd.adobe.com/view/3a93144a-c480-4316-91d9-a07e0e60b374-6fc0/grid'
      },
      {
        label: 'portfolio.project.newPortfolio.link2',
        url: 'https://github.com/anatanczak/my-website-v2'
      }
    ],
    features: [
      {
        title: 'portfolio.project.newPortfolio.feature1.title',
        description: 'portfolio.project.newPortfolio.feature1.description'
      },
      {
        title: 'portfolio.project.newPortfolio.feature2.title',
        description: 'portfolio.project.newPortfolio.feature2.description'
      },
      {
        title: 'portfolio.project.newPortfolio.feature3.title',
        description: 'portfolio.project.newPortfolio.feature3.description'
      },
      {
        title: 'portfolio.project.newPortfolio.feature4.title',
        description: 'portfolio.project.newPortfolio.feature4.description'
      },
      {
        title: 'portfolio.project.newPortfolio.feature5.title',
        description: 'portfolio.project.newPortfolio.feature5.description'
      },
      {
        title: 'portfolio.project.newPortfolio.feature6.title',
        description: 'portfolio.project.newPortfolio.feature6.description'
      }
    ]
  },
  {
    id: 3,
    name: 'Blue Snail',
    tags: ['ios'],
    thumbnail: BlueSnailThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.Grey,
    shortDescription: 'portfolio.project.blueSnail.shortDescription',
    githubLink: 'https://github.com/anatanczak/BlueSnail',
    hasDetailedinfo: false,
    quote: 'lorem ipsum dolorem',
    technologies: ['Swift', 'SwiftUI'],
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, urna vitae fringilla accumsan, massa nisl tincidunt massa, a tristique tellus purus nec erat. Fusce elit eros, viverra at feugiat in, dignissim eget ex. Aenean malesuada est nec sem congue, vitae semper ante facilisis. Etiam maximus tempus enim, quis ullamcorper enim ultrices efficitur. Aenean luctus dui quis urna placerat, non varius erat elementum. Nullam risus sem, condimentum quis elit sit amet, tempor fringilla diam. Mauris orci libero, convallis quis massa vitae, cursus rhoncus nulla. Ut sollicitudin sed lectus at posuere. Integer sed sapien at purus vehicula placerat. Sed lorem ex, posuere at ultrices et, ornare eget arcu. Nam eros ligula, dignissim non quam vitae, dignissim pretium ipsum. Proin convallis velit urna. Duis volutpat magna at ullamcorper tincidunt. Curabitur lacinia ultrices massa. Aliquam erat volutpat. Aliquam laoreet at nisi a rhoncus. Curabitur gravida tortor turpis, et molestie orci accumsan eu. Vestibulum fermentum dui dui. Donec pulvinar vel ligula ac tincidunt. Nunc magna massa, scelerisque vel commodo eu, convallis nec dolor. Praesent pellentesque semper fringilla. Suspendisse sed posuere nisl. Vestibulum egestas lorem id tincidunt gravida. Donec quis vulputate magna. Aliquam congue odio eu sagittis vulputate. Mauris enim magna, finibus vel justo non, faucibus molestie ipsum. Curabitur faucibus magna imperdiet pretium pharetra. Nullam eget volutpat mauris. Nulla commodo nisl in semper gravida. Fusce cursus quam sit amet massa maximus convallis. Sed vestibulum est velit, at aliquet risus luctus ac. Praesent vehicula dolor semper gravida dignissim. Donec varius eros at orci pulvinar finibus quis non elit. Aliquam ultricies odio vitae tempor dignissim. Phasellus id sem et magna vestibulum tempus vel ac velit. Vivamus sit amet ultricies elit. Curabitur leo ante, venenatis eu sodales non, posuere ac ex.'
  },
  {
    id: 4,
    name: 'Meslistes',
    tags: ['ios'],
    thumbnail: MeslistesThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.Grey,
    shortDescription: 'portfolio.project.meslistes.shortDescription',
    githubLink: 'https://github.com/anatanczak/meslistes',
    hasDetailedinfo: true,
    quote: 'portfolio.project.meslistes.quote',
    images: [
      MeslistesVerticalPhonesLightMode,
      MeslistesDarkModeIphones,
      MeslistesVerticalPhonesDarkMode,
      MeslistesLightModeIphones
    ],
    technologies: ['Swift'],
    longDescription: 'portfolio.project.meslistes.longDescription',
    links: [
      {
        label: 'portfolio.project.meslistes.link1',
        url:
          'https://apps.apple.com/us/app/meslistes-a-checklist-app/id1458475140'
      },
      {
        label: 'portfolio.project.meslistes.link2',
        url: 'https://github.com/anatanczak/meslistes'
      }
    ]
  },

  {
    id: 5,
    name: 'Old Portfolio',
    tags: ['web', 'uiux'],
    thumbnail: OldPortfolioThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.DarkBlue,
    shortDescription: 'portfolio.project.oldPortfolio.shortDescription',
    githubLink: 'https://github.com/anatanczak/myWebsite',
    hasDetailedinfo: false,
    quote: 'lorem ipsum dolorem',
    technologies: ['PHP', 'HTML', 'CSS', 'JS'],
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, urna vitae fringilla accumsan, massa nisl tincidunt massa, a tristique tellus purus nec erat. /n Fusce elit eros, viverra at feugiat in, dignissim eget ex. Aenean malesuada est nec sem congue, vitae semper ante facilisis. Etiam maximus tempus enim, quis ullamcorper enim ultrices efficitur. Aenean luctus dui quis urna placerat, non varius erat elementum. Nullam risus sem, condimentum quis elit sit amet, tempor fringilla diam. Mauris orci libero, convallis quis massa vitae, cursus rhoncus nulla. Ut sollicitudin sed lectus at posuere. Integer sed sapien at purus vehicula placerat. Sed lorem ex, posuere at ultrices et, ornare eget arcu. Nam eros ligula, dignissim non quam vitae, dignissim pretium ipsum. Proin convallis velit urna. Duis volutpat magna at ullamcorper tincidunt. Curabitur lacinia ultrices massa. Aliquam erat volutpat. Aliquam laoreet at nisi a rhoncus. Curabitur gravida tortor turpis, et molestie orci accumsan eu. Vestibulum fermentum dui dui. Donec pulvinar vel ligula ac tincidunt. Nunc magna massa, scelerisque vel commodo eu, convallis nec dolor. Praesent pellentesque semper fringilla. Suspendisse sed posuere nisl. Vestibulum egestas lorem id tincidunt gravida. Donec quis vulputate magna. Aliquam congue odio eu sagittis vulputate. Mauris enim magna, finibus vel justo non, faucibus molestie ipsum. Curabitur faucibus magna imperdiet pretium pharetra. Nullam eget volutpat mauris. Nulla commodo nisl in semper gravida. Fusce cursus quam sit amet massa maximus convallis. Sed vestibulum est velit, at aliquet risus luctus ac. Praesent vehicula dolor semper gravida dignissim. Donec varius eros at orci pulvinar finibus quis non elit. Aliquam ultricies odio vitae tempor dignissim. Phasellus id sem et magna vestibulum tempus vel ac velit. Vivamus sit amet ultricies elit. Curabitur leo ante, venenatis eu sodales non, posuere ac ex.'
  },

  {
    id: 6,
    name: 'Success Builder',
    tags: ['ios'],
    thumbnail: SuccessBuilderThumbnail,
    thumbnailBackgroundColor: BackgroundColorCode.Lilly,
    shortDescription: 'portfolio.project.successBuilder.shortDescription',
    githubLink: 'https://github.com/anatanczak/Success-Builder',
    hasDetailedinfo: false,
    quote: 'lorem ipsum dolorem',
    technologies: ['Swift'],
    longDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, urna vitae fringilla accumsan, massa nisl tincidunt massa, a tristique tellus purus nec erat. Fusce elit eros, viverra at feugiat in, dignissim eget ex. Aenean malesuada est nec sem congue, vitae semper ante facilisis. Etiam maximus tempus enim, quis ullamcorper enim ultrices efficitur. Aenean luctus dui quis urna placerat, non varius erat elementum. Nullam risus sem, condimentum quis elit sit amet, tempor fringilla diam. Mauris orci libero, convallis quis massa vitae, cursus rhoncus nulla. Ut sollicitudin sed lectus at posuere. Integer sed sapien at purus vehicula placerat. Sed lorem ex, posuere at ultrices et, ornare eget arcu. Nam eros ligula, dignissim non quam vitae, dignissim pretium ipsum. Proin convallis velit urna. Duis volutpat magna at ullamcorper tincidunt. Curabitur lacinia ultrices massa. Aliquam erat volutpat. Aliquam laoreet at nisi a rhoncus. Curabitur gravida tortor turpis, et molestie orci accumsan eu. Vestibulum fermentum dui dui. Donec pulvinar vel ligula ac tincidunt. Nunc magna massa, scelerisque vel commodo eu, convallis nec dolor. Praesent pellentesque semper fringilla. Suspendisse sed posuere nisl. Vestibulum egestas lorem id tincidunt gravida. Donec quis vulputate magna. Aliquam congue odio eu sagittis vulputate. Mauris enim magna, finibus vel justo non, faucibus molestie ipsum. Curabitur faucibus magna imperdiet pretium pharetra. Nullam eget volutpat mauris. Nulla commodo nisl in semper gravida. Fusce cursus quam sit amet massa maximus convallis. Sed vestibulum est velit, at aliquet risus luctus ac. Praesent vehicula dolor semper gravida dignissim. Donec varius eros at orci pulvinar finibus quis non elit. Aliquam ultricies odio vitae tempor dignissim. Phasellus id sem et magna vestibulum tempus vel ac velit. Vivamus sit amet ultricies elit. Curabitur leo ante, venenatis eu sodales non, posuere ac ex.'
  }
];

export default projectList;
