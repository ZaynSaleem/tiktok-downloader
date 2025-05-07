import { useState } from "react";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 px-6 md:px-12 relative">
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-glow-green/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How It <span className="text-glow-green">Works</span></h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Simple steps to download your favorite TikTok videos in seconds
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 relative overflow-hidden group hover:border-glow-green/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-glow-green/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-dark-900 flex items-center justify-center mb-4 text-glow-green border border-glow-green/30">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Paste URL</h3>
              <p className="text-gray-300">
                Copy the URL of any TikTok video you want to download from the TikTok app or website.
              </p>
            </div>
          </div>
          
          <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 relative overflow-hidden group hover:border-glow-purple/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-glow-purple/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-dark-900 flex items-center justify-center mb-4 text-glow-purple border border-glow-purple/30">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Options</h3>
              <p className="text-gray-300">
                Select whether you want to download the video with or without the TikTok watermark.
              </p>
            </div>
          </div>
          
          <div className="bg-dark-800 rounded-xl p-6 border border-dark-700 relative overflow-hidden group hover:border-glow-pink/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-glow-pink/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-dark-900 flex items-center justify-center mb-4 text-glow-pink border border-glow-pink/30">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Download</h3>
              <p className="text-gray-300">
                Click the download button and save the video to your device. It's that simple!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}