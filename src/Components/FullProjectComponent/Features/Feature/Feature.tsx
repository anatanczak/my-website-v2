import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import { ProjectFeature } from '../../../PortfolioComponent/ProjectInterface';

import './styles.scss';

type FeatureProps = {
  feature: ProjectFeature;
};

const Feature: FunctionComponent<FeatureProps> = ({ feature }) => {
  const { t }: { t: any } = useTranslation();

  return (
    <div className="FeatureContainer">
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
      {feature.visual && <button>Have a look</button>}
    </div>
  );
};

export default Feature;
