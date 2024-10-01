import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-lime-600 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between">
        <div className="text-2xl font-bold">M Moeed Qadri</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/portfolio" className="hover:text-red-500 bg-black py-2 px-5">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-red-500 bg-black py-2 px-5">
              About
            </Link>
          </li>
          <li>
            <Link href="/contactUs" className="hover:text-red-500 bg-black py-2 px-5">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
