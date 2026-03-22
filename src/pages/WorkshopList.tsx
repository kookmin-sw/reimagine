import { Link } from 'react-router-dom';
import Header from '../components/Header';

const WorkshopList: React.FC = () => {
  const workshops = [
    {
      id: 1,
      title: '미래 교육 워크샵',
      date: '2024년 3월 15일',
      description: '학생들과 함께 2035년 교육의 모습을 상상하는 워크샵'
    },
    {
      id: 2,
      title: '기술과 인간 워크샵',
      date: '2024년 3월 22일',
      description: 'AI와 인간의 협업에 대한 토론과 아이디어 공유'
    },
    {
      id: 3,
      title: '글로벌 협업 워크샵',
      date: '2024년 3월 29일',
      description: '국제적인 협업과 글로벌 KMUCS의 미래 비전'
    }
  ];

  return (
    <div>
      <Header />
      <div className="pt-24 pb-20 md:pb-28 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Reimagine 2035 Workshop
          </h1>
          <p className="text-xl text-gray-700 mb-16 text-center max-w-2xl mx-auto leading-relaxed">
            학생들의 상상을 인터뷰로 담아낸 캠페인 프로그램입니다.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{workshop.title}</h3>
                <p className="text-blue-600 mb-6 font-medium">{workshop.date}</p>
                <p className="text-gray-600 mb-8 leading-relaxed">{workshop.description}</p>
                <Link
                  to={`/workshop/${workshop.id}`}
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm"
                >
                  자세히 보기
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopList;