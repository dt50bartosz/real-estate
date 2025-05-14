export default function Menu() {
    return (
      <nav className="bg-white shadow-md py-4">
        <ul className="flex justify-center gap-8 text-lg font-medium text-gray-700">
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Strona główna</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">O mnie</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Oferta</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Kontakt</li>
        </ul>
      </nav>
    );
  }
  