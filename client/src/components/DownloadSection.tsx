import Console from "@/components/Console";

export default function DownloadSection() {
  const npmConsoleLines = [
    { type: 'command', text: 'npm install -g tiktok-dl' }
  ];

  return (
    <section id="download" className="py-20 px-6 md:px-12 bg-dark-800 relative">
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-glow-green/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to <span className="text-glow-pink">Download</span>?</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Get the tool now and start downloading TikTok videos in seconds
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-gradient rounded-xl p-8 border border-dark-600 hover:border-glow-green/50 transition-all duration-300">
              <div className="text-center">
                <i className="ri-github-fill text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-3">GitHub Repository</h3>
                <p className="text-gray-300 mb-6">
                  Clone or download the repository directly from GitHub for the latest version.
                </p>
                <a 
                  href="https://github.com/n0l3r/tiktok-dl" 
                  className="glow-effect glow-green inline-block px-6 py-3 bg-dark-700 text-glow-green font-medium rounded-lg border border-glow-green/30 hover:border-glow-green/70 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-download-line mr-2"></i> Clone Repository
                </a>
              </div>
            </div>
            
            <div className="card-gradient rounded-xl p-8 border border-dark-600 hover:border-glow-purple/50 transition-all duration-300">
              <div className="text-center">
                <i className="ri-npmjs-fill text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-3">NPM Package</h3>
                <p className="text-gray-300 mb-6">
                  Install the package directly using npm for quick and easy setup.
                </p>
                <div className="mb-4">
                  <Console lines={npmConsoleLines} />
                </div>
                <a 
                  href="https://www.npmjs.com/package/tiktok-dl" 
                  className="glow-effect glow-purple inline-block px-6 py-3 bg-dark-700 text-glow-purple font-medium rounded-lg border border-glow-purple/30 hover:border-glow-purple/70 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-npmjs-line mr-2"></i> View on NPM
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-dark-900 rounded-xl p-8 border border-dark-600">
            <h3 className="text-2xl font-semibold mb-6">System Requirements</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <i className="ri-check-line text-glow-green mr-2"></i>
                  Node.js Environment
                </h4>
                <p className="text-gray-300 pl-6">
                  Node.js version 14.0 or higher is required to run this tool.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <i className="ri-check-line text-glow-green mr-2"></i>
                  Required Packages
                </h4>
                <p className="text-gray-300 pl-6">
                  Dependencies include node-fetch, chalk, inquirer, and playwright.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <i className="ri-check-line text-glow-green mr-2"></i>
                  Operating Systems
                </h4>
                <p className="text-gray-300 pl-6">
                  Compatible with Windows, macOS, and Linux distributions.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3 flex items-center">
                  <i className="ri-check-line text-glow-green mr-2"></i>
                  Internet Connection
                </h4>
                <p className="text-gray-300 pl-6">
                  A stable internet connection is needed to download TikTok content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
