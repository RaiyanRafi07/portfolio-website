import React from "react";

function AboutSection() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-serif text-navy text-center">About Me</h2>
        <p className="mt-6 text-lg font-sans text-gray-700 text-center">
          A creative developer specializing in crafting bold, retro-inspired designs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="p-6 bg-cream rounded-lg shadow-md">
            <h3 className="text-3xl font-serif text-orange">Experience</h3>
            <p className="mt-4 text-gray-700">
              Placeholder for professional experience details.
            </p>
          </div>
          <div className="p-6 bg-cream rounded-lg shadow-md">
            <h3 className="text-3xl font-serif text-orange">Skills</h3>
            <p className="mt-4 text-gray-700">
              Placeholder for technical skills details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
