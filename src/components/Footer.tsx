import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 space-y-1 sm:space-y-0">
            <span>TEL: 02-910-5047, 4790</span>
            <span>Email: sw2017@kookmin.ac.kr</span>
            <span>소프트웨어융합대학 홈페이지: <a href="https://cs.kookmin.ac.kr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">cs.kookmin.ac.kr</a></span>
          </div>
          <div className="pt-2">
            <p>02707 서울특별시 성북구 정릉로 77 국민대학교</p>
            <p>KOOKMIN UNIVERSITY, 77 JEONGNEUNG-RO SEONGBUK-GU, SEOUL, 02707, KOREA</p>
            <p className="pt-2 font-medium">© 2025 KMUCS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
