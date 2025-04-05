import React from "react";
import { Link } from "react-router-dom";

function StableDiffusionPage() {
  return (
    <div class="flex h-screen bg-gradient-animated text-white overflow-y-auto">
      <div class="container mx-auto px-4 py-12 mb-20 max-w-4xl">
        <div class="flex items-center mb-8">
          <Link
            to="/models"
            class="bg-white/20 hover:bg-white/30 p-2 rounded-lg mr-4 transition-all flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            <span>Back to Models</span>
          </Link>
          <h1
            class="text-4xl font-bold"
            style={{ fontFamily: "Josefin Sans, sans-serif" }}
          >
            Fused Stable Diffusion and ControlNet Model
          </h1>
        </div>

        {/* Overview Section */}
        <section class="mb-16 relative pl-5 border-l-4 border-cyan-500/30">
          <h2 class="text-3xl font-bold mb-6 text-cyan-300">Overview</h2>
          <p class="text-white/90 mb-6 text-lg">
            StableDiffusion is a latent text-to-image diffusion model capable of
            generating photo-realistic images given any text input. It's
            particularly effective for architectural visualization and floor
            plan generation due to its strong spatial understanding and
            realistic rendering capabilities.
          </p>

          <div class="aspect-video w-full rounded-lg mb-8 overflow-hidden shadow-lg border border-white/10">
            <img
              src="https://placehold.co/800x450/222/fff?text=StableDiffusion+Example"
              alt="StableDiffusion Example"
              class="w-full h-full object-cover"
            />
          </div>

          <h3 class="text-2xl font-semibold mb-4 text-cyan-100">
            Key Capabilities
          </h3>
          <ul class="list-disc list-outside ml-6 text-white/90 space-y-3 mb-6 text-lg">
            <li>
              Generates highly detailed and realistic floor plans with accurate
              proportions
            </li>
            <li>
              Excellent at rendering textures, materials, and lighting for
              architectural visualization
            </li>
            <li>
              Maintains spatial coherence and architectural feasibility in
              generated layouts
            </li>
            <li>
              Adapts to specific architectural styles and design preferences
            </li>
            <li>
              Handles complex spatial relationships and room arrangements
              effectively
            </li>
          </ul>
        </section>

        {/* Technical Specifications Section */}
        <section class="mb-16 relative pl-5 border-l-4 border-cyan-500/30">
          <h2 class="text-3xl font-bold mb-6 text-cyan-300">
            Technical Specifications
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-black/20 p-4 rounded-lg">
              <h4 class="font-medium mb-2 text-cyan-100">
                Model Architecture
              </h4>
              <p class="text-white/90">
                Latent diffusion model with transformer text encoder and U-Net
                backbone
              </p>
            </div>
            <div class="bg-black/20 p-4 rounded-lg">
              <h4 class="font-medium mb-2 text-cyan-100">
                Training Dataset
              </h4>
              <p class="text-white/90">
                LAION-5B with architectural and interior design focus
              </p>
            </div>
            <div class="bg-black/20 p-4 rounded-lg">
              <h4 class="font-medium mb-2 text-cyan-100">Resolution</h4>
              <p class="text-white/90">
                512x512 native, with upscaling capabilities to 2048x2048
              </p>
            </div>
            <div class="bg-black/20 p-4 rounded-lg">
              <h4 class="font-medium mb-2 text-cyan-100">Fine-tuning</h4>
              <p class="text-white/90">
                Specialized for architectural visualization and floor plan
                generation
              </p>
            </div>
          </div>
        </section>

        {/* Usage Guidelines Section */}
        <section class="mb-16 relative pl-5 border-l-4 border-cyan-500/30">
          <h2 class="text-3xl font-bold mb-6 text-cyan-300">
            Usage Guidelines
          </h2>

          <h3 class="text-2xl font-semibold mb-4 text-cyan-100">
            Best Practices
          </h3>
          <ul class="list-disc list-outside ml-6 text-white/90 space-y-3 mb-8 text-lg">
            <li>
              Be specific about spatial relationships and dimensions in your
              prompts
            </li>
            <li>
              Include details about materials, lighting, and architectural style
            </li>
            <li>Use architectural terminology for more precise results</li>
            <li>
              Specify the perspective (top-down, isometric, etc.) for better
              floor plan clarity
            </li>
          </ul>

          <h3 class="text-2xl font-semibold mb-4 text-cyan-100">
            Sample Prompts
          </h3>
          <div class="space-y-4 mb-8">
            <div class="bg-black/30 p-4 rounded-lg">
              <p class="text-white/90 font-medium">
                "Modern minimalist open-concept floor plan with living room,
                kitchen, and dining area. Natural light from floor-to-ceiling
                windows. Concrete floors and white walls."
              </p>
            </div>
            <div class="bg-black/30 p-4 rounded-lg">
              <p class="text-white/90 font-medium">
                "Traditional Japanese home floor plan with tatami rooms, sliding
                paper doors, central courtyard garden, and engawa veranda.
                Top-down view."
              </p>
            </div>
          </div>

          <div class="p-6 bg-cyan-900/30 rounded-lg border-l-4 border-cyan-400">
            <h4 class="font-bold mb-2 text-xl text-cyan-100">Pro Tip</h4>
            <p class="text-white/90">
              For the most accurate floor plans, include both functional
              requirements (number and types of rooms) and aesthetic preferences
              (materials, colors, lighting) in your prompt.
            </p>
          </div>
        </section>

        <div class="flex justify-center mb-8">
          <Link
            to="/chat"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg transition-colors transform hover:scale-105 flex items-center gap-2 text-lg font-semibold"
          >
            <span>Try Fused Stable Diffusion Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StableDiffusionPage;
