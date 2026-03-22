import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-900 tracking-tight">
            <Link to="/">KMUCS Reimagine 2035</Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('intro')} className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
              캠페인 소개
            </button>
            <button onClick={() => scrollToSection('vision')} className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
              미래 상상
            </button>
            <button onClick={() => scrollToSection('voices')} className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
              참여자 이야기
            </button>
            <Link to="/history" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
              연혁
            </Link>
            <Link to="/workshop" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
              워크샵
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm">
              캠페인 참여하기
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-blue-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-6">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('intro')} className="text-left text-gray-600 hover:text-blue-700 transition-colors font-medium">
                캠페인 소개
              </button>
              <button onClick={() => scrollToSection('vision')} className="text-left text-gray-600 hover:text-blue-700 transition-colors font-medium">
                미래 상상
              </button>
              <button onClick={() => scrollToSection('voices')} className="text-left text-gray-600 hover:text-blue-700 transition-colors font-medium">
                참여자 이야기
              </button>
              <Link to="/history" className="text-left text-gray-600 hover:text-blue-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                연혁
              </Link>
              <Link to="/workshop" className="text-left text-gray-600 hover:text-blue-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                워크샵
              </Link>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm w-full">
                캠페인 참여하기
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;