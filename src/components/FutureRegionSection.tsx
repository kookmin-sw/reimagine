import CurrentRegionGlobe from './globe/CurrentRegionGlobe';

const futureRegionAggregatedResults = [
  { region: '서울', count: 120 },
  { region: '경기도', count: 22 },
  { region: '실리콘밸리', count: 20 },
  { region: '도쿄', count: 9 },
  { region: '판교', count: 8 },
  { region: 'Los Angeles', count: 7 },
  { region: '뉴욕', count: 7 },
  { region: '샌프란시스코', count: 6 },
  { region: '기타/미정', count: 6 },
  { region: '부산', count: 5 },
  { region: '대전', count: 5 },
  { region: '미국(기타)', count: 5 },
  { region: '디지털노마드/다중지역', count: 4 },
  { region: '성남', count: 4 },
  { region: '분당', count: 3 },
  { region: '싱가포르', count: 3 },
  { region: '우주/화성', count: 3 },
  { region: '파리', count: 3 },
  { region: '고양', count: 1 },
  { region: '하남', count: 1 },
  { region: '세종', count: 1 },
  { region: '울산', count: 1 },
  { region: '창원', count: 1 },
  { region: '텍사스(댈러스)', count: 1 },
  { region: '휴스턴', count: 1 },
  { region: '킹스톤', count: 1 },
  { region: '몰타', count: 1 },
  { region: '스위스', count: 1 },
  { region: '뮌헨', count: 1 },
  { region: '헬싱키', count: 1 },
  { region: '런던', count: 1 },
  { region: '유럽(기타)', count: 1 },
  { region: '부천', count: 2 },
  { region: '일산', count: 2 },
  { region: '대구', count: 2 },
  { region: '애틀랜타', count: 2 },
  { region: '오사카', count: 2 },
  { region: '토론토', count: 2 },
  { region: '베를린', count: 2 },
  { region: '호주', count: 2 }
].sort((a, b) => b.count - a.count || a.region.localeCompare(b.region, 'ko'));

const futureRegionGlobePoints = [
  { region: '서울', lat: 37.5665, lng: 126.978, count: 168 },
  { region: '부산', lat: 35.1796, lng: 129.0756, count: 5 },
  { region: '대전', lat: 36.3504, lng: 127.3845, count: 5 },
  { region: '대구', lat: 35.8714, lng: 128.6014, count: 2 },
  { region: '세종', lat: 36.48, lng: 127.289, count: 1 },
  { region: '울산', lat: 35.5384, lng: 129.3114, count: 1 },
  { region: '창원', lat: 35.2281, lng: 128.6811, count: 1 },
  { region: '실리콘밸리', lat: 37.3875, lng: -122.0575, count: 20 },
  { region: '샌프란시스코', lat: 37.7749, lng: -122.4194, count: 6 },
  { region: 'Los Angeles', lat: 34.0522, lng: -118.2437, count: 7 },
  { region: '뉴욕', lat: 40.7128, lng: -74.006, count: 7 },
  { region: '애틀랜타', lat: 33.749, lng: -84.388, count: 2 },
  { region: '텍사스(댈러스)', lat: 32.7767, lng: -96.797, count: 1 },
  { region: '휴스턴', lat: 29.7604, lng: -95.3698, count: 1 },
  { region: '미국(기타)', lat: 39.8283, lng: -98.5795, count: 5 },
  { region: '도쿄', lat: 35.6762, lng: 139.6503, count: 9 },
  { region: '오사카', lat: 34.6937, lng: 135.5023, count: 2 },
  { region: '싱가포르', lat: 1.3521, lng: 103.8198, count: 3 },
  { region: '파리', lat: 48.8566, lng: 2.3522, count: 3 },
  { region: '토론토', lat: 43.6532, lng: -79.3832, count: 2 },
  { region: '킹스톤', lat: 44.2312, lng: -76.486, count: 1 },
  { region: '몰타', lat: 35.9375, lng: 14.3754, count: 1 },
  { region: '스위스', lat: 46.8182, lng: 8.2275, count: 1 },
  { region: '베를린', lat: 52.52, lng: 13.405, count: 2 },
  { region: '뮌헨', lat: 48.1351, lng: 11.582, count: 1 },
  { region: '헬싱키', lat: 60.1699, lng: 24.9384, count: 1 },
  { region: '호주', lat: -33.8688, lng: 151.2093, count: 2 },
  { region: '런던', lat: 51.5072, lng: -0.1276, count: 1 },
  { region: '유럽(기타)', lat: 50.1109, lng: 8.6821, count: 1 }
];

const FutureRegionSection: React.FC = () => {
  return (
    <section className="rounded-[1.75rem] border border-sky-100 bg-[linear-gradient(180deg,#f8fcff_0%,#eef7ff_100%)] px-5 py-6 shadow-sm sm:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Future Region</p>
        <h2 className="mt-3 text-2xl font-bold text-stone-900 sm:text-3xl">미래에 내가 살고 있을 지역</h2>
      </div>

      <div className="mt-8 grid min-w-0 gap-6 xl:mt-10 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.75fr)] xl:items-start">
        <div className="min-w-0">
          <CurrentRegionGlobe pointsOverride={futureRegionGlobePoints} collapseToSeoul={false} />
        </div>

        <article className="min-w-0 rounded-[1.5rem] border border-sky-100 bg-white/95 p-5 shadow-sm sm:p-6 xl:sticky xl:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Top Regions</p>
          <h3 className="mt-3 text-xl font-bold text-stone-900 sm:text-2xl">응답이 많은 지역</h3>
          <div className="mt-5 space-y-3">
            {futureRegionAggregatedResults.slice(0, 6).map((item, index) => (
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

export default FutureRegionSection;
