import React, { useCallback, useEffect } from "react";

interface Rating {
  rating: number;
  id: number;
}

const RatingStar: React.FC<Rating> = ({ rating, id }) => {
  const note = useCallback((stars: number) => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars), []);

  const showStars = useCallback(
    (stars: number, ids: number) => {
      var div = document.createElement("div");

      div.append(`${note(stars)}`);
      div.classList.add(`text-xl`);
      div.classList.add(`text-yellow-500`);

      document.getElementById(`stars-${ids.toString()}`)!.append(div);
    },
    [rating, id]
  );

  useEffect(() => {
    showStars(rating, id);
  }, [rating, id]);

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
