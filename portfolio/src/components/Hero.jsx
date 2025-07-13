import React from "react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[url('/hero-bg.svg')] bg-cover bg-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold text-blue-800">Hi, I'm Jinay Bothra</h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-700 max-w-2xl">
        Software Developer | Amazon Intern | DTU'25
      </p>
      <a
        href="#projects"
        className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition-all shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
}