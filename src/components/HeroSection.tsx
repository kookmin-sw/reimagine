

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-8 tracking-tight">
          KMUCS Reimagine 2035
        </h1>
        <p className="text-xl text-gray-700 mb-6 font-light leading-relaxed">
          2035년! 지금부터 약 10년 후의 당신 또는 KMUCS 졸업생을 상상해 보세요.
        </p>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          사회는 어떻게 바뀌었을까요? 어떤 직장들이 있을까요?<br />
          그 사회에서 어떤 기여를 하고 있으며 어떤 평판을 얻고 있을까요?
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