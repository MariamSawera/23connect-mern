import React, { useState } from "react";
import { createPortal } from "react-dom";
import { UserIcon, EnvelopeIcon, LockClosedIcon, XMarkIcon } from "@heroicons/react/24/solid";

const AuthButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const openModal = (mode = "login") => {
    setAuthMode(mode);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={() => openModal("login")}
        className="btn rounded-xl bg-indigo-600/90 hover:bg-indigo-700 text-white border-none shadow-lg"
      >
        Login
      </button>

      {isOpen &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
              onClick={closeModal}
            ></div>

            {/* Modal card */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="w-full max-w-md bg-white rounded-3xl p-8 relative shadow-xl animate-in fade-in zoom-in duration-500">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
                  {authMode === "login" ? "Login" : "Create Account"}
                </h2>

                <form className="space-y-5">
                  {authMode === "signup" && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UserIcon className="w-5 h-5 text-slate-400" />
                        </span>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <EnvelopeIcon className="w-5 h-5 text-slate-400" />
                      </span>
                      <input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LockClosedIcon className="w-5 h-5 text-slate-400" />
                      </span>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3 rounded-xl font-semibold text-white transition ${
                      authMode === "login"
                        ? "bg-indigo-600 hover:bg-indigo-700"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    {authMode === "login" ? "Login" : "Sign Up"}
                  </button>
                </form>

                <p className="text-sm text-center text-slate-500 mt-4">
                  {authMode === "login"
                    ? "Don't have an account? "
                    : "Already have an account? "}
                  <button
                    className="text-indigo-600 font-bold hover:underline"
                    onClick={() =>
                      setAuthMode(authMode === "login" ? "signup" : "login")
                    }
                  >
                    {authMode === "login" ? "Sign Up" : "Login"}
                  </button>
                </p>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};

export default AuthButton;
