import { Link } from "wouter";

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export default function Header({ toggleMobileMenu }: HeaderProps) {
  return (
    <header className="py-4 px-6 md:px-12 border-b border-dark-700 sticky top-0 bg-dark-900/80 backdrop-blur-lg z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="ri-movie-2-line text-2xl text-glow-green"></i>
            <h1 className="text-xl font-bold tracking-tight">TikTok<span className="text-glow-green">DL</span></h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="active-nav text-white hover:text-glow-green transition-colors duration-300">
              Home
            </Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-glow-green transition-colors duration-300">
              How It Works
            </Link>
            <Link href="#faq" className="text-gray-300 hover:text-glow-green transition-colors duration-300">
              FAQ
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={toggleMobileMenu}
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
