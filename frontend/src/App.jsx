import { useEffect } from "react";
import api from "./lib/axios.js";
import Navbar from "./components/Navbar.jsx";

function App() {
  useEffect(() => {
    api.get("/api/health")
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Page content */}
      {/* <h1 className="text-blue-500 text-xl p-6">
        Frontend running ⚛️
      </h1> */}
    </>
  );
}

export default App;
