
import heroBackground from '../assets/kookmin_unv.jpg';

const SURVEY_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSf11MVsB7jnMCjfwTzN11DU7Xc0BqGdu8Tc_yHCqP1fINvKuA/viewform';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden px-4"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.72)_0%,rgba(30,64,175,0.55)_45%,rgba(15,23,42,0.78)_100%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center py-24 text-center">
        <div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-white sm:mb-8 sm:text-5xl md:text-7xl">
            KMUCS Reimagine 2035!
          </h1>
          <p className="mb-5 text-base font-light leading-relaxed text-blue-50 sm:mb-6 sm:text-xl">
            2035년! <br className="block sm:hidden" />지금부터 약 10년 후의 <br className="block sm:hidden" />당신 또는 KMUCS 졸업생을 상상해 보세요.
          </p>
          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-blue-100 sm:mb-12 sm:text-xl">
            사회는 어떻게 바뀌었을까요?<br className="block sm:hidden" /> 어떤 직장들이 있을까요?<br />
            그 사회에서 어떤 기여를 하고 있으며 <br className="block sm:hidden" />어떤 평판을 얻고 있을까요?
          </p>
          <div className="mt-20 flex flex-col justify-center gap-6 sm:mt-0 sm:flex-row">
            <a
              href={SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer rounded-lg bg-white/92 px-7 py-3 text-base font-medium text-blue-900 shadow-lg transition-all duration-200 hover:bg-white sm:px-10 sm:py-4 sm:text-xl"
            >
              설문조사 참여하기
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center text-center">
        <p className="hidden text-sm font-medium text-blue-50/95 sm:block">
          아래로 내려서 <br className="block sm:hidden" />프로젝트 소개를 확인해 보세요
        </p>
        <div className="mt-3 animate-[pulse_1.8s_ease-in-out_infinite] text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.55)]">
          <svg
            aria-hidden="true"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
