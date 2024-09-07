type MyCardTypes = {
  project: string;
  image: string;
  link: string;
  tech: string;
  onRemove: () => void;
};

const MyCard = ({ project, image, link, tech, onRemove }: MyCardTypes) => {
  return (
    <div className="relative border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-full max-w-md mx-auto bg-white">
      <button
        onClick={onRemove}
        className="absolute text-xl top-3 right-3 text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        X
      </button>
      <span className="block font-semibold text-xl text-gray-800 mb-2">
        {project}
      </span>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={project}
          className="sm:w-full md:w-[50%] h-auto max-h-40 my-3 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
        />
      </a>
      <p className="text-gray-600">{tech}</p>
    </div>
  );
};

export default MyCard;
