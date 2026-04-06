import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const History: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const timeline = [
    { year: '1994', event: '전산과학과', description: '국민대학교 컴퓨터 교육의 시작점이 마련되었습니다.' },
    { year: '1997', event: '자연과학부', description: '학제 개편을 통해 자연과학부 체계 안에서 교육 기반을 확장했습니다.' },
    { year: '1998', event: '컴퓨터학부', description: '컴퓨터학부로 개편되며 전공 정체성을 더욱 분명하게 갖추었습니다.' },
    { year: '2006', event: '컴퓨터공학부', description: '공학 중심 교육과 실무 역량 강화를 위한 기반을 다졌습니다.' },
    { year: '2011.08', event: '과학관에서 미래관으로 이전', description: '교육과 연구 환경 확장을 위해 미래관으로 이전했습니다.' },
    { year: '2014', event: '무한상상실 개설', description: '학생들의 창의적 상상과 실험을 지원하는 공간이 마련되었습니다.' },
    { year: '2014.07', event: '미래창조과학부 주관 SW 특성화 대학 선정', description: '소프트웨어 특성화 교육 역량을 인정받아 주요 지원 사업에 선정되었습니다.' },
    { year: '2016', event: '소프트웨어중심대학 지원 사업 선정', description: '소프트웨어 교육 혁신과 융합형 인재 양성을 위한 도약의 계기를 마련했습니다.' },
    { year: '2017', event: '소프트웨어융합대학 소프트웨어학부', description: '소프트웨어융합대학 체계 속에서 소프트웨어학부로 새롭게 자리 잡았습니다.' },
    { year: '2022', event: '인공지능학부 신설', description: 'AI 분야 전문 인재 양성을 위해 인공지능학부를 새롭게 신설했습니다.' }
  ];

  return (
    <div>
      <Header />
      <div className="pt-28 pb-20 sm:pt-24 md:pb-28 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12 overflow-hidden rounded-3xl bg-white sm:bg-transparent">
            <div className="hidden grid-cols-3 gap-2 p-4 pb-40 sm:grid sm:pb-4">
              <div className="h-36 rounded-2xl bg-[url('https://via.placeholder.com/400x300?text=History+1')] bg-cover bg-center shadow-inner sm:h-44" />
              <div className="h-36 rounded-2xl bg-[url('https://via.placeholder.com/400x300?text=History+2')] bg-cover bg-center shadow-inner sm:h-44" />
              <div className="h-36 rounded-2xl bg-[url('https://via.placeholder.com/400x300?text=History+3')] bg-cover bg-center shadow-inner sm:h-44" />
            </div>

            <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_center,transparent_28%,rgba(249,250,251,0.16)_56%,rgba(249,250,251,0.76)_82%,#f9fafb_100%)] sm:block" />
            <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-16 bg-[linear-gradient(180deg,#f9fafb_0%,rgba(249,250,251,0)_100%)] sm:block" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-28 bg-[linear-gradient(180deg,rgba(249,250,251,0)_0%,#f9fafb_92%)] sm:block" />

            <div className="px-5 py-6 text-center sm:absolute sm:inset-x-0 sm:bottom-0 sm:px-6 sm:pt-3 sm:pb-5">
              <p className="text-xs font-semibold uppercase leading-[1.8] tracking-[0.24em] text-blue-700/65 sm:text-sm">History of KMUCS</p>
              <h2 className="mt-3 text-xl font-bold leading-tight text-slate-900 sm:text-2xl">시간 위에 쌓인 KMUCS의 성장</h2>
              <br/>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                국민대학교 소프트웨어융합대학은<br/>1994년 전산과학과를 시작으로, 소프트웨어와 AI 교육의 흐름 속에서 꾸준히 확장과 변화를 이어왔습니다.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 sm:left-8"></div>

            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-lg sm:h-16 sm:w-16 sm:text-base">
                    <span className="flex w-full flex-col items-center justify-center text-center leading-tight">
                      {item.year.includes('.') ? (
                        <>
                          <span>{item.year.split('.')[0]}</span>
                          <span className="text-[9px] font-medium sm:text-[11px]">
                            {parseInt(item.year.split('.')[1], 10)}월
                          </span>
                        </>
                      ) : (
                        item.year
                      )}
                    </span>
                  </div>
                  <div className="ml-4 flex-1 rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-200 hover:border-blue-100 hover:shadow-md sm:ml-8">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="flex w-full items-center justify-between px-4 py-4 text-left sm:px-6 sm:py-5"
                      aria-expanded={openIndex === index}
                    >
                      <h3 className="pr-4 text-sm font-semibold text-gray-900 sm:pr-6 sm:text-lg">{item.event}</h3>
                      <span
                        className={`text-lg leading-none text-blue-600 transition-transform duration-200 sm:text-xl ${
                          openIndex === index ? 'rotate-45' : ''
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-4 pt-1 text-xs text-gray-600 sm:px-6 sm:pb-6 sm:text-sm">
                        <p className="leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-20 border-t border-blue-100 pt-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700/65 sm:text-sm">Next KMUCS</p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
              미래의 KMUCS는
              <br />
              여러분이 함께 만들어갑니다
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-slate-600">
              지금까지의 연혁 위에, 앞으로의 비전과 변화는 다시 여러분의 상상과 선택으로 이어집니다.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://alumni.cs.kookmin.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/70 px-6 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-800"
              >
                국민대학교 소프트웨어융합대학 바로가기
              </a>
              <a
                href="https://software.kookmin.ac.kr/software/index.do"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/70 px-6 py-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-800"
              >
                KMUCS 동문회 바로가기
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
