// components/MyCard.tsx
type MyCardTypes = {
  project: string;
  image: string;
  link: string;
  tech: string;
  onRemove: () => void;
};

const MyCard = ({ project, image, link, tech, onRemove }: MyCardTypes) => {
  return (
    <div className="relative border rounded-lg p-4 shadow-lg">
      <button
        onClick={onRemove}
        className="absolute text-3xl top-2 right-2 text-red-500 hover:text-red-700"
      >
        X
      </button>
      <span className="block font-bold text-lg">{project}</span>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={project}
          className="w-[30%] h-auto my-2 rounded"
        />
      </a>
      <p className="text-gray-600">{tech}</p>
    </div>
  );
};

export default MyCard;
