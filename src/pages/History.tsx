import Header from '../components/Header';

const History: React.FC = () => {
  const timeline = [
    { year: '1994', event: 'KMUCS 설립', description: '국민대학교 소프트웨어융합대학의 시작' },
    { year: '2014', event: '무한상상실 개설', description: '학생들의 창의적 상상을 위한 공간 마련' },
    { year: '2016', event: '소프트웨어중심대학 선정', description: '글로벌 멘토링, 산학협력 체계 구축' },
    { year: '2022', event: '인공지능학부 설립', description: '4차 산업혁명을 주도할 글로벌 AI 인재 양성 시작' },
    { year: '2025', event: 'Reimagine 2035 캠페인', description: '미래 비전을 함께 상상하는 캠페인 진행' }
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
            국민대학교 소프트웨어융합대학은 1994년 설립 이후, 혁신적인 교육과 연구로 발전해 왔습니다.
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
              이러한 발전 위에서 KMUCS는 미래를 준비하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;