import Rating from "components/RatingStar";
import { Skill } from "type/type";

const CardSkill: React.FC<Skill> = ({ name, icon, rating, id }) => {
  return (
    <div
      className="flex flex-col justify-center items-center max-w-56 p-4 
                 border border-gray-200 dark:border-gray-700 rounded-lg  
                 bg-gradient-to-r from-gray-100 to-[#344F1F]/90 dark:bg-gradient-to-r dark:from-gray-800 dark:to-[#344F1F]
                 shadow-[0_4px_5px_3px_rgba(119,130,80,0.459)]
                 transition ease-in-out delay-100 
                 hover:scale-100 hover:-translate-y-2 duration-300 
                 hover:cursor-pointer"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase text-gray-900 dark:text-white">
        {name}
      </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {icon()}
      </p>

      <div
        className="inline-flex items-center px-3 py-2 
                   text-sm font-medium text-center 
                   text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg 
                   hover:bg-gray-200 dark:hover:bg-[#344F1F] focus:ring-4 focus:outline-none focus:ring-[rgba(52,79,31,0.3)]"
      >
        <Rating rating={rating} id={id} />
      </div>
    </div>
  );
};

export default CardSkill;
