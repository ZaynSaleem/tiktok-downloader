import Console from "@/components/Console";

export default function UsageSection() {
  const installationConsoleLines = [
    { type: 'command', text: 'git clone https://github.com/yourusername/tiktok-dl.git' },
    { type: 'command', text: 'cd tiktok-dl' },
    { type: 'command', text: 'npm install' },
    { type: 'command', text: 'node tiktok-dl.js' }
  ];

  const usernameConsoleLines = [
    { type: 'info', text: 'Choose an option: Mass Download (Username)' },
    { type: 'info', text: 'Choose an option: Without Watermark' },
    { type: 'info', text: 'Enter the username: @username' }
  ];

  const textFileConsoleLines = [
    { type: 'info', text: 'Choose an option: Mass Download with (txt)' },
    { type: 'info', text: 'Choose an option: With Watermark' },
    { type: 'info', text: 'Select file: list.txt' }
  ];

  return (
    <section id="usage" className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How to <span className="text-glow-green">Use</span></h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Get started in minutes with these simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Console lines={installationConsoleLines} />
          
          <div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-glow-green/20 text-glow-green border border-glow-green/30">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Clone the repository</h3>
                  <p className="text-gray-300">
                    Use Git to clone the repository to your local machine.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-glow-purple/20 text-glow-purple border border-glow-purple/30">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Install dependencies</h3>
                  <p className="text-gray-300">
                    Navigate to the project directory and install the required Node.js packages.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-glow-pink/20 text-glow-pink border border-glow-pink/30">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Run the application</h3>
                  <p className="text-gray-300">
                    Execute the script and follow the interactive prompts to download your TikTok content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-dark-800 rounded-xl p-8 border border-dark-600">
          <h3 className="text-2xl font-semibold mb-6">Advanced Usage Examples</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-3 text-glow-green">Mass Download from Username</h4>
              <Console lines={usernameConsoleLines} />
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3 text-glow-purple">Bulk Download from Text File</h4>
              <Console lines={textFileConsoleLines} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
