import React, { useEffect } from "react";

interface Rating {
  rating: number;
  id: number;
}

const RatingStar: React.FC<Rating> = ({ rating, id }) => {
  const note = (stars: number) => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);

  const showStars = (stars: number, ids: number) => {
    var div = document.createElement("div");

    div.append(`${note(stars)}`);
    div.classList.add(`text-xl`);
    div.classList.add(`text-yellow-500`);

    //div.style.color = "yellow";
    document.getElementById(`stars-${ids.toString()}`)!.append(div);
  };

  useEffect(() => {
    showStars(rating, id);
  }, [id]);

  return (
    <div className="flex items-center">
      <div id={`stars-${id.toString()}`}></div>
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
        {rating}
      </p>
    </div>
  );
};

export default RatingStar;
