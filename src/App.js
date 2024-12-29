import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="p-4">
        {/* Add sections like Hero, About, etc. */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
