import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" passHref>
            <span className="text-white hover:text-gray-300">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/#" passHref>
            <span className="text-white hover:text-gray-300">About</span>
          </Link>
        </li>
        <li>
          <Link href="/#" passHref>
            <span className="text-white hover:text-gray-300">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
