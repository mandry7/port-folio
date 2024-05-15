import Rating from "components/RatingStar";

import { Skill } from "type/type";

import "assets/scss/cardSkill.scss";

const CardSkill: React.FC<Skill> = ({ name, icon, rating, id }) => {
  return (
    <div className="card-skill-container ">
      <h5 className="card-name">{name}</h5>

      <p className="card-icon">{icon()}</p>
     <div className="card-rating ">
        <Rating rating={rating} id={id} />
      </div> 
    </div>
  );
};

export default CardSkill;
