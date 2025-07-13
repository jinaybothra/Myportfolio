import React from "react";

const experiences = [
  {
    title: "SDE Intern at Amazon",
    time: "Jan 2024 - June 2024",
    description: "•	Created an API for fixing the issue of 2 accounts on single Customer Id for their Payee Central Website resolving 10-15 trouble tickets per week." +
                "• Worked on JDK migration from JDK 8 to JDK 17 for FinOps Central Service pipeline resolving risks in policy engine." +
               "• Worked on fixing Bake Time Cloud Watch Approval Alarm on their Production stage using Typescript directly resolved over 9 critical deployment risks flagged by the company’s Dogma system." +
                "(Exposure - Java , Springboot , Node.js, Typescript , Amazon Web Services)"

  },
  // Add more experiences
];

export function Experience() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto bg-gradient-to-br from-white to-blue-50" id="experience">
      <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
      <ul className="space-y-10">
        {experiences.map((exp, index) => (
          <li key={index} className="border-l-4 border-blue-600 pl-6 relative">
            <div className="absolute -left-2 top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
            <h3 className="text-xl font-semibold text-blue-800">{exp.title}</h3>
            <p className="text-sm text-gray-500 italic">{exp.time}</p>
            <p className="mt-2 text-gray-700 leading-relaxed">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}