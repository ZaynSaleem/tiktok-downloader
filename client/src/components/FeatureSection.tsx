interface Feature {
  icon: string;
  title: string;
  description: string;
  glowColor: 'green' | 'purple' | 'pink';
}

export default function FeatureSection() {
  const features: Feature[] = [
    {
      icon: "ri-user-search-line",
      title: "User Profile Batch Download",
      description: "Download all videos from any TikTok user profile with a single command.",
      glowColor: "green"
    },
    {
      icon: "ri-file-list-3-line",
      title: "Bulk Download from Text Files",
      description: "Process multiple TikTok URLs at once from a simple text file.",
      glowColor: "purple"
    },
    {
      icon: "ri-file-gif-line",
      title: "Watermark Removal",
      description: "Download videos with or without the TikTok watermark based on your preference.",
      glowColor: "pink"
    },
    {
      icon: "ri-image-line",
      title: "Slideshow Support",
      description: "Automatically detects and downloads TikTok slideshows as individual images.",
      glowColor: "green"
    },
    {
      icon: "ri-restart-line",
      title: "Auto-Retry System",
      description: "Automatically logs failed downloads and retries them later to handle rate limits.",
      glowColor: "purple"
    },
    {
      icon: "ri-link-unlink-m",
      title: "Automatic URL Handling",
      description: "Works with all TikTok URL formats including shortened links and redirects.",
      glowColor: "pink"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12 bg-dark-800 relative">
      <div className="absolute top-40 right-20 w-64 h-64 bg-glow-pink/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful <span className="text-glow-purple">Features</span></h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Our tool is packed with everything you need to efficiently download TikTok content
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`card-gradient rounded-xl p-6 border border-dark-600 hover:border-glow-${feature.glowColor}/50 transition-all duration-300`}
            >
              <div className={`text-glow-${feature.glowColor} mb-4`}>
                <i className={`${feature.icon} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
