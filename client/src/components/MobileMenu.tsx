import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        onClose();
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-md">
      <div className="h-full flex flex-col items-center justify-center space-y-8 text-xl">
        <Link href="#home" onClick={handleLinkClick} className="text-white hover:text-glow-green transition-colors duration-300">
          Home
        </Link>
        <Link href="#how-it-works" onClick={handleLinkClick} className="text-gray-300 hover:text-glow-green transition-colors duration-300">
          How It Works
        </Link>
        <Link href="#faq" onClick={handleLinkClick} className="text-gray-300 hover:text-glow-green transition-colors duration-300">
          FAQ
        </Link>
        <button 
          className="mt-8 text-glow-pink" 
          onClick={onClose}
        >
          <i className="ri-close-line text-3xl"></i>
        </button>
      </div>
    </div>
  );
}
