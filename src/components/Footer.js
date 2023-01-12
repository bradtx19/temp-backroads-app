//import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import PageLinks from './PageLinks.js';
import SocialLinks from './SocialLinks.js';
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <SocialLinks parentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
