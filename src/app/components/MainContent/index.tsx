"use client";
import { useState } from "react";
import MyButton from "../Button";
import MyCard from "../Card";
import CardForm from "../CardForm";

const MainContent = () => {
  const initialCards = [
    {
      id: 1,
      project: "Project1",
      image: "https://picsum.photos/200/300?random=1",
      link: "https://www.widenisland.com",
      tech: "CSS, HTML, WordPress, JavaScript",
    },
    {
      id: 2,
      project: "Project2",
      image: "https://picsum.photos/200/300?random=2",
      link: "https://www.coca-cola.com",
      tech: "React, Redux, Node.js",
    },
    {
      id: 3,
      project: "Project3",
      image: "https://picsum.photos/200/300?random=3",
      link: "https://www.bbc.com",
      tech: "Vue, Vuex, TypeScript",
    },
    {
      id: 4,
      project: "Project4",
      image: "https://picsum.photos/200/300?random=4",
      link: "https://www.google.com",
      tech: "Angular, RxJS, NgRx",
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const [isFormShown, setIsFormShown] = useState(false);
  const [imageCounter, setImageCounter] = useState(5);

  const removeCard = (id: number) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const addCard = (card: {
    project: string;
    link: string;
    tech: string;
    image: string;
  }) => {
    const newCard = {
      ...card,
      id: cards.length + 1,
      image: `https://picsum.photos/200/300?random=${imageCounter}`,
    };
    setCards((prevCards) => [...prevCards, newCard]);
    setImageCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 p-7">
        {cards.map((card) => (
          <MyCard
            key={card.id}
            {...card}
            onRemove={() => removeCard(card.id)}
          />
        ))}
      </div>
      <MyButton onClick={() => setIsFormShown(true)} />{" "}
      {/* Show form on button click */}
      {isFormShown && (
        <CardForm onAddCard={addCard} onClose={() => setIsFormShown(false)} />
      )}
    </div>
  );
};

export default MainContent;
