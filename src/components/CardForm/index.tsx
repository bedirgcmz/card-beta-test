import React, { useState } from "react";

interface CardFormProps {
  onAddCard: (cardData: { projectName: string; projectLink: string; technologies: string }) => void;
  onClose: () => void;
}

const CardForm: React.FC<CardFormProps> = ({ onAddCard, onClose }) => {
  const [projectName, setProjectName] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [technologies, setTechnologies] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCard({ projectName, projectLink, technologies });
    setProjectName("");
    setProjectLink("");
    setTechnologies("");
  };

  return (
    <div className="absolute w-screen h-screen flex items-center justify-center bg-[#00030466] top-0 right-0">
      <form
        data-testid="card-form"
        onSubmit={handleSubmit}
        className="flex flex-col justify-between items-start w-[300px] h-[250px] bg-[#0003be] rounded text-[#fff] p-2"
      >
        <h2 className="text-center w-[100%] mb-2">Add New Card</h2>
        <input
          className="border-2 px-2 py-1 rounded-md w-[100%] mb-2 text-[#0003be]"
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <input
          className="border-2 px-2 py-1 rounded-md w-[100%] mb-2 text-[#0003be]"
          type="text"
          placeholder="Project Link"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
          required
        />
        <input
          className="border-2 px-2 py-1 rounded-md w-[100%] mb-2 text-[#0003be]"
          type="text"
          placeholder="Technologies"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          required
        />
        <div className="px-3 py-4 flex justify-between items-center w-[100%]">
          <button type="submit" className="px-3 py-2 rounded-md border bg-[#219ebc] text-white">
            Add Card
          </button>
          <button
            type="button"
            className="px-3 py-2 rounded border bg-[#f28482] text-white"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
