import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const WorkshopDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - 실제로는 API나 데이터에서 가져올 것
  const workshop = {
    id: parseInt(id || '1'),
    title: id === '1' ? 'Reimagine 2035 워크숍' : '번개 워크숍',
    date: id === '1' ? '2025년 6월 18일' : '2025년 10월 3일',
    location: '국민대학교',
    participants: id === '1' ? 15 : 20,
    description: id === '1' 
      ? '학생들의 다양한 상상들을 인터뷰를 통해 담아내는 워크숍입니다.'
      : 'KMUCS Reimagine 2035 프로젝트의 일환으로, 학생들의 다양한 상상들을 인터뷰를 통해 담아내고자 한 활동입니다.',
    activities: [
      '인터뷰 방식으로 진행',
      '미래 교육에 대한 질문 구성',
      '학생들의 아이디어 수집'
    ],
    interviews: [
      { question: 'Q1. 자기소개', answer: id === '1' ? '소프트웨어학부 학생입니다.' : '컴퓨터공학과 학생입니다.' },
      { question: 'Q2. 2035 상상', answer: id === '1' ? 'AI 튜터와 함께하는 개인화된 교육이 보편화될 것입니다.' : '사회는 AI와 인간이 조화를 이루는 방향으로 발전할 것입니다.' },
      { question: 'Q3. KMUCS 역할', answer: id === '1' ? '혁신적인 교육 방법을 선도하는 역할을 할 수 있습니다.' : 'AI와 윤리, 창의성과 협업을 겸비한 인재를 양성해야 합니다.' },
      { question: 'Q4. 필요한 변화', answer: id === '1' ? '더 많은 실무 중심 프로젝트와 국제 협력이 필요합니다.' : '글로벌 역량과 융합 교육을 강화해야 합니다.' }
    ]
  };

  return (
    <div>
      <Header />
      <article className="pt-24 pb-20 md:pb-28 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              {workshop.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-600 border-b border-gray-200 pb-6">
              <div><span className="font-medium">날짜:</span> {workshop.date}</div>
              <div><span className="font-medium">장소:</span> {workshop.location}</div>
              <div><span className="font-medium">참여 인원:</span> {workshop.participants}명</div>
            </div>
          </header>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">워크샵 개요</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{workshop.description}</p>
          </section>

          {/* Activities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">활동 내용</h2>
            <ul className="space-y-3">
              {workshop.activities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 shrink-0"></span>
                  <span className="text-gray-700 leading-relaxed">{activity}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Interviews */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">인터뷰 일부</h2>
            <div className="space-y-8">
              {workshop.interviews.map((interview, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-600 mb-3">{interview.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{interview.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Image placeholder */}
          <section className="mb-12">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">워크샵 이미지/영상 영역</span>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg font-medium shadow-lg">
              캠페인 참여하기
            </button>
          </section>
        </div>
      </article>
    </div>
  );
};

export default WorkshopDetail;