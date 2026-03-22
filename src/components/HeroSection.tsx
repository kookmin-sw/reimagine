

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-8 tracking-tight">
          KMUCS Reimagine 2035
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-light leading-relaxed">
          2035년의 KMUCS는 어떤 모습일까요?
        </p>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          과거의 성장과 현재의 가능성을 바탕으로,<br />
          미래의 KMUCS를 함께 상상해보는 캠페인
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 text-xl font-medium shadow-lg">
            캠페인 참여하기
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 text-xl font-medium">
            캠페인 알아보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;