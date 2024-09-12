import React from "react";

interface CardProps {
  id: number;
  projectName: string;
  projectLink: string;
  technologies: string;
  removeCard: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, projectName, projectLink, technologies, removeCard }) => {
  return (
    <div className="relative p-3 w-[280px] h-[200px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <button
        onClick={() => removeCard(id)}
        className="absolute top-2 right-2 w-6 h-6 leading-3 bg-[#f28482] text-white rounded-full p-1 hover:bg-red-600"
      >
        x
      </button>
      <h2 className="text-xl font-bold text-gray-800 pb-3">{projectName}</h2>
      <div className="mb-3">
        <a href={projectLink}>
          <img
            className="object-cover w-[150px] h-[100px]"
            src="https://picsum.photos/id/1/200/300"
            alt="Project Image"
          />
        </a>
      </div>
      <p className="text-gray-600">{technologies}</p>
    </div>
  );
};

export default Card;
