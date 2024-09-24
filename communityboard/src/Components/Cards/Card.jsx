import MenuCard from './MenuCard';
import shiro from '../../assets/shiro.jpeg';
import doro from '../../assets/doro.jpeg';
import tibs from '../../assets/tibs.jpeg';
import kitfo from '../../assets/kitfo.jpeg';
import firfir from '../../assets/firfir.jpeg';
import misir from '../../assets/misir.jpeg';
import gomen from '../../assets/gomen.jpeg';
import './Card.css';

const Card = () => {
  return (
    <div className="card-container">
      <MenuCard 
        image={shiro}
        heading="Shiro"
        subheading="Chickpea stew"
      />
      <MenuCard
        image={doro}
        heading="Doro Wat"
        subheading="Ethiopian flatbread with spicy chicken stew"
      />
      <MenuCard
        image={tibs}
        heading="Siga Tibs"
        subheading="Sautéed beef cubes with vegetables and spices"
      />
      <MenuCard
        image={kitfo}
        heading="Kitfo"
        subheading="Minced raw beef seasoned with spices and clarified butter"
      />
       <MenuCard
        image={firfir}
        heading="Firfir"
        subheading="Shredded injera mixed with spiced butter and berbere"
      />
      <MenuCard
        image={misir}
        heading="Misir Wat"
        subheading="Red lentil stew seasoned with berbere"
      />
      <MenuCard
        image={gomen}
        heading="Gomen"
        subheading="Collard greens cooked with onions and garlic"
      />
    </div>
  );
};

export default Card;
