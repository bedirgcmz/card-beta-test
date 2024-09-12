"use client";
import { useState } from "react";
import Card from "../Card";
import CardForm from "../CardForm";

const MainContent = () => {
  const [cardsData, setCardsData] = useState<
    { id: number; projectName: string; projectLink: string; technologies: string }[]
  >([
    { id: 1, projectName: "Project1", projectLink: "www.google.com", technologies: "Css, Html" },
    { id: 2, projectName: "Project2", projectLink: "www.google.com", technologies: "React, JS" },
    { id: 3, projectName: "Project3", projectLink: "www.google.com", technologies: "React, JS" },
    {
      id: 4,
      projectName: "Project4",
      projectLink: "www.google.com",
      technologies: "Node, Express",
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const removeCard = (id: number) => {
    setCardsData(cardsData.filter((card) => card.id !== id));
  };

  const onAddCard = (newCard: {
    projectName: string;
    projectLink: string;
    technologies: string;
  }) => {
    const newCardWithId = { ...newCard, id: Date.now() };
    setCardsData([...cardsData, newCardWithId]);
    setIsFormOpen(false);
  };

  const onCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="flex flex-col gap-6 flex-wrap items-center">
      <div className="flex gap-8 flex-wrap justify-center items-center">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            projectName={card.projectName}
            projectLink={card.projectLink}
            technologies={card.technologies}
            removeCard={removeCard}
          />
        ))}
      </div>
      <button
        data-testid="add-card-button"
        className="px-4 py-2 border-2 border-gray-800 bg-[#219ebc] rounded-lg"
        onClick={() => setIsFormOpen(true)}
      >
        Add Cards
      </button>
      {isFormOpen && <CardForm onAddCard={onAddCard} onClose={onCloseForm} />}
    </div>
  );
};

export default MainContent;
