// const Navbar = () => {
//   return (
//     <div className="navbar bg-base-100 shadow-sm px-6">

//       {/* ================= LEFT (LOGO) ================= */}
//       <div className="navbar-start flex items-center gap-2 ">
//         {/* Logo badge */}
//         <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center">
//           23
//         </div>

//         {/* Brand name */}
//         <span className="font-semibold text-lg text-gray-800">
//           Connect.
//         </span>
//       </div>

//       {/* ================= CENTER (NAV LINKS) ================= */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 gap-1 text-gray-600">

//           {/* Active link */}
//           <li>
//             <a className="bg-indigo-100 text-indigo-600 font-medium rounded-lg">
//               🏠 Home
//             </a>
//           </li>

//           <li>
//             <a className="rounded-lg hover:bg-indigo-50">
//               🎓 Semesters
//             </a>
//           </li>

//           <li>
//             <a className="rounded-lg hover:bg-indigo-50">
//               📚 Library
//             </a>
//           </li>

//           <li>
//             <a className="rounded-lg hover:bg-indigo-50">
//               📁 Files
//             </a>
//           </li>

//           <li>
//             <a className="rounded-lg hover:bg-indigo-50">
//               📝 Exams
//             </a>
//           </li>

//           <li>
//             <a className="rounded-lg hover:bg-indigo-50">
//               💬 Community
//             </a>
//           </li>

//           <li>
//             <a className="rounded-lg hover:bg-indigo-50">
//               🖼️ Gallery
//             </a>
//           </li>
//                     <li>
//             <a className="rounded-lg hover:bg-indigo-50">
//                contact
//             </a>
//           </li>

//         </ul>
//       </div>

//       {/* ================= RIGHT (LOGIN) ================= */}
//       <div className="navbar-end">
//         <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none rounded-xl px-6">
//           Login
//         </button>
//       </div>

//     </div>
//   );
// };

// export default Navbar;

//---------------------------------------------------------------------------------------smartway
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import {
//   HomeIcon,
//   AcademicCapIcon,
//   BookOpenIcon,
//   FolderIcon,
//   ClipboardDocumentListIcon,
//   ChatBubbleLeftRightIcon,
//   PhotoIcon,
//   PhoneIcon,
// } from "@heroicons/react/24/outline";

// /* ================= NAV CONFIG ================= */
// const NAV_ITEMS = [
//   { label: "Home", icon: HomeIcon },
//   { label: "Semesters", icon: AcademicCapIcon },
//   { label: "Library", icon: BookOpenIcon },
//   { label: "Files", icon: FolderIcon },
//   { label: "Exams", icon: ClipboardDocumentListIcon },
//   { label: "Community", icon: ChatBubbleLeftRightIcon },
//   { label: "Gallery", icon: PhotoIcon },
//   { label: "Contact", icon: PhoneIcon },
// ];

// /* ================= LOGO CONFIG ================= */
// // switch this later to SVG or <img />
// const Logo = () => (
//   <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center">
//     23
//   </div>
// );

// /* ================= NAVBAR ================= */
// const Navbar = () => {
//   return (
//     <div
//       className="navbar sticky top-0 z-50 px-6
//       bg-white/60 backdrop-blur-lg
//       border-b border-white/30
//       shadow-md"
//     >
//       {/* ================= LEFT ================= */}
//       <div className="navbar-start">

//         {/* Mobile Hamburger */}
//         <div className="dropdown lg:hidden">
//           <label tabIndex={0} className="btn btn-ghost btn-circle">
//             <Bars3Icon className="h-6 w-6 text-indigo-600" />
//           </label>

//           {/* Mobile Menu */}
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 p-3 w-56 rounded-xl
//             bg-white/70 backdrop-blur-lg
//             border border-white/40 shadow-xl"
//           >
//             {NAV_ITEMS.map(({ label, icon: Icon }) => (
//               <li key={label}>
//                 <a className="flex items-center gap-2">
//                   <Icon className="w-4 h-4 text-indigo-600" />
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Logo */}
//         <div className="flex items-center gap-2 ml-2">
//           <Logo />
//           <span className="font-semibold text-lg text-gray-800">
//             Connect.
//           </span>
//         </div>
//       </div>

//       {/* ================= CENTER (DESKTOP) ================= */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal gap-1 text-gray-700">

//           {/* Active item example */}
//           <li>
//             <a className="flex items-center gap-2 rounded-lg bg-indigo-100/70 text-indigo-600">
//               <HomeIcon className="w-4 h-4" />
//               Home
//             </a>
//           </li>

//           {NAV_ITEMS.slice(1).map(({ label, icon: Icon }) => (
//             <li key={label}>
//               <a className="flex items-center gap-2 rounded-lg hover:bg-indigo-50">
//                 <Icon className="w-4 h-4" />
//                 {label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* ================= RIGHT ================= */}
//       <div className="navbar-end">
//         <button
//           className="btn rounded-xl
//           bg-indigo-600/90 hover:bg-indigo-700
//           text-white border-none shadow-lg px-6"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "🏠 Home", path: "/" },
  { label: "🎓 Semesters", path: "/semesters" },
  { label: "📚 Library", path: "/books" },
  { label: "📁 Assignments", path: "/assignments" },
  // { label: "⏳ Assignments", path: "/assignments" },
  { label: "⚙️ Resources", path: "/resources" },
  { label: "📝 Exams", path: "/exams" },
  { label: "💬 Community", path: "/qa" },
  { label: "🖼️ Gallery", path: "/projects" },
  { label: "👤 Contact", path: "/contact" },
];

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-1 transition-colors ${
      isActive ? "bg-indigo-100/70 text-indigo-600" : "text-gray-700 hover:bg-indigo-50"
    }`;

  return (
    <div className="navbar sticky top-0 z-50 px-6 bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-md">
      
      {/* LEFT (Logo + Hamburger) */}
      <div className="navbar-start">
        {/* Hamburger (Mobile) */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Bars3Icon className="h-6 w-6 text-indigo-600" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 w-52 rounded-xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl"
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2 ml-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center
  animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.7)]">
            23
          </div>
          <span className="font-semibold text-lg text-gray-800">Connect.</span>
        </div>
      </div>

      {/* CENTER (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT (Login Button) */}
      <div className="navbar-end">
        <NavLink to="/login">
          <button className="btn rounded-xl bg-indigo-600/90 hover:bg-indigo-700 text-white border-none shadow-lg">
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
