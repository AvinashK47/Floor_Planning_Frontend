import React from "react";

const contributors = [
  {
    name: "Avinash Kushwaha",
    github: "https://github.com/AvinashK47",
    linkedin: "https://linkedin.com/in/avinash", // Added LinkedIn URL
    role: "Frontend & Backend Developer",
  },
  {
    name: "Bindupautra Jyotibrat",
    github: "https://github.com/bjyotibrat",
    linkedin: "https://linkedin.com/in/johndoe", // Added LinkedIn URL
    role: "Backend Developer",
  },
  {
    name: "Arunim Gogoi",
    github: "https://github.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith", // Added LinkedIn URL
    role: "UI/UX Designer",
  },
  {
    name: "Ansh Gaur",
    github: "https://github.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith", // Added LinkedIn URL
    role: "Backend Developer",
  },
];

function ContributorsPage() {
  return (
    <div class="flex h-screen bg-gradient-animated text-white overflow-y-auto">
      <div class="container mx-auto px-4 py-12">
        <h1
          class="text-4xl font-bold mb-8 text-center"
          style={{ fontFamily: "Josefin Sans, sans-serif" }}
        >
          Project Contributors
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              class="bg-gray-900/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all hover:shadow-cyan-500/10"
            >
              <div class="p-6">
                <h2 class="text-2xl font-bold mb-3">{contributor.name}</h2>
                <p class="text-white/80 mb-4">{contributor.role}</p>

                {/* Social links with icons */}
                <div class="flex space-x-4 mt-3">
                  <a
                    href={contributor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2 hover:bg-black/30"
                    aria-label="GitHub Profile"
                  >
                    {/* GitHub icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href={contributor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2 hover:bg-black/30"
                    aria-label="LinkedIn Profile"
                  >
                    {/* LinkedIn icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContributorsPage;
