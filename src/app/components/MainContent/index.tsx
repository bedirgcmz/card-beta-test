import MyButton from "../Button";
import MyCard from "../Card";
const MainContent = () => {
  const MyRandomImage: string = "https://picsum.photos/200/300?random=1";
  return (
    <div>
      <MyCard
        project="Project1"
        image={MyRandomImage}
        link="https://www.widenisland.com"
        tech="CSS, HTML, Wordpress, Javascript"
      />
      <MyButton />
    </div>
  );
};

export default MainContent;
