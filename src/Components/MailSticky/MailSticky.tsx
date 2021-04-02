import React, { FunctionComponent, useRef, useEffect } from 'react';

import MailIcon from '../../assets/icons/mail_icon.svg';

import './styles.scss';

type MailStickyProps = {};

const MailSticky: FunctionComponent<MailStickyProps> = ({}) => {
  return (
    <div className="MailStickyContainer">
      <a
        className="MailStickyContainer-Link"
        href="mailto:anatkachen@gmail.com"
      >
        <img
          className="MailStickyContainer-Link-Image"
          src={MailIcon}
          alt="mail icon"
        />
      </a>
    </div>
  );
};

export default MailSticky;
