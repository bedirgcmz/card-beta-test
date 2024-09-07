"use client";

type MyButtonProps = {
  onClick: () => void;
};

const MyButton = ({ onClick }: MyButtonProps) => {
  return (
    <div className="flex justify-center p-3 bg-blue-700 w-[150px] mx-auto">
      <button onClick={onClick} className="text-white">
        Add Cards
      </button>
    </div>
  );
};

export default MyButton;
