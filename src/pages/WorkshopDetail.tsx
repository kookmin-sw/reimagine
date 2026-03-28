import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import workshopHeroImage from '../assets/workshop01.jpg';

const WorkshopDetail: React.FC = () => {
  const [flippedTeams, setFlippedTeams] = useState<number[]>([]);
  const hiddenBackDetailTeams = new Set(['슈팅35', '4WARD', '두팔']);
  const getBackDetailClassName = (team: string, detail: string) => {
    if (hiddenBackDetailTeams.has(team)) {
      return 'text-xs';
    }

    return detail.length <= 50 ? 'text-sm xl:text-base' : 'text-xs';
  };

  const workshop = {
    title: 'Reimagine 2035 !',
    date: '2025년 6월 18일',
    location: '국민대학교',
    participants: 15,
    description: '학생들의 다양한 상상들을 인터뷰를 통해 담아내는 워크숍입니다.',
    introduction: {
      title: 'KMUCS Reimagine 2035!',
      content: [
        '2035년, 우리는 어떤 세상에서 살아가고 있을까요? 🌏 ',
        '지금과는 어떤 점이 달라져 있을지,',
        '그 안에서 나는 어떤 모습으로 살아가고 있을지,',
        '2035년, 과거 10년을 상상으로 회고할 때',
        '어떤 것이 나에게 영향을 주었을 지',
        '기술, 환경, 교육, 일상 등 다양한 측면에서 상상해보고',
        '팀별 토론을 통해 자유롭게 이야기를 나누는 시간을 가졌습니다.'
      ]
    },
    goals: {
      title: '목표와 의미',
      content: [
        '팀별 토론과 나눔을 통해 각자의 상상력을 공유하며',
        '2035년의 \'나\'와 \'우리\'는 어떤 모습이어야 할 지,',
        '그리고 이런 모습이 되도록 영향을 미친 것은',
        '향후 10년 동안 생겨 날 소프트웨어융합대학의 \'무엇\' 때문일 지를 함께 그려보는 시간을 가졌습니다.',
        '오늘 나눈 대화와 상상이,',
        '🌱 미래를 만드는 작은 시작이 되기를 기대합니다!'
      ]
    },
    teams: [
      {
        title: '10년 뒤 상상하기',
        team: '슈팅35',
        detail: '2035년의 삶을 자유롭게 상상하며 개인의 변화와 사회의 흐름을 함께 그려본 팀입니다.'
      },
      {
        title: '10년 후의 나와 공동체, 국민대 소프트웨어융합대학의 미래',
        team: '오소리',
        detail: '2035년 나와 공동체의 모습과 소프트웨어융합대학이 우리에게 영향을 끼치는 방향'
      },
      {
        title: 'Reimagine On Mars',
        team: '1 ON MARS',
        detail: `KMUCS Reimagine 2035!

무한상상실
2014년 10년 전, 상상으로 이 공간이 생겼고 이 공간이 다시 상상하게 만들었습니다.
이제 새로운 상상으로 이어가는 것이 필요합니다.
10년 후의 KMUCS를 다 함께 상상해봅시다!

📍 세상은? (2035년의 모습)

• 인공지능의 가속된 발전과 양자컴퓨터의 상용화
• 모든 영역에서의 인공지능 활용으로 발전이 집중됨
• 기하급수적으로 증가하는 데이터, 정확도의 향상을 통한 인공지능의 인간 초월
• 하지만 과연 기반시설과 사회구조가 발전을 따라갈 수 있을까...? 생각해봐야 할 부분!
• 과도한 발전으로 인해 인간의 물리적, 산업적 영역 과밀화

💡 화성이 답이다!
→ 인공지능과 융합한 우주개발을 통해 인류 생활 영역 확장
→ 화성 데이터센터 etc... → 환경 문제 해결 + 기술 발전!

👥 우리는? (2035년 KMUCS 졸업생)

단순히 인공지능에 의존하는 것이 아니라 새로운 방향으로 인공지능을 활용하고,
많은 분야와 개방적으로 협력하는 사람

기술과 함께 인간 중심의 목표를 가지고 가치 있는 기술을 개발하는 사람

🏫 학교는? (KMUCS 2025-2035 핵심 특징)

1. "KMUCS MetaCampus" — 메타버스 캠퍼스
• 교수님 아바타, 오늘은 문어? — 랜덤 변신으로 집중도 200%↑
• 출석 = 포털 점프 착지 성공률
• 수강신청 대신 '다중 우주 로비'
• 관상이 코딩을 지배한다: 페이스-트래킹 IDE
• 메타-학식(食) 배달 드론 레이드
• Debug & Dragon — 버그를 잡으면 괴물도 잡힌다
• 졸업심사 = 메타버스 모의 재난 생존 스트리밍

2. GPT 시대의 교육 혁신
• 기본적으로 과제 GPT 쓴다 가정 - GPT를 써도 많은 걸 배울 수 있는 과제로!
• 필기 대신에 실무에 연계된 시험으로 변화
• 학부 때부터 연구 관련 내용을 많이 접할 수 있게!
• 인공지능뿐 아니라 연계될 수 있는 많은 분야를 함께
→ ex. 문화, 윤리, 가치.... etc

3. 글로컬(Glocal) 버추얼 캠퍼스
• 스탠퍼드·ETH Zurich·도쿄대 등과 메타버스 공동 캠퍼스
• 실시간 언어 동시통역·공동 실험실(디지털 트윈 랩)

4. AI-주도 맞춤형 학습 생태계 "My Twin Curriculum"
• 디지털 트윈 AI 멘토가 개인 학습 경로를 실시간 설계

5. 임팩트 팩토리(Impact Factory)
• 지역사회·UN SDGs 연동 문제은행
• 사회적 임팩트 지표 실시간 정량화

💭 종합

"상상력(무한상상실) → AI 개인화 → 글로컬 협력 → 사회 임팩트 → 지속가능성"

2035년의 KMUCS 졸업생은
'경계를 넘나들며 문제를 정의-해결하고, 데이터·가치·사람을 연결하는 융합형 리더'

"재밌게 살다 왔더니, 일도 재밌어졌습니다."`
      },
      {
        title: 'KMUCS REIMAGINE 2035!',
        team: '4WARD',
        detail: '소프트웨어융합대학의 다음 10년을 바라보며 학습, 진로, 캠퍼스 경험의 미래를 구체화했습니다.'
      },
      {
        title: 'AI와 미래',
        team: '234!',
        detail: `AI 주제의 노래 가사 프롬프트

노래 가사 제작을 위한 프롬프트
1. 주제: 인공지능(AI)과 소프트웨어를 통해 여러 산업의 난제를 해결하고, 더 나은 미래를 만들어가는 희망적인 이야기
2. 장르: 팝, 모던 록, 또는 희망적인 분위기의 발라드
3. 전체적인 분위기:
* 희망: AI 기술이 가져올 긍정적인 변화에 대한 기대감
* 혁신: 기존의 한계를 뛰어넘는 새로운 아이디어와 해결책
* 인간과 기술의 조화: AI는 인간을 대체하는 것이 아닌, 능력을 확장시켜주는 파트너라는 메시지
* 역동성: 문제 해결 과정의 긴박함과 성공의 짜릿함이 느껴지는 전개
4. 핵심 키워드:
* AI, 딥러닝, 알고리즘, 코드, 데이터
* 스마트 시티, 자율주행, 맞춤형 의료, 스마트 팩토리
* 연결, 융합, 혁신, 솔루션, 미래, 희망, 꿈
* 눈물, 땀, 노력 (인간적인 요소를 강조)
5. 가사 구성 (스토리라인):
* 1절 (Verse 1): 문제와 절망
  내용: 해결되지 않는 문제들로 가득한 회색빛 도시의 풍경을 묘사합니다. (예: 꽉 막힌 도로, 병들어가는 사람들, 비효율적인 공장)
  감정: 답답함, 무력감, 한계에 부딪힌 인간의 고뇌
  예시: 잿빛 하늘 아래 멈춰선 시간 / 끝없는 물음표만 쌓여가 / 해답을 잃어버린 낡은 지도 위 / 지친 한숨만 깊어지네
* 프리코러스 (Pre-Chorus): 변화의 시작
  내용: 보이지 않던 곳에서 조용히 싹트는 변화의 움직임을 암시합니다. 수많은 데이터와 코드들이 빛을 내며 모이는 모습을 그립니다.
  감정: 기대감, 미지의 존재에 대한 궁금증
  예시: 그 순간, 보이지 않던 빛의 속삭임 / 무수한 데이터가 길을 만드네 / 잠들었던 세상의 심장을 깨울 / 새로운 코드가 눈을 뜨네
* 후렴 (Chorus): 희망과 해결
  내용: AI라는 새로운 빛이 산업 현장의 문제들을 해결하는 모습을 역동적으로 보여줍니다. (예: 질병을 진단하는 AI, 스스로 움직이는 물류 로봇, 최적의 에너지 효율을 찾는 도시)
  감정: 환희, 희망, 감동, 문제 해결의 짜릿함
  예시: Oh, AI, 절망의 벽을 넘어 / 코드로 그리는 내일의 지도 / 멈췄던 공장이 노래를 하고 / 아팠던 거리가 숨을 쉬네 / 더 똑똑한 세상, 더 따뜻한 미래 / 우리 손으로 함께 만들어가
* 2절 (Verse 2): 구체적인 변화의 모습
  내용: 1절에서 제시된 문제들이 구체적으로 어떻게 해결되는지 보여줍니다. (예: 개인 맞춤형 치료로 건강을 되찾는 할머니, 위험한 작업 현장에서 사람을 대신하는 로봇 팔)
  감정: 안정감, 감사함, 기술 발전의 혜택을 체감하는 따뜻함
  예시: 할머니의 미소 되찾아준 알고리즘 / 위험한 현장은 로봇의 몫이 됐지 / 땀과 눈물로 채웠던 어제를 넘어 / 새로운 꿈을 꿀 시간을 선물 받았네
* 브릿지 (Bridge): 인간의 역할 강조
  내용: 이 모든 기술 발전의 중심에는 결국 '사람'이 있다는 메시지를 전달합니다. AI에게 방향을 제시하고, 윤리를 고민하며, 그 기술을 통해 더 나은 세상을 만들고자 하는 인간의 의지를 강조합니다.
  감정: 책임감, 자부심, 인간과 기술의 파트너십
  예시: 차가운 기계 심장에 온기를 불어넣는 건 / 더 나은 세상을 향한 우리의 뜨거운 열정 / 질문을 던지고 방향을 정하는 건 / 바로 우리, 꿈꾸는 인간의 몫이니까
* 후렴 (Chorus): 고조되는 희망
  내용: 이전 후렴구를 반복하며, 더욱 벅찬 감정으로 미래에 대한 확신을 노래합니다.
  감정: 확신, 벅찬 감동, 모두가 함께하는 축제 분위기
* 아웃트로 (Outro): 미래를 향한 다짐
  내용: '우리가 바로 미래'라는 메시지를 남기며, 노래를 마무리합니다.
  예시: 우리가 쓰는 코드, 우리가 여는 미래 / The future is now, a new world begins.`
      },
      {
        title: '10년뒤 상상하기',
        team: 'A바지(AI시대는 바로 지금!)',
        detail: `전체 대화 기록

질문1
국민대학교 소프트웨어융합대학에 학생회 아카이브에서 기획부에 소속되어있고 이번에 소프트웨어융합대학, 법학대학, 과학기술대학 세개의 단과대가 모여서 체육대회를 개최할 것 같아 다같이 참여할 수 있는 체육대회가 될 수
있도록 하루동안 진행할 수 있는 레크레이션, 체육활동을 포함하고 점심시간을 포함해서 타임노트를 작성하고 이미지로 나타내고 어떤 레크레이션을 하면 좋을지와 어떤 체육활동을 하면 좋을지 추천해주고 학생분들을 위해서 어떤
이벤트를 하면 좋을지도 추천해줘 그리고 소프트웨어융합대학은 100명정도가 참여할 것 같고 법학대학은 80명정도가참여할 것 같고 과학기술대학은 120명정도가 참여할 것 같으니 참고해서 예상 예산도 짜줘 자세하게

질문2
우리는 국민대학교 소프트웨어융합대학 아카이브라는 학생회에서 복지부를 맡고있어 시험기간이 다가와서 학생들을 대상으로 간식행사를 진행하는데 6월 10일 화요일 12시30분부터 2시까지 미래관 4층 자율주행스튜디오 앞에서
간식(보쌈도시락)을 배부할거야 학생회비 납부자에 한해서 간식을 배부할 것이니 유의해달라는 내용을 포함해서 이미지로 포함한 아카이브 학생회 로고를 참고해서 비슷한 스타일로 카드뉴스를 작성해고 이것을 이미지로 나타내줘`
      },
      {
        title: 'KMU Global Planetary Studio (GPS)',
        team: '두팔',
        detail: '지역을 넘어 지구적 관점에서 연결과 이동, 학습의 미래를 설계해본 팀의 아이디어입니다.'
      },
      {
        title: '2035년',
        team: 'KMU 서포터즈',
        detail: `전체 대화 기록

User: 국민대에서 컴퓨터 개발과 디자인을 동시에 하는 천수관음 느낌을 참고해서 고양이를 귀엽게 그려줘
Assistant: [고양이 천수관음 이미지 생성 (DALL·E 이미지)]

User: 현재 사진은 서울대, 고려대, 연세대 대학 로고가 그려진 사진이야
여기서, 고려대 로고를 국민대 로고로 바꾸어서 이미지를 생성해줘`
      }
    ],
    highlights: ['2035년 미래 상상', '팀별 토론과 발표', '학생 인터뷰 아카이빙'],
    videos: [
      { id: 'pEgTbP8aa5g', title: '워크숍 한 눈에 보기' },
      { id: 'QhLdyQgTVwg', title: '10년 뒤 상상하기' },
      { id: 'FkH0Uz-FEo0', title: '10년 후의 나와 공동체, 국민대 소프트웨어융합대학의 미래' },
      { id: 'MNz2KAMffSI', title: 'Reimagine On Mars' },
      { id: 'z9tVksJ7blQ', title: 'KMUCS REIMAGINE 2035!' },
      { id: '9RHDvh-33mk', title: 'AI와 미래' },
      { id: 'WpPted4MqlQ', title: '10년뒤 상상하기' },
      { id: 'AJZklsLnguY', title: 'KMU Global Planetary Studio (GPS)' },
      { id: 'ES8vx6Jk0_M', title: '2035년' }
    ]
  };

  const toggleTeamCard = (index: number) => {
    setFlippedTeams((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <div>
      <Header />
      <article className="min-h-screen bg-[linear-gradient(180deg,#eef6ff_0%,#f8fbff_18%,#ffffff_42%,#f7fbff_100%)] pt-24 pb-20 md:pb-28">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-sky-100/60 bg-slate-900 px-6 py-8 shadow-[0_28px_80px_rgba(15,23,42,0.28)] sm:px-8 md:px-12 md:py-12"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(2,6,23,0.68) 0%, rgba(15,23,42,0.52) 42%, rgba(8,47,73,0.58) 100%), url(${workshopHeroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 54%'
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(125,211,252,0.2)_0%,rgba(125,211,252,0)_28%),radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.18)_0%,rgba(56,189,248,0)_26%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_100%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-sky-100">Project Workshop</p>
                <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl">
                  {workshop.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-sky-50 md:text-lg">
                  {workshop.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {workshop.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_20px_rgba(15,23,42,0.2)] backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="rounded-[1.5rem] border border-white/18 bg-slate-950/28 p-6 pt-6 text-white backdrop-blur-sm lg:ml-8">
                <p className="text-sm uppercase tracking-[0.22em] text-sky-100">Workshop Note</p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div className="flex items-center gap-2">
                    <p className="text-sky-100/70">날짜</p>
                    <p className="text-sm font-semibold md:text-base">{workshop.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sky-100/70">장소</p>
                    <p className="text-sm font-semibold md:text-base">{workshop.location}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sky-100/70">참여 인원</p>
                    <p className="text-sm font-semibold md:text-base">{workshop.participants}명</p>
                  </div>
                </div>
                <Link
                  to="/workshop"
                  className="mt-5 inline-flex text-sm font-semibold text-sky-50 underline decoration-sky-200/70 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white"
                >
                  다른 워크숍 보기
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="grid gap-8 xl:grid-cols-2 xl:items-start">
              <section className="rounded-[1.75rem] bg-white/95 p-8 shadow-sm ring-1 ring-sky-100">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Introduction</p>
                <h2 className="mt-3 text-2xl font-bold text-stone-900 md:text-3xl">{workshop.introduction.title}</h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 md:text-lg">
                  {workshop.introduction.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-sky-100 bg-[linear-gradient(180deg,#f3f9ff_0%,#e7f3ff_100%)] p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">Meaning</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">{workshop.goals.title}</h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 md:text-lg">
                  {workshop.goals.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </div>

            <section className="flex flex-col rounded-[1.75rem] border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(244,249,255,0.96)_100%)] p-8 shadow-sm">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Teams</p>
                <h2 className="mt-3 text-2xl font-bold text-stone-900 md:text-3xl">이런 조들이 함께했습니다</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  카드를 클릭하면 각 조가 AI 사용에 활용한 프롬프트를 볼 수 있습니다.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {workshop.teams.map((item, index) => (
                  <button
                    key={item.team}
                    type="button"
                    aria-pressed={flippedTeams.includes(index)}
                    onClick={() => toggleTeamCard(index)}
                    className="group min-h-[18rem] cursor-pointer rounded-[1.5rem] text-left [perspective:1200px]"
                  >
                    <div
                      className="relative min-h-[18rem] rounded-[1.5rem] transition-transform duration-500 [transform-style:preserve-3d]"
                      style={{
                        transform: flippedTeams.includes(index) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                    >
                      <article
                        className="absolute inset-0 flex min-h-[18rem] flex-col justify-center rounded-[1.5rem] border border-sky-100 bg-white p-5 text-center shadow-[0_16px_34px_rgba(191,219,254,0.18)]"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                          {item.team}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                          {item.title}
                        </p>
                      </article>

                      <article
                        className="absolute inset-0 flex min-h-[18rem] flex-col items-start justify-start overflow-y-auto rounded-[1.5rem] border border-sky-200 bg-[linear-gradient(180deg,#eff8ff_0%,#dff1ff_100%)] p-5 text-left shadow-[0_16px_34px_rgba(125,211,252,0.22)]"
                        style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                          {item.team}
                        </p>
                        <p
                          className={`mt-3 whitespace-pre-line leading-relaxed text-slate-700 ${getBackDetailClassName(item.team, item.detail)}`}
                        >
                          {hiddenBackDetailTeams.has(item.team) ? '' : item.detail}
                        </p>
                      </article>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-[1.75rem] bg-white/95 p-8 shadow-sm ring-1 ring-sky-100">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Archive</p>
                  <h2 className="mt-2 text-2xl font-bold text-stone-900 md:text-3xl">지난 워크샵 영상으로 보기</h2>
                </div>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {workshop.videos.map((video, index) => (
                  <div key={index} className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-[0_16px_36px_rgba(191,219,254,0.2)]">
                    <div className="aspect-video">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="border-t border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                      {video.title}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default WorkshopDetail;
