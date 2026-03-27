import CurrentRegionGlobe from './globe/CurrentRegionGlobe';

const currentRegionAggregatedResults = [
  { region: '서울', count: 238 },
  { region: '경기도', count: 17 },
  { region: '고양', count: 7 },
  { region: '남양주', count: 3 },
  { region: '성남', count: 3 },
  { region: '안산', count: 3 },
  { region: '부천', count: 2 },
  { region: '용인', count: 2 },
  { region: '광주(경기)', count: 1 },
  { region: '광주(미확인)', count: 1 },
  { region: '구리', count: 1 },
  { region: '김포', count: 1 },
  { region: '대전', count: 1 },
  { region: '시흥', count: 1 },
  { region: '안양', count: 1 },
  { region: '오산', count: 1 },
  { region: '의왕', count: 1 },
  { region: '의정부', count: 1 },
  { region: '인천', count: 1 },
  { region: '천안', count: 1 },
  { region: '파주', count: 1 },
  { region: '평택', count: 1 },
  { region: '하남', count: 1 }
];

const CurrentRegionSection: React.FC = () => {
  return (
    <section className="rounded-[1.75rem] border border-sky-100 bg-[linear-gradient(180deg,#f8fcff_0%,#eef7ff_100%)] px-5 py-6 shadow-sm sm:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Current Region</p>
        <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">내가 현재 살고있는 지역</h2>
      </div>

      <div className="mt-8 grid min-w-0 gap-6 xl:mt-10 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)] xl:items-start">
        <div className="min-w-0">
          <CurrentRegionGlobe />
        </div>

        <article className="min-w-0 rounded-[1.5rem] border border-sky-100 bg-white/95 p-5 shadow-sm sm:p-6 xl:sticky xl:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Top Regions</p>
          <h3 className="mt-3 text-xl font-bold text-stone-900 sm:text-2xl">응답이 많은 지역</h3>
          <div className="mt-5 space-y-3">
            {currentRegionAggregatedResults.slice(0, 6).map((item, index) => (
              <div
                key={item.region}
                className="flex items-center justify-between rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-3"
              >
                <div className="min-w-0 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-sky-700">
                    {index + 1}
                  </span>
                  <span className="truncate font-medium text-slate-800">{item.region}</span>
                </div>
                <span className="ml-3 shrink-0 text-sm font-semibold text-slate-600">{item.count}명</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default CurrentRegionSection;
