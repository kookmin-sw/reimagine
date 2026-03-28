

const FutureVisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-24 md:py-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-14 text-center text-blue-100">
          Reimagine 2035
        </h2>
        <div className="space-y-12 text-center">
          <div className="text-lg md:text-2xl font-light leading-relaxed text-white">
            AI와 윤리, <br className="block sm:hidden" />기술과 인간이 조화를 이루는 대학
          </div>
          <div className="text-lg md:text-2xl font-light leading-relaxed text-white">
            창의성과 협업, <br className="block sm:hidden" />글로벌 역량을 갖춘 융합 인재 양성
          </div>
          <div className="text-lg md:text-2xl font-light leading-relaxed text-white">
            실무 중심의 <br className="block sm:hidden" />혁신 교육으로 신뢰받는 소프트웨어 대학
          </div>
          <div className="text-lg md:text-2xl font-light leading-relaxed text-white">
            데이터와 AI로 <br className="block sm:hidden" />인간의 삶을 개선하는 글로벌 AI 전문가
          </div>
        </div>
        <br/>
        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/RquiqOrQsM8?si=D64TaP3JkkqyflL_"
              title="데이터와 AI로 인간의 삶을 개선하는 글로벌 AI 전문가"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <br/>
        <div className="mx-auto mt-6 grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            { id: '5xVHfpi85vA', title: '미니 영상 1' },
            { id: 'pIwVkaHdiLs', title: '미니 영상 2' },
            { id: 'BWQHCxTn2mg', title: '미니 영상 3' }
          ].map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 shadow-[0_16px_40px_rgba(15,23,42,0.35)]"
            >
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureVisionSection;
