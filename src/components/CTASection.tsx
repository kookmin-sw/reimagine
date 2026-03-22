

const CTASection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-linear-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
          당신이 상상하는 2035년의 KMUCS는<br />
          어떤 모습인가요?
        </h2>
        <button className="bg-white text-blue-600 px-12 py-5 rounded-lg hover:bg-gray-100 transition-all duration-200 text-xl font-medium shadow-lg">
          캠페인 참여하기
        </button>
      </div>
    </section>
  );
};

export default CTASection;