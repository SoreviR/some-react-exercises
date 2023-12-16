import React from "react";
import { people } from "../../people";
import Rating from "../rating/Rating";

const UserCard = () => {
  return (
    <div className="flex gap-4 flex-wrap p-4 justify-center">
      {people.map((user) => {
        return (
          <div key={user.key} className="flex p-2 justify-center">
            <div className="w-[300px] h-[230px] p-4 flex flex-col gap-4 rounded-lg shadow bg-[#435EB5] text-white font-semibold">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <Rating stars={user.rating} />
              <p>{user.gender}</p>
              <p className="font-semibold text-lg">{user.job}</p>
              <p className="font-semibold text-lg">{user.city}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
