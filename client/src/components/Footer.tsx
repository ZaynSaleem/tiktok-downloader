import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-dark-700">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="ri-movie-2-line text-2xl text-glow-green"></i>
              <h1 className="text-xl font-bold tracking-tight">TikTok<span className="text-glow-green">DL</span></h1>
            </div>
            <p className="text-gray-400">
              A simple tool for downloading TikTok videos with or without watermarks - quick and easy to use.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Navigate</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#home" className="hover:text-glow-green transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-glow-green transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-glow-green transition-colors duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-glow-green transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-glow-green transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-glow-green transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://github.com/n0l3r" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-glow-green transition-colors duration-300">
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-glow-purple transition-colors duration-300">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-glow-pink transition-colors duration-300">
                <i className="ri-discord-fill text-xl"></i>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Get notified about updates
            </p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Enter your email" className="bg-dark-700 border border-dark-600 rounded-l-lg px-4 py-2 focus:outline-none focus:border-glow-green text-sm w-full" />
              <button className="bg-glow-green text-dark-900 px-4 py-2 rounded-r-lg font-medium text-sm hover:bg-opacity-90 transition-colors duration-300">
                <i className="ri-send-plane-fill"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TikTokDL. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Based on code by Awais Asif
          </p>
        </div>
      </div>
    </footer>
  );
}
