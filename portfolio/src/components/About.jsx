// File: components/About.jsx
import React from "react";

export function About() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-[url('/about-bg.svg')] bg-no-repeat bg-right" id="about">
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg leading-7 text-gray-700">
        I am a passionate frontend developer with experience in building responsive and accessible web applications. I love learning new technologies and creating projects that solve real-world problems.
      </p>
      <div className="mt-6 text-center">
        <a
          href="/https://drive.google.com/file/d/1WolOjyeB02zVRTTxKUfGL0ypIelQwahh/view?usp=drive_link"
          className="inline-block mt-4 px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}