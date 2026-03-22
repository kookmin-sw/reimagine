import Header from '../components/Header';

const History: React.FC = () => {
  const timeline = [
    { year: '20XX', event: '설립', description: 'KMUCS의 시작' },
    { year: '20XX', event: '학과 개편', description: '교육 프로그램 확장' },
    { year: '20XX', event: '프로젝트 도입', description: '실무 중심 교육 강화' },
    { year: '20XX', event: '현재', description: '지속적인 혁신과 성장' }
  ];

  return (
    <div>
      <Header />
      <div className="pt-24 pb-20 md:pb-28 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 text-center">
            KMUCS의 성장
          </h1>
          <p className="text-xl text-gray-700 mb-16 text-center max-w-2xl mx-auto leading-relaxed">
            KMUCS가 걸어온 시간과 변화를 소개합니다.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.year}
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.event}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700">
              이러한 흐름 위에서 KMUCS는 미래를 준비하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;