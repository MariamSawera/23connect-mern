const Navbar = () => {
  return (
    /* Main navbar container */
    <nav className="w-full h-16 bg-indigo-600 flex items-center justify-between px-6 text-white">

      {/* ================= LEFT SECTION (LOGO) ================= */}
      <div className="flex items-center gap-2">
        {/* Logo badge */}
        <div className="w-7 h-7 bg-white text-indigo-600 font-bold rounded-md flex items-center justify-center">
          23
        </div>

        {/* App name */}
        <span className="text-lg font-semibold">Connect</span>
      </div>

      {/* == CENTER SECTION (NAV LINKS) == */}
      <ul className="hidden md:flex items-center gap-5 text-sm">
        {/* Active link */}
        <li className="bg-white/20 px-3 py-1 rounded-md cursor-pointer">
          Home
        </li>

        {/* Other links */}
        <li className="cursor-pointer hover:text-gray-200">Semesters</li>
        <li className="cursor-pointer hover:text-gray-200">Books</li>
        <li className="cursor-pointer hover:text-gray-200">Resources</li>
        <li className="cursor-pointer hover:text-gray-200">Exams</li>
        <li className="cursor-pointer hover:text-gray-200">Help Q&amp;A</li>
        <li className="cursor-pointer hover:text-gray-200">Gallery</li>
        <li className="cursor-pointer hover:text-gray-200">Admin Panel</li>
      </ul>

      {/* ================= RIGHT SECTION (USER INFO) ================= */}
      <div className="flex items-center gap-4">
        {/* Greeting text */}
        <span className="text-sm hidden sm:block">
          Hi, Admin User
        </span>

        {/* Logout button */}
        <button className="bg-indigo-800 hover:bg-indigo-900 px-4 py-1.5 rounded-md text-sm transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
