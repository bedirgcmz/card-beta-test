type MainTitleProps = {
  title: string;
  subtitle: string;
};

const MainTitle = ({ title, subtitle }: MainTitleProps) => {
  return (
    <div className="py-3">
      <h1 className="p-3">{title}</h1>
      <p className="p-2">{subtitle}</p>
    </div>
  );
};

export default MainTitle;
