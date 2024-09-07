type MainTitleProps = {
  title: string;
  subtitle: string;
};

const MainTitle = ({ title, subtitle }: MainTitleProps) => {
  return (
    <div className="py-3 flex flex-col justify-center mx-auto">
      <h1 className="p-3 text-2xl">{title}</h1>
      <h3 className="p-3 italic text-md">{subtitle}</h3>
    </div>
  );
};

export default MainTitle;
