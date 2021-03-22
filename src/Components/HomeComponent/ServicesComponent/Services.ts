import Service from './ServiceComponent/ServiceInterface';
import webDevIcon from '../../../assets/icons/web_dev_icon.svg';
import iosWebicon from '../../../assets/icons/ios_dev_icon.svg';
import uiDesignIcon from '../../../assets/icons/ui_design_icon.svg';

const services: Array<Service> = [
  {
    image: webDevIcon,
    altText: 'home.services.webDevelopment.altText',
    title: 'home.services.webDevelopment.title',
    text: 'home.services.webDevelopment.text',
    tag: 'web'
  },
  {
    image: iosWebicon,
    altText: 'home.services.iosDevelopment.altText',
    title: 'home.services.iosDevelopment.title',
    text: 'home.services.iosDevelopment.text',
    tag: 'ios'
  },
  {
    image: uiDesignIcon,
    altText: 'home.services.uiDesign.altText',
    title: 'home.services.uiDesign.title',
    text: 'home.services.uiDesign.text',
    tag: 'uiux'
  }
];

export default services;
