import PropTypes from 'prop-types';
import './MenuCard.css';

const MenuCard = ({ image, heading, subheading }) => {
  return (
    <div className="menu-card">
      <img src={image} alt={heading} className="menu-card__image" />
      <div className="menu-card__content">
        <h2 className="menu-card__heading">{heading}</h2>
        <p className="menu-card__subheading">{subheading}</p>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};
export default MenuCard;
