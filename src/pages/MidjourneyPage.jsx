import React from "react";
import { Link } from "react-router-dom";

function MidjourneyPage() {
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
            Gemini with Matplotlib Floor Planner
          </h1>
        </div>

        {/* Overview Section */}
        <section class="mb-16 relative pl-5 border-l-4 border-cyan-500/30">
          <h2 class="text-3xl font-bold mb-6 text-cyan-300">Overview</h2>
          <p class="text-white/90 mb-6 text-lg">
            Midjourney is an independent AI that creates images from textual
            descriptions, known for its artistic style. For floor plan
            generation, Midjourney excels at creating visually stunning and
            atmospheric architectural visualizations with strong aesthetic
            qualities.
          </p>

          <div class="aspect-video w-full rounded-lg mb-8 overflow-hidden shadow-lg border border-white/10">
            <img
              src="https://placehold.co/800x450/222/fff?text=Midjourney+Example"
              alt="Midjourney Example"
              class="w-full h-full object-cover"
            />
          </div>

          <h3 class="text-2xl font-semibold mb-4 text-cyan-100">
            Key Capabilities
          </h3>
          <ul class="list-disc list-outside ml-6 text-white/90 space-y-3 mb-6 text-lg">
            <li>
              Creates visually stunning and artistic architectural
              visualizations
            </li>
            <li>
              Excels at atmospheric quality, lighting, and mood in rendered
              spaces
            </li>
            <li>Strong at depicting material textures and finish qualities</li>
            <li>
              Excellent at environmental context and landscape integration
            </li>
            <li>Unique artistic interpretation of architectural concepts</li>
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
                Proprietary diffusion-based system with artistic enhancement
                layers
              </p>
            </div>
            <div class="bg-black/20 p-4 rounded-lg">
              <h4 class="font-medium mb-2 text-cyan-100">
                Training Dataset
              </h4>
              <p class="text-white/90">
                Artistic imagery with strong emphasis on architectural
                photography and rendering
              </p>
            </div>
            <div class="bg-black/20 p-4 rounded-lg">
              <h4 class="font-medium mb-2 text-cyan-100">Resolution</h4>
              <p class="text-white/90">
                Variable resolution options with aspect ratio control
              </p>
            </div>
            <div class="bg-black/20 p-4 rounded-lg">
              <h4 class="font-medium mb-2 text-cyan-100">Fine-tuning</h4>
              <p class="text-white/90">
                Specialized for aesthetic quality and artistic interpretation
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
              Include specific artistic references and visual inspirations in
              your prompts
            </li>
            <li>Be detailed about lighting conditions, atmosphere, and mood</li>
            <li>
              Specify camera angle and perspective for architectural
              visualizations
            </li>
            <li>
              Use artistic and stylistic descriptors (e.g., "cinematic,"
              "dramatic," "serene")
            </li>
          </ul>

          <h3 class="text-2xl font-semibold mb-4 text-cyan-100">
            Sample Prompts
          </h3>
          <div class="space-y-4 mb-8">
            <div class="bg-black/30 p-4 rounded-lg">
              <p class="text-white/90 font-medium">
                "Atmospheric rendering of a minimalist beach house interior.
                Golden hour sunlight streaming through floor-to-ceiling windows.
                Natural wood and white surfaces. Cinematic wide-angle view
                showing open plan living and ocean vista."
              </p>
            </div>
            <div class="bg-black/30 p-4 rounded-lg">
              <p class="text-white/90 font-medium">
                "Isometric architectural visualization of a multi-level urban
                garden apartment. Lush greenery on every terrace. Brutalist
                concrete structure softened by climbing plants. Morning mist.
                Inspired by Tadao Ando's use of light and shadow."
              </p>
            </div>
          </div>

          <div class="p-6 bg-cyan-900/30 rounded-lg border-l-4 border-cyan-400">
            <h4 class="font-bold mb-2 text-xl text-cyan-100">Pro Tip</h4>
            <p class="text-white/90">
              Midjourney works best when you provide specific artistic
              references and detailed descriptions of materials and lighting.
              Think like a cinematographer when writing your prompts for the
              most stunning visualizations.
            </p>
          </div>
        </section>

        <div class="flex justify-center mb-8">
          <Link
            to="/chat"
            class="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg transition-colors transform hover:scale-105 flex items-center gap-2 text-lg font-semibold"
          >
            <span>Try Gemini Floor Planner Now</span>
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

export default MidjourneyPage;
