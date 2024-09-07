"use client";
const MyButton = () => {
  const handleClick = () => {
    console.log("add cards");
  };
  return (
    <div className="flex justify-center p-3 bg-blue-700 w-[150px] mx-auto">
      <button onClick={handleClick}>Add Cards</button>
    </div>
  );
};

export default MyButton;
