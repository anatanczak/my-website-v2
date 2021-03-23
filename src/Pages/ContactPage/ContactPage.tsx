import React, { FunctionComponent } from 'react';
import ContactComponent from '../../Components/ContactComponent/ContactComponent';
import PortfolioComponent from '../../Components/PortfolioComponent/PortfolioComponent';

import './styles.scss';

type ContactPageProps = {};

const ContactPage: FunctionComponent<ContactPageProps> = () => {
  return (
    <div className="ContactPageContainer">
      <ContactComponent />
    </div>
  );
};

export default ContactPage;
