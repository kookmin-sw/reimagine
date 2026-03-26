import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SURVEY_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSf11MVsB7jnMCjfwTzN11DU7Xc0BqGdu8Tc_yHCqP1fINvKuA/viewform';

const scrollToSectionWithOffset = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  const header = document.querySelector('header');

  if (!element) {
    return;
  }

  const headerOffset = header instanceof HTMLElement ? header.offsetHeight : 108;
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top, behavior: 'smooth' });
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const hideSurveyCta = location.pathname === '/' || location.pathname === '/survey';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setIsMenuOpen(false);
      return;
    }

    scrollToSectionWithOffset(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="shrink-0 text-xl font-bold text-blue-900 tracking-tight sm:text-2xl">
            <Link to="/">KMUCS Reimagine 2035!</Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('intro')} className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
              프로젝트 소개
            </button>
            <Link to="/history" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
              연혁
            </Link>
            <Link to="/workshop" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
              워크샵
            </Link>
            <Link to="/survey" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
              설문 조사
            </Link>
            {!hideSurveyCta && (
              <a
                href={SURVEY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm"
              >
                설문조사 참여하기
              </a>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden text-gray-600 hover:text-blue-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 py-6">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('intro')} className="text-left text-gray-600 hover:text-blue-700 transition-colors font-medium">
                프로젝트 소개
              </button>
              <Link to="/history" className="text-left text-gray-600 hover:text-blue-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                연혁
              </Link>
              <Link to="/workshop" className="text-left text-gray-600 hover:text-blue-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                워크샵
              </Link>
              <Link to="/survey" className="text-left text-gray-600 hover:text-blue-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                설문 조사
              </Link>
              {!hideSurveyCta && (
                <a
                  href={SURVEY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm w-full text-center"
                >
                  설문조사 참여하기
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
