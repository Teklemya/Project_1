import MenuCard from './MenuCard';
import shiro from '../../assets/shiro.jpeg';
import doro from '../../assets/doro.jpeg';
import tibs from '../../assets/tibs.jpeg';
import kitfo from '../../assets/kitfo.jpeg';
import firfir from '../../assets/firfir.jpeg';
import misir from '../../assets/misir.jpeg';
import gomen from '../../assets/gomen.jpeg';
import atayef from '../../assets/atayef.jpeg';
import kik_alicha from '../../assets/kik_alicha.jpeg';
import chechebsa from '../../assets/chechebsa.jpeg';
import './Card.css';

const Card = () => {
  return (
    <div className="card-container">
      <MenuCard 
        image={shiro}
        heading="Shiro"
        subheading="Chickpea stew"
        link="https://holycowvegan.net/ethiopian-shiro-wot-ground-chickpea-stew/"
      />
      <MenuCard
        image={doro}
        heading="Doro Wat"
        subheading="Ethiopian flatbread with spicy chicken stew"
        link="https://www.daringgourmet.com/doro-wat-spicy-ethiopian-chicken-stew/"
      />
      <MenuCard
        image={tibs}
        heading="Siga Tibs"
        subheading="Sautéed beef cubes with vegetables and spices"
        link="https://honest-food.net/ethiopian-tibs-recipe/"
      />
      <MenuCard
        image={kitfo}
        heading="Kitfo"
        subheading="Minced raw beef seasoned with spices and clarified butter"
        link="https://www.foodnetwork.com/recipes/kitfo-12239304"
      />
       <MenuCard
        image={firfir}
        heading="Firfir"
        subheading="Shredded injera mixed with spiced butter and berbere"
        link="https://www.daringgourmet.com/doro-wat-spicy-ethiopian-chicken-stew/"
      />
      <MenuCard
        image={misir}
        heading="Misir Wat"
        link="https://www.daringgourmet.com/misir-wat-ethiopian-spiced-red-lentils/"
        subheading="Red lentil stew seasoned with berbere"
      />
      <MenuCard
        image={gomen}
        heading="Gomen"
        subheading="Collard greens cooked with onions and garlic"
        link="https://www.daringgourmet.com/gomen-ethiopian-collard-greens/"
      />
        <MenuCard
        image={atayef}
        heading="Atayef"
        subheading="Filled pancake with sweet fillings"
        link="https://www.simplyleb.com/recipe/atayef/"
      />
      <MenuCard
        image={kik_alicha}
        heading="Kik Alicha"
        subheading="Mild split pea stew served with injera"
        link="https://monkeyandmekitchenadventures.com/ethiopian-yellow-split-pea-stew-kik-alicha/"
      />
      <MenuCard
        image={chechebsa}
        heading="Chechebsa"
        subheading="Shredded flatbread with spiced butter"
        link="https://tarasmulticulturaltable.com/chechebsa-ethiopian-torn-flatbread/"
      />
    </div>
  );
};

export default Card;
