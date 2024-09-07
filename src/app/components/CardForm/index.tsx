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
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Add New Card</h2>
      <form
        onSubmit={handleSubmit}
        data-testid="card-form"
        className="space-y-4"
      >
        <input
          type="text"
          name="project"
          placeholder="Project Name"
          value={formData.project}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={formData.link}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <input
          type="text"
          name="tech"
          placeholder="Technologies"
          value={formData.tech}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            Add Card
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
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
