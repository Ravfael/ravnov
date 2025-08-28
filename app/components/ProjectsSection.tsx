import React from "react";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
        <div className="space-y-8 sm:space-y-12">
          {[
            {
              title: "Real-time PoS for Cafe Management",
              description: "A modern, real-time point of sale (POS) system built with cutting edge web technologies. ",
              metrics: {
                performance: 98,
                accessibility: 95,
                seo: 98,
              },
              techDetails: ["Authentication & Authorization", "Admin Dashboard", "Real-time Updates ", "Payment Integration"],
              image: "/code.jpg",
              githubUrl: "https://github.com/Ravfael/realtime-point-of-sales", // Replace with your actual repo URL
            },
            {
              title: "HEMIS (Real-time Dashboard)",
              description: "AI powered hospital executive management information system built for manage all the data inside hospitals",
              metrics: {
                performance: 95,
                accessibility: 98,
                seo: 95,
              },
              techDetails: ["Real-time Updates", "Router Implementation", "Real-Time Chart Management", "LLM integration"],
              image: "/code.jpg",
              githubUrl: "https://github.com/amga-d/HEMIS", // Replace with your actual repo URL
            },
          ].map((project) => (
            <div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300 group" aria-label={`View ${project.title} on GitHub`}>
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">{project.description}</p>

                  {/* Performance Metrics */}
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-400">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Implementation */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
