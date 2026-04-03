import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Survey from './pages/Survey';
import WorkshopList from './pages/WorkshopList';
import WorkshopDetail from './pages/WorkshopDetail';
import WorkshopDetail2 from './pages/WorkshopDetail2';

const SITE_NAME = 'KMUCS Reimagine 2035!';
const BASE_URL = import.meta.env.BASE_URL;
const DEFAULT_IMAGE_PATH = `${BASE_URL}share.png`;
const DEFAULT_KEYWORDS = [
  'KMUCS',
  'Reimagine 2035',
  '국민대학교',
  '소프트웨어융합대학',
  '미래 비전',
  '워크샵',
  '설문조사',
].join(', ');

const SEO_BY_PATH: Record<
  string,
  {
    title: string;
    description: string;
    path: string;
  }
> = {
  '/': {
    title: 'KMUCS Reimagine 2035! | 국민대학교 소프트웨어융합대학 미래 비전 프로젝트',
    description:
      '학생·교수·졸업생·타과생 등 다양한 구성원의 의견을 반영하여 KMUCS의 미래 비전을 함께 상상하고 만들어가는 프로젝트입니다.',
    path: '/',
  },
  '/history': {
    title: 'KMUCS 연혁 | Reimagine 2035!',
    description:
      '1994년 전산과학과부터 현재까지, 국민대학교 소프트웨어융합대학의 성장과 변화를 시간의 흐름에 따라 살펴보세요.',
    path: '/history',
  },
  '/survey': {
    title: '설문 조사 | KMUCS Reimagine 2035!',
    description:
      '2035년의 KMUCS와 졸업생을 함께 상상하는 설문에 참여하고, 미래 비전에 대한 다양한 응답과 결과를 확인해보세요.',
    path: '/survey',
  },
  '/workshop': {
    title: '워크샵 아카이브 | KMUCS Reimagine 2035!',
    description:
      '인터뷰와 대화로 수집한 학생들의 생각과 상상을 통해, 앞으로의 KMUCS가 나아갈 방향을 함께 그려보는 워크샵 아카이브입니다.',
    path: '/workshop',
  },
  '/workshop/reimagine-2035': {
    title: 'Reimagine 2035 워크샵 | KMUCS Reimagine 2035!',
    description:
      '학생들의 상상과 제안을 바탕으로 2035년의 KMUCS를 함께 그려본 Reimagine 2035 워크샵 상세 기록입니다.',
    path: '/workshop/reimagine-2035',
  },
  '/workshop/lightning': {
    title: '번개 워크샵 | KMUCS Reimagine 2035!',
    description:
      '학생 인터뷰를 통해 미래 사회와 기술 변화 속 KMUCS의 방향을 탐색한 번개 워크샵의 이야기와 기록을 확인해보세요.',
    path: '/workshop/lightning',
  },
};

const setMetaContent = (selector: string, attributes: Record<string, string>, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      element?.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const setLinkHref = (selector: string, rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const setStructuredData = (id: string, data: Record<string, unknown>) => {
  let element = document.head.querySelector<HTMLScriptElement>(`script#${id}`);

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.id = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
};

const scrollToHashTarget = (hash: string) => {
  const targetId = decodeURIComponent(hash.replace(/^#/, ''));
  const element = document.getElementById(targetId);
  const header = document.querySelector('header');

  if (!element) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return;
  }

  const headerOffset = header instanceof HTMLElement ? header.offsetHeight : 108;
  const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top, behavior: 'auto' });
};

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        scrollToHashTarget(hash);
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};

const SeoManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = SEO_BY_PATH[pathname] ?? SEO_BY_PATH['/'];
    const pageUrl = new URL(seo.path.replace(/^\//, ''), window.location.origin + BASE_URL).toString();
    const imageUrl = new URL(DEFAULT_IMAGE_PATH.replace(/^\//, ''), window.location.origin + '/').toString();

    document.documentElement.lang = 'ko';
    document.title = seo.title;

    setMetaContent('meta[name="description"]', { name: 'description' }, seo.description);
    setMetaContent('meta[name="keywords"]', { name: 'keywords' }, DEFAULT_KEYWORDS);
    setMetaContent('meta[name="robots"]', { name: 'robots' }, 'index, follow, max-image-preview:large');
    setMetaContent('meta[property="og:type"]', { property: 'og:type' }, 'website');
    setMetaContent('meta[property="og:locale"]', { property: 'og:locale' }, 'ko_KR');
    setMetaContent('meta[property="og:site_name"]', { property: 'og:site_name' }, SITE_NAME);
    setMetaContent('meta[property="og:title"]', { property: 'og:title' }, seo.title);
    setMetaContent('meta[property="og:description"]', { property: 'og:description' }, seo.description);
    setMetaContent('meta[property="og:url"]', { property: 'og:url' }, pageUrl);
    setMetaContent('meta[property="og:image"]', { property: 'og:image' }, imageUrl);
    setMetaContent('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    setMetaContent('meta[name="twitter:title"]', { name: 'twitter:title' }, seo.title);
    setMetaContent('meta[name="twitter:description"]', { name: 'twitter:description' }, seo.description);
    setMetaContent('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl);
    setLinkHref('link[rel="canonical"]', 'canonical', pageUrl);

    setStructuredData('website-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: new URL(BASE_URL, window.location.origin).toString(),
      inLanguage: 'ko-KR',
      description: SEO_BY_PATH['/'].description,
    });

    setStructuredData('webpage-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      url: pageUrl,
      description: seo.description,
      inLanguage: 'ko-KR',
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: new URL(BASE_URL, window.location.origin).toString(),
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: imageUrl,
      },
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router basename={BASE_URL}>
      <ScrollToTop />
      <SeoManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/workshop" element={<WorkshopList />} />
        <Route path="/workshop/reimagine-2035" element={<WorkshopDetail />} />
        <Route path="/workshop/lightning" element={<WorkshopDetail2 />} />
      </Routes>
    </Router>
  );
}

export default App;
