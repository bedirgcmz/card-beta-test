type MainTitleProps = {
  title: string;
};

const MainTitle = ({ title }: MainTitleProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default MainTitle;
