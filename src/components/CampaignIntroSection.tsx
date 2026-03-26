

const CampaignIntroSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center">
          프로젝트 소개
        </h2>
        <p className="text-xl text-gray-700 mb-16 text-center leading-relaxed">
          KMUCS Reimagine 2035! 는<br/>학생·교수·졸업생·타과생 등, 다양한 구성원의 의견을 반영하여<br />
          미래 비전을 함께 상상하고 만들어가는 프로젝트입니다.
        </p>
        <div className="flex justify-center space-x-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-3">Past</div>
            <div className="text-gray-600 font-medium">역사와 전통</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-3">Now</div>
            <div className="text-gray-600 font-medium">현재의 성장</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-3">2035</div>
            <div className="text-gray-600 font-medium">미래의 비전</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignIntroSection;
