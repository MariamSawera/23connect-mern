import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import AuthButton from "./AuthButton"; // <-- import new component

const navItems = [
  { label: "🏠 Home", path: "/" },
  { label: "🎓 Semesters", path: "/semesters" },
  { label: "📚 Library", path: "/books" },
  { label: "📁 Files", path: "/assignments" },
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
      <div className="navbar-start">
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

        <div className="flex items-center gap-2 ml-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center
          animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.7)]">
            23
          </div>
          <span className="font-semibold text-lg text-gray-800">Connect.</span>
        </div>
      </div>

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

      <div className="navbar-end">
        <AuthButton /> {/* <-- render the login/signup button here */}
      </div>
    </div>
  );
};

export default Navbar;


// import { Bars3Icon } from "@heroicons/react/24/outline";
// import { NavLink } from "react-router-dom";

// const navItems = [
//   { label: "🏠 Home", path: "/" },
//   { label: "🎓 Semesters", path: "/semesters" },
//   { label: "📚 Library", path: "/books" },
//   { label: "📁 Files", path: "/assignments" },
//   // { label: "⏳ Assignments", path: "/assignments" },
//   // { label: "⚙️ Resources", path: "/resources" },
//   { label: "📝 Exams", path: "/exams" },
//   { label: "💬 Community", path: "/qa" },
//   { label: "🖼️ Gallery", path: "/projects" },
//   { label: "👤 Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const linkClass = ({ isActive }) =>
//     `rounded-lg px-3 py-1 transition-colors ${
//       isActive ? "bg-indigo-100/70 text-indigo-600" : "text-gray-700 hover:bg-indigo-50"
//     }`;

//   return (
//     <div className="navbar sticky top-0 z-50 px-6 bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-md">
      
//       {/* LEFT (Logo + Hamburger) */}
//       <div className="navbar-start">
//         {/* Hamburger (Mobile) */}
//         <div className="dropdown lg:hidden">
//           <label tabIndex={0} className="btn btn-ghost btn-circle">
//             <Bars3Icon className="h-6 w-6 text-indigo-600" />
//           </label>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 p-3 w-52 rounded-xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl"
//           >
//             {navItems.map((item) => (
//               <li key={item.path}>
//                 <NavLink to={item.path} className={linkClass}>
//                   {item.label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Logo */}
//         <div className="flex items-center gap-2 ml-2">
//           <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center
//   animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.7)]">
//             23
//           </div>
//           <span className="font-semibold text-lg text-gray-800">Connect.</span>
//         </div>
//       </div>

//       {/* CENTER (Desktop Menu) */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal gap-1">
//           {navItems.map((item) => (
//             <li key={item.path}>
//               <NavLink to={item.path} className={linkClass}>
//                 {item.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* RIGHT (Login Button) */}
//       <div className="navbar-end">
//         <NavLink to="/login">
//           <button className="btn rounded-xl bg-indigo-600/90 hover:bg-indigo-700 text-white border-none shadow-lg">
//             Login
//           </button>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
