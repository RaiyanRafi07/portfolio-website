import React from "react";

function HeroSection() {
  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-6xl font-serif text-navy">
          Hey! <span className="text-orange">I’m Raiyan</span>
        </h1>
        <p className="mt-6 text-xl font-sans text-gray-700">
          Designing vibrant and creative experiences with a retro flair.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block bg-orange text-white py-3 px-6 rounded-full font-medium shadow-md hover:bg-navy"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
