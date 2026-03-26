import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = '', delayMs = 0 }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const node = ref.current;

    if (!node || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px'
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(42px) scale(0.985)',
        filter: isVisible ? 'blur(0px)' : 'blur(10px)',
        transition: `opacity 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 1100ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, filter 1100ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
        willChange: 'opacity, transform, filter'
      }}
    >
      {children}
    </section>
  );
};

const WorkshopDetail2: React.FC = () => {
  const pageBackground =
    'bg-[linear-gradient(180deg,#f8fbff_0%,#f6fbff_18%,#ffffff_44%,#fbfdff_72%,#f7fbff_100%)]';

  const workshop = {
    title: '번개 워크숍',
    date: '2025년 10월 3일',
    location: '국민대학교',
    participants: 20,
    description:
      '\'KMUCS Reimagine 2035\' 프로젝트의 일환으로, 학생들의 다양한 상상들을 인터뷰를 통해 담아낸 워크숍입니다.',
    introduction: {
      title: '학생들의 상상을 인터뷰로 기록한 워크숍',
      content: [
        '번개 워크숍은 \'KMUCS Reimagine 2035\' 프로젝트의 일환으로, 학생들의 다양한 상상들을 인터뷰를 통해 담아내고자 한 활동입니다.',
        '인터뷰는 네 가지 주요 질문을 중심으로 전개됩니다.',
        '자기소개, 2035년의 상상, KMUCS의 기여, 그리고 앞으로 필요한 변화에 대한 질문을 따라가며',
        '참여자들은 미래 사회와 기술의 변화 속에서 KMUCS가 어떤 대학으로 발전해야 하는지, 그리고 그 안에서 자신이 어떤 모습으로 성장하고 싶은지를 진솔하게 이야기합니다.'
      ]
    },
    futureSummary: {
      title: '2035년에 나는 어떤 모습일까 ?',
      roles: [
        {
          title: '자율주행 엔지니어',
          note: '이동 기술을 직접 설계하고 구현하는 미래',
          className: 'h-60 w-60 md:absolute md:left-[2%] md:top-[14%] md:h-52 md:w-52 md:-rotate-6'
        },
        {
          title: 'AI 연구/개발자',
          note: '기술을 사용하는 사람이 아니라 만드는 사람으로 성장',
          className: 'h-72 w-72 md:absolute md:left-[28%] md:top-[-2%] md:h-80 md:w-80 md:rotate-3'
        },
        {
          title: 'AI 융합 연구원',
          note: '다양한 산업과 연결되는 융합형 커리어를 상상',
          className: 'h-[15.5rem] w-[15.5rem] md:absolute md:right-[6%] md:top-[18%] md:h-56 md:w-56 md:-rotate-8'
        },
        {
          title: '기업·연구소 활동',
          note: '대학원 이후 연구와 산업 현장을 함께 경험하는 경로',
          className: 'h-[17rem] w-[17rem] md:absolute md:left-[10%] md:bottom-[-1%] md:h-[17rem] md:w-[17rem] md:rotate-[7deg]'
        },
        {
          title: '글로벌 협업 환경',
          note: '국경을 넘는 팀과 함께 일하는 미래를 전제',
          className: 'h-[14rem] w-[14rem] md:absolute md:right-[12%] md:bottom-[1%] md:h-48 md:w-48 md:rotate-[11deg]'
        }
      ]
    },
    stats: [
      { label: '날짜', value: '2025년 10월 3일' },
      { label: '장소', value: '국민대학교' },
      { label: '참여 인원', value: '20명' }
    ],
    videos: [{ id: 'S8wk4nzPK20', title: '번개 워크숍 영상 1' }]
  };

  return (
    <div className={pageBackground}>
      <style>{`
        @keyframes floatBubble {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
        }
      `}</style>
      <Header />
      <article className={`min-h-screen overflow-hidden pt-24 pb-20 text-slate-900 md:pb-28 ${pageBackground}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="relative min-h-[88vh] overflow-hidden px-6 py-10 sm:px-8 md:px-12 md:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#d9f4ee_0,#eef8ff_38%,transparent_74%)]" />
            <div className="absolute left-[-10%] top-[8%] h-72 w-72 rounded-full bg-cyan-200/35 blur-3xl" />
            <div className="absolute bottom-[-8%] right-[-4%] h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
            <div className="absolute inset-x-[12%] top-[18%] h-px bg-slate-200/80" />

            <div className="relative flex min-h-[74vh] flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.45em] text-sky-700/80">Lightning Workshop</p>
                <Link
                  to="/workshop"
                  className="inline-flex rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-700 backdrop-blur-sm transition-colors duration-300 hover:bg-white"
                >
                  다른 워크숍 보기
                </Link>
              </div>

              <div className="max-w-5xl py-12 md:py-20">
                <div
                  className="transition-all duration-1400 ease-out"
                  style={{
                    opacity: 1,
                    transform: 'translateY(0px)'
                  }}
                >
                  <p className="mb-4 max-w-xl text-[0.9rem] leading-6 text-slate-500 md:text-[0.95rem]">
                    학생들의 다양한 상상을 인터뷰를 통해 담아내며, KMUCS가 앞으로 어떤 대학으로 성장해야 하는지 함께 상상해보는 자리였습니다.
                  </p>
                  <h1 className="max-w-5xl text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.03em] text-slate-950 sm:text-[3.1rem] md:text-[4.2rem] lg:text-[5rem]">
                    {workshop.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-slate-600 md:text-[1.15rem] md:leading-8">
                    {workshop.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
                {workshop.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="border-l border-slate-200 pl-4"
                    style={{
                      opacity: 1,
                      transform: 'translateY(0px)',
                      transition: `opacity 1000ms ease ${index * 120}ms, transform 1000ms ease ${index * 120}ms`
                    }}
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-sky-700/55">{stat.label}</p>
                    <p className="mt-3 text-lg font-semibold text-slate-900 md:text-xl">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FadeInSection className="mt-20" delayMs={80}>
            <div className="border-t border-slate-200 pt-8 md:pt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700/60">Overview</p>
              <h2 className="mt-3 text-[1.65rem] font-semibold tracking-[-0.03em] text-slate-950 md:text-[2.6rem]">
                인터뷰가 열어낸 2035년의 상상
              </h2>
              <div className="mt-6 space-y-4 text-[0.98rem] leading-7 text-slate-600 md:text-[1.05rem] md:leading-8">
                <p>
                  참여자들은 미래 사회와 기술의 변화 속에서 KMUCS가 어떤 대학으로 발전해야 하는지,
                  그리고 그 안에서 자신이 어떤 모습으로 성장하고 싶은지를 각자의 언어로 풀어냈습니다.
                </p>
                {workshop.introduction.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="mt-24" delayMs={120}>
            <div className="border-t border-slate-200 px-0 py-8 sm:py-10 md:py-12">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700/60">Interview Summary</p>
                <h2 className="mt-3 text-[1.65rem] font-semibold tracking-[-0.03em] text-slate-950 md:text-[2.6rem]">
                  {workshop.futureSummary.title}
                </h2>
              </div>
              <div className="relative mt-8 px-2 py-8 sm:px-4 md:px-2 md:py-12">
                <div className="absolute left-[10%] top-[12%] h-48 w-48 rounded-full bg-sky-100/70 blur-3xl" />
                <div className="absolute bottom-[10%] right-[8%] h-56 w-56 rounded-full bg-cyan-100/70 blur-3xl" />
                <div className="relative mt-8 grid grid-cols-2 justify-items-center gap-4 md:hidden">
                  {workshop.futureSummary.roles.map((role, index) => (
                    <div
                      key={role.title}
                      className="flex h-40 w-40 flex-col items-center justify-center rounded-full border border-sky-100/80 bg-white/90 p-5 text-center shadow-[0_16px_36px_rgba(186,230,253,0.18)]"
                      style={{
                        animation: `floatBubble ${5.5 + index * 0.5}s ease-in-out ${index * 0.2}s infinite`
                      }}
                    >
                      <p className="max-w-28 text-[0.85rem] font-semibold leading-5 text-slate-900">
                        {role.title}
                      </p>
                      <p className="mt-2 max-w-28 text-[10px] leading-4 text-slate-600">
                        {role.note}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="relative mt-8 hidden md:block md:h-160">
                  {workshop.futureSummary.roles.map((role, index) => (
                    <div
                      key={role.title}
                      className={`group relative mx-auto flex shrink-0 flex-col items-center justify-center rounded-full border border-sky-100/80 bg-white/88 p-6 text-center shadow-[0_20px_50px_rgba(186,230,253,0.22)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 hover:rotate-0 ${role.className}`}
                      style={{
                        animation: `floatBubble ${6 + index * 0.7}s ease-in-out ${index * 0.35}s infinite`
                      }}
                    >
                      <p className="max-w-44 text-sm font-semibold leading-6 text-slate-900 md:max-w-52 md:text-[1.05rem] md:leading-6">
                        {role.title}
                      </p>
                      <p className="mt-2 max-w-44 text-[11px] leading-5 text-slate-600 md:max-w-52 md:text-[0.82rem] md:leading-5">
                        {role.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="mt-24" delayMs={220}>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="border-t border-slate-200 pt-8 md:pt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700/60">Archive</p>
                <h2 className="mt-3 text-[1.65rem] font-semibold tracking-[-0.03em] text-slate-950 md:text-[2.2rem]">
                  번개 워크숍 바로 보기
                </h2>
                <div className="mt-6 overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_18px_60px_rgba(148,163,184,0.12)]">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube.com/embed/${workshop.videos[0].id}`}
                      title={workshop.videos[0].title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default WorkshopDetail2;
