import React from "react";

const WorksMain = ({ card }) => {
  return (
    <div className="p-5 grid grid-cols-1 w-4/5 mx-auto gap-6">
      {card.map((item, index) => (
        <div
          key={index}
          className="flex md:flex-row flex-col bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full md:w-1/3  h-48 object-cover"
          />
          <div className="p-4 w-2/3">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-400 flex gap-2 items-center">
              <span className="text-gray-100 px-2  rounded-full text-xs  bg-black ">{item.year} </span>
              {" "}
              {item.desc}
            </p>
            <p className="text-gray-700 text-sm mb-4">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksMain;
