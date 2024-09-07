import MainTitle from "../MainTitle";
import Navbar from "../Navbar";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center p-3 py-3">
      <MainTitle title="Card-Beta-Test" subtitle="Create Cards Easily" />
      <Navbar />
    </div>
  );
};

export default Header;
