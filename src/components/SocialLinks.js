import { socialLinks } from './data';
import SocialLink from './SocialLink';

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="social-links">
      {socialLinks.map((link) => {
        return (
          <SocialLink key={link.id} {...link} itemClass={itemClass} />
          //   <li key={id}>
          //     <a
          //       href={href}
          //       target="_blank"
          //       className={itemClass}
          //       rel="noreferrer"
          //     >
          //       <i className={icon}></i>
          //     </a>
          //   </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
