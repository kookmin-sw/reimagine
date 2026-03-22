import { Link } from 'react-router-dom';

const TimeFlowSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-6">Past</div>
            <div className="text-xl text-gray-700 mb-2">KMUCS의 시작</div>
            <div className="text-gray-600">역사와 전통의 기반</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-6">Now</div>
            <div className="text-xl text-gray-700 mb-2">지금의 성장과 변화</div>
            <div className="text-gray-600">현재의 혁신과 도전</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-6">2035</div>
            <div className="text-xl text-gray-700 mb-2">우리가 함께 그려갈 미래</div>
            <div className="text-gray-600">미래의 비전 실현</div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link
            to="/history"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm"
          >
            연혁 자세히 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TimeFlowSection;