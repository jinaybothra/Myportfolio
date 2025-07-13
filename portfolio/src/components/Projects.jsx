import React from "react";

const projectList = [
  {
    title: "Password Mania",
    description: "•	Implemented CRUD operations efficiently to manage passwords efficiently for various websites ensuring robust create , update and delete operations." +
                "• Used JavaScript that are crucial for crafting intuitive user interface that ensures seamless interaction and responsiveness across various devices by 30%.",
    link: "https://jinaybothra.github.io/password-manager/",
    repo: "https://github.com/jinaybothra/password-manager"
  },
  {
    title: "Crypto Buddy",
    description: "•	Engineered Coinranking and enhanced cryptocurrency tracking in real-time by 32%." +
                 "• Developed responsive and interactive dashboards with the help of React for users to visualize and track cryptocurrencies with 98% accuracy  and used JavaScript and Node.js for fetching data through APIs.",
    link: "https://jinaybothra.github.io/CryptoBuddy/",
    repo: "https://github.com/jinaybothra/CryptoBuddy"

  }
  // Add more projects here
];

export function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-100 bg-[url('/project-pattern.svg')] bg-top bg-no-repeat" id="projects">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((proj, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-700">{proj.title}</h3>
            <p className="text-gray-600 mb-4">{proj.description}</p>
            <div className="flex gap-6">
              <a href={proj.link} target="_blank" className="text-blue-600 hover:underline">Live Demo  </a>
              <a href={proj.repo} target="_blank" className="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}