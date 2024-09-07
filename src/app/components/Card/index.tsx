type MyCardTypes = {
  project: string;
  image: string;
  link: string;
  tech: string;
};

const MyCard = ({ project, image, link, tech }: MyCardTypes) => {
  return (
    <div>
      <span>{project}</span>
      <a href={link}>
        <img src={image} alt={project} />
      </a>
      <p>{tech}</p>
    </div>
  );
};

export default MyCard;
