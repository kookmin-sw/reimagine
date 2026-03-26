import { Link } from 'react-router-dom';

const VoicesSection: React.FC = () => {
  const workshopHighlights = [
    {
      title: '학생 인터뷰 중심',
      description: '참여자들이 상상한 2035년의 대학과 사회, 그리고 자신의 미래를 인터뷰 형식으로 풀어냅니다.'
    },
    {
      title: '팀별 아이디어 확장',
      description: '대화를 통해 나온 키워드를 바탕으로 미래 비전과 교육 방향을 함께 구체화합니다.'
    },
    {
      title: '결과 아카이빙',
      description: '워크샵에서 나온 이야기와 기록을 모아 KMUCS Reimagine 2035의 흐름으로 남깁니다.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-16 text-center">
          워크샵 소개
        </h2>
        <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-gray-600 md:text-xl">
          Reimagine 2035 워크샵은 학생들의 생각과 상상을 인터뷰와 대화로 모아,
          앞으로의 KMUCS가 어떤 방향으로 나아가야 할지 함께 그려보는 프로그램입니다.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {workshopHighlights.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="mb-4 text-xl font-semibold text-blue-900">{item.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/workshop"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm"
          >
            워크샵 자세히 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;
