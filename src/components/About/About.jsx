import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-center mb-12">
        <div className="bg-white border-6 border-black flex items-center justify-center">
          <h1 className="text-3xl font-regular uppercase text-center px-4 py-2">
            About me
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-4">About the Artist</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-end">
          <img
            src="https://via.placeholder.com/300x400?text=Artist+Photo"
            alt="Artist"
            className="w-64 h-80 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;