import { Link } from 'react-router-dom';

const VoicesSection: React.FC = () => {
  const voices = [
    {
      quote: "기술만 잘하는 대학이 아니라, AI와 윤리, 창의성과 협업을 겸비한 인재를 양성하는 대학이 되었으면 좋겠어요.",
      author: "소프트웨어학부 학생"
    },
    {
      quote: "2035년의 KMUCS는 글로벌 역량과 융합 교육을 강화하여 세계적 수준의 소프트웨어 인재를 배출하는 대학이길 바랍니다.",
      author: "인공지능학부 학생"
    },
    {
      quote: "미래를 배우는 곳이 아니라, 미래를 만들어가는 곳으로 발전하여 사회 문제를 해결하는 혁신적인 교육을 제공했으면 합니다.",
      author: "KMUCS 재학생"
    }
  ];

  return (
    <section id="voices" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-16 text-center">
          참여자 이야기
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {voices.map((voice, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{voice.quote}"
              </blockquote>
              <cite className="text-blue-600 font-medium text-base">— {voice.author}</cite>
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