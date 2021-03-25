import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import PortfolioComponent from '../../Components/PortfolioComponent/PortfolioComponent';

import './styles.scss';

type PrivacyPolicyPageProps = {};

const PrivacyPolicyPage: FunctionComponent<PrivacyPolicyPageProps> = () => {
  const { t }: { t: any } = useTranslation();

  let text = t('privacyPolicy.text').split('\n');
  return (
    <>
      <div className="PrivacyPolicyPageContainer">
        <h1 className="PrivacyPolicyPageContainer-Title">
          {t('privacyPolicy.title')}
        </h1>
        <div className="PrivacyPolicyPageContainer-Text">
          {text.map((paragraph: string, index: number) => {
            return (
              <p
                className="PrivacyPolicyPageContainer-Text-Paragraph"
                key={'privacyPolicyParagraph' + index}
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
