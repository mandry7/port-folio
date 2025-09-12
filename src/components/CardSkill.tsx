import Rating from "components/RatingStar";
import { Skill } from "type/type";

const CardSkill: React.FC<Skill> = ({ name, icon, rating, id }) => {
  return (
    <div
      className="flex flex-col justify-center items-center max-w-56 p-4 
                 border border-gray-200 rounded-lg  
                 bg-gradient-to-r from-gray-800 to-blue-500
                 shadow-[0_4px_5px_3px_rgba(119,130,80,0.459)]
                 transition ease-in-out delay-100 
                 hover:scale-100 hover:-translate-y-2 duration-300 
                 hover:cursor-pointer"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase text-white">
        {name}
      </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {icon()}
      </p>

      <div
        className="inline-flex items-center px-3 py-2 
                   text-sm font-medium text-center 
                   text-white bg-gray-700 rounded-lg 
                   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        <Rating rating={rating} id={id} />
      </div>
    </div>
  );
};

export default CardSkill;
