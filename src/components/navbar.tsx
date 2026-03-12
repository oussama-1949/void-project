import { useState } from 'react';
import logo from '../assets/logo.png';
import { ChevronRight } from 'lucide-react'; // Import the icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Nos offres', href: '#' },
    { name: 'Nos jeux', href: '#' },
    { name: 'Album', href: '#' },
    { name: 'A propos', href: '#' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="cursor-pointer">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-10 w-auto object-contain" 
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[#334155] hover:text-brand transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            
            {/* New Button with Arrow */}
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#16A34A] to-[#0B6B3A] text-white px-6 py-2.5 rounded-lg font-normal hover:brightness-110 transition-all active:scale-95 text-sm shadow-md shadow-green-900/20">
  Demander une démo
  <ChevronRight size={18} strokeWidth={2.5} />
</button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-[#334155] font-medium py-2">
                {link.name}
              </a>
            ))}
            <button className="flex items-center justify-between w-full bg-brand text-white px-5 py-3 rounded-xl font-bold">
              Demander une démo
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;