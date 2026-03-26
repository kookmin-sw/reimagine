import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WorkshopList: React.FC = () => {
  const workshops = [
    {
      slug: 'reimagine-2035',
      title: 'Reimagine 2035 워크숍',
      date: '2025년 6월 18일',
      description: '학생들의 다양한 상상들을 인터뷰를 통해 담아내는 워크숍'
    },
    {
      slug: 'lightning',
      title: '번개 워크숍',
      date: '2025년 10월 3일',
      description: 'KMUCS Reimagine 2035! 프로젝트의 일환으로 진행된 인터뷰 워크숍'
    }
  ];

  return (
    <div>
      <Header />
      <div className="pt-24 pb-20 md:pb-28 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500">
            <div className="grid grid-cols-3 gap-2 p-4">
              <div className="h-40 bg-[url('https://via.placeholder.com/400x300?text=Mockup+1')] bg-cover bg-center rounded-xl shadow-inner" />
              <div className="h-40 bg-[url('https://via.placeholder.com/400x300?text=Mockup+2')] bg-cover bg-center rounded-xl shadow-inner" />
              <div className="h-40 bg-[url('https://via.placeholder.com/400x300?text=Mockup+3')] bg-cover bg-center rounded-xl shadow-inner" />
            </div>
            <div className="px-6 py-4 text-white text-center">
              <h2 className="text-2xl font-bold">Reimagine 2035 ! Workshop</h2>
              <p className="text-sm opacity-90">모킹업 이미지로 프로젝트 느낌을 미리 보여줍니다.</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {workshops.map((workshop) => (
              <div key={workshop.slug} className="w-full bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{workshop.title}</h3>
                <p className="text-blue-600 mb-6 font-medium">{workshop.date}</p>
                <p className="text-gray-600 mb-8 leading-relaxed">{workshop.description}</p>
                <Link
                  to={`/workshop/${workshop.slug}`}
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm"
                >
                  자세히 보기
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkshopList;
