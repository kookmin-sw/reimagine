import { Link } from 'react-router-dom';
import Header from '../components/Header';

const WorkshopList: React.FC = () => {
  const workshops = [
    {
      id: 1,
      title: 'Reimagine 2035 워크숍',
      date: '2025년 6월 18일',
      description: '학생들의 다양한 상상들을 인터뷰를 통해 담아내는 워크숍'
    },
    {
      id: 2,
      title: '번개 워크숍',
      date: '2025년 10월 3일',
      description: 'KMUCS Reimagine 2035 프로젝트의 일환으로 진행된 인터뷰 워크숍'
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
            재학생들이 모여 "KMUCS Reimagine 2035!"라는 주제로 워크숍을 진행했습니다.
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