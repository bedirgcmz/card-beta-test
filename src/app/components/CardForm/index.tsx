import { useState } from "react";

type CardFormProps = {
  onAddCard: (card: {
    project: string;
    link: string;
    tech: string;
    image: string;
  }) => void;
  onClose: () => void;
};

const CardForm = ({ onAddCard, onClose }: CardFormProps) => {
  const [formData, setFormData] = useState({
    project: "",
    link: "",
    tech: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCard({
      ...formData,
      image: "", // Placeholder here - image URL is set in MainContent
    });
    setFormData({ project: "", link: "", tech: "" });
    onClose();
  };

  return (
    <div className="bg-white text-black p-4 rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Add New Card</h2>
      <form onSubmit={handleSubmit} data-testid="card-form">
        <input
          type="text"
          name="project"
          placeholder="Project Name"
          value={formData.project}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={formData.link}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="text"
          name="tech"
          placeholder="Technologies"
          value={formData.tech}
          onChange={handleChange}
          className="border p-2 mb-2 w-full"
          required
        />
        <div className="flex justify-between">
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Add Card
          </button>
          <button
            type="button"
            className="bg-red-500 text-white p-2 rounded"
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
