import Header from '../components/Header';
import Footer from '../components/Footer';
import CurrentRegionSection from '../components/CurrentRegionSection';
import FutureRegionSection from '../components/FutureRegionSection';

const SURVEY_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSf11MVsB7jnMCjfwTzN11DU7Xc0BqGdu8Tc_yHCqP1fINvKuA/viewform';
const EMBEDDED_SURVEY_URL = `${SURVEY_URL}?embedded=true`;
const CANVA_RESULTS_URL =
  'https://www.canva.com/design/DAG3vBRJUDU/P-7yNWHYq5HpJOWYbkxj1Q/view?embed';

const Survey: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-slate-50 pt-24 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <section className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_58%,#60a5fa_100%)] px-6 py-12 text-white shadow-xl sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100/90">Survey</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Reimagine 2035 <br className="block md:hidden" />설문 조사
            </h1>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Questions</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">설문 문항</h2>

              <div className="mt-8 space-y-6">
                <div className="sm:rounded-2xl sm:bg-slate-50 sm:p-6">
                  <p className="text-sm font-semibold text-blue-700">첫 번째 설문</p>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    2035년! 지금부터 약 10년 후의 당신 또는 KMUCS 졸업생을 상상해 보세요. 사회는 어떻게 바뀌었을까요? 어떤
                    직장들이 있을까요? 그 직장에서 무슨 일을 하고 있을까요? 그 사회에서 어떤 기여를 하고 있으며 어떤 평판을
                    얻고 있을까요? 2035년의 당신 또는 KMUCS 졸업생에 대해서 상상하고 자유롭게 이야기해보세요.
                  </p>
                </div>

                <div className="sm:rounded-2xl sm:bg-slate-50 sm:p-6">
                  <p className="text-sm font-semibold text-blue-700">두 번째 설문</p>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    첫 번째 설문에서 상상한 2035년의 당신 또는 KMUCS 졸업생이 있게 된 것은 지금부터 10년 동안에 있게 될
                    국민대학교 소프트웨어융합대학의 어떤 것 또는 특징 때문이라고 말할 수 있을까요? 지금 있는 것도 좋지만 당신의
                    상상으로 인해서 새로 생겨날 수 있는 모든 것을 포함하면 더욱 좋습니다.
                  </p>
                </div>

                <div className="sm:rounded-2xl sm:bg-slate-50 sm:p-6">
                  <p className="text-sm font-semibold text-blue-700">세 번째 설문</p>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                     2035년, 당신의 상상 속의 도시는?   
                    2035년에는 어느 도시에서 살고 있을 것 같나요?
                  </p>  
                  <p className="mt-3 text-small leading-7 text-slate-400">
                    (예: 서울, 대전, 부산, LA, 샌프란시스코, 실리콘밸리, 어바인, 런던, 파리, 로마, 도쿄 등)
                  </p>
                </div>
              </div>
            </article>

            <article className="self-start overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 px-8 py-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Embedded Form</p>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">페이지에서 바로 설문 작성</h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  임베드가 보이지 않거나 작성이 불편하면
                  {' '}
                  <a
                    href={SURVEY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-800"
                  >
                    새 창에서 열기
                  </a>
                  로 참여할 수 있습니다.
                </p>
              </div>
              <iframe
                title="KMUCS Reimagine 2035 설문조사"
                src={EMBEDDED_SURVEY_URL}
                className="h-[1040px] w-full bg-white lg:h-[731px]"
                loading="lazy"
              >
                로드 중…
              </iframe>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Results</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">KMUCS Reimagine 2035! 설문조사 결과</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                국민대학교 소프트웨어융합대학의 ‘KMUCS Reimagine 2035’ 설문조사는 학생, 교수, 산업단, 타과생 등 다양한
                구성원의 의견이 반영되었습니다.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Key Keywords</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['AI', '창의성', '혁신', '윤리', '협업', '글로벌', '융합', '실무', '신뢰', '성장'].map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-4 text-base leading-7 text-slate-600">
                <p>
                  학부별로는 소프트웨어학부가 ‘AI를 창의적으로 활용해 사회문제를 해결하는 인재’를, 인공지능학부가 ‘데이터와 AI를
                  통해 인간의 삶을 개선하는 신뢰받는 전문가’를, 교수진은 ‘윤리와 책임 중심의 교육 혁신’을, SW중심대학사업단은
                  ‘산학협력과 창업 문화가 자리 잡은 실무 중심 대학’을, 타과생은 ‘기술과 인문이 공존하는 융합형 인재상’을
                  강조했습니다.
                </p>
                <p>
                  전반적으로 KMUCS의 미래 비전은 ‘AI와 윤리, 기술과 인간이 조화를 이루는 실무 중심의 글로벌 융합대학’으로,
                  교육의 혁신, 산업 연계, 윤리적 가치 확립을 통한 신뢰받는 소프트웨어 인재 양성이 핵심 방향으로 제시되었습니다.
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <iframe
                  title="KMUCS Reimagine 2035 설문조사 결과 Canva"
                  src={CANVA_RESULTS_URL}
                  className="h-[420px] w-full bg-white sm:h-[520px] lg:h-[720px]"
                  loading="lazy"
                  allowFullScreen
                >
                  로드 중…
                </iframe>
              </div>
            </article>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <CurrentRegionSection />
                <FutureRegionSection />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Survey;
