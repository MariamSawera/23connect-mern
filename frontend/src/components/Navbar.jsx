const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">

      {/* ================= LEFT (LOGO) ================= */}
      <div className="navbar-start flex items-center gap-2 ">
        {/* Logo badge */}
        <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center">
          23
        </div>

        {/* Brand name */}
        <span className="font-semibold text-lg text-gray-800">
          Connect.
        </span>
      </div>

      {/* ================= CENTER (NAV LINKS) ================= */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1 text-gray-600">

          {/* Active link */}
          <li>
            <a className="bg-indigo-100 text-indigo-600 font-medium rounded-lg">
              🏠 Home
            </a>
          </li>

          <li>
            <a className="rounded-lg hover:bg-indigo-50">
              🎓 Semesters
            </a>
          </li>

          <li>
            <a className="rounded-lg hover:bg-indigo-50">
              📚 Library
            </a>
          </li>

          <li>
            <a className="rounded-lg hover:bg-indigo-50">
              📁 Files
            </a>
          </li>

          <li>
            <a className="rounded-lg hover:bg-indigo-50">
              📝 Exams
            </a>
          </li>

          <li>
            <a className="rounded-lg hover:bg-indigo-50">
              💬 Community
            </a>
          </li>

          <li>
            <a className="rounded-lg hover:bg-indigo-50">
              🖼️ Gallery
            </a>
          </li>
                    <li>
            <a className="rounded-lg hover:bg-indigo-50">
              🖼️ contact
            </a>
          </li>

        </ul>
      </div>

      {/* ================= RIGHT (LOGIN) ================= */}
      <div className="navbar-end">
        <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none rounded-xl px-6">
          Login
        </button>
      </div>

    </div>
  );
};

export default Navbar;
