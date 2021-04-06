import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectFeature } from '../../PortfolioComponent/ProjectInterface';
import Feature from './Feature/Feature';

import './styles.scss';

type FeaturesProps = {
  features: Array<ProjectFeature>;
};

const Features: FunctionComponent<FeaturesProps> = ({ features }) => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="FeaturesContainer">
      <h2>{t('portfolio.fullProjectDetail.features')}</h2>
      {features.map((feature, index) => {
        return <Feature key={'projectFeature' + index} feature={feature} />;
      })}
    </div>
  );
};

export default Features;
