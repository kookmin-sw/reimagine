import { Component, useEffect, useMemo, useRef, useState } from 'react';

type RegionPoint = {
  region: string;
  lat: number;
  lng: number;
  count: number;
};

type GlobeErrorBoundaryProps = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};

type GlobeErrorBoundaryState = {
  hasError: boolean;
};

type GlobeControls = {
  autoRotate: boolean;
  autoRotateSpeed: number;
};

type GlobeMaterial = {
  color: { set: (value: string) => void };
  emissive: { set: (value: string) => void };
  emissiveIntensity: number;
  shininess: number;
};

type GlobeHandle = {
  pointOfView?: (view: { lat: number; lng: number; altitude: number }, duration?: number) => void;
  controls?: () => GlobeControls | undefined;
  globeMaterial?: () => GlobeMaterial | undefined;
};

type GlobeComponentProps = Record<string, unknown>;
type CountryFeatureCollection = {
  features: object[];
};

type CurrentRegionGlobeProps = {
  pointsOverride?: RegionPoint[];
  collapseToSeoul?: boolean;
};

const COUNTRIES_GEOJSON_URL =
  'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson';
const SEOUL_COORDINATES = { lat: 37.5665, lng: 126.978 };
const CURRENT_REGION_DATA_URL = `${import.meta.env.BASE_URL}data/current-regions.json`;

const getResponsiveGlobeLayout = (width: number, height: number) => {
  if (width <= 340) {
    return {
      globeWidth: Math.round(width * 0.78),
      globeHeight: height,
      offsetX: -18,
      offsetY: -14,
      view: { lat: 37.2, lng: 123.8, altitude: 2.45 }
    };
  }

  if (width <= 380) {
    return {
      globeWidth: Math.round(width * 0.82),
      globeHeight: height,
      offsetX: -14,
      offsetY: -12,
      view: { lat: 36.9, lng: 124.8, altitude: 2.32 }
    };
  }

  if (width <= 430) {
    return {
      globeWidth: Math.round(width * 0.86),
      globeHeight: height,
      offsetX: -10,
      offsetY: -8,
      view: { lat: 36.6, lng: 125.8, altitude: 2.18 }
    };
  }

  if (width <= 520) {
    return {
      globeWidth: Math.round(width * 0.9),
      globeHeight: height,
      offsetX: -6,
      offsetY: -4,
      view: { lat: 36.4, lng: 126.8, altitude: 2.02 }
    };
  }

  return {
    globeWidth: width,
    globeHeight: height,
    offsetX: 0,
    offsetY: 0,
    view: { lat: 36.2, lng: 127.8, altitude: 1.9 }
  };
};

class GlobeErrorBoundary extends Component<GlobeErrorBoundaryProps, GlobeErrorBoundaryState> {
  state: GlobeErrorBoundaryState = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('CurrentRegionGlobe render error:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const CurrentRegionGlobe: React.FC<CurrentRegionGlobeProps> = ({ pointsOverride, collapseToSeoul = true }) => {
  const globeRef = useRef<GlobeHandle | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fetchedPoints, setFetchedPoints] = useState<RegionPoint[]>([]);
  const [GlobeComponent, setGlobeComponent] = useState<React.ComponentType<GlobeComponentProps> | null>(null);
  const [countryFeatures, setCountryFeatures] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const points = pointsOverride ?? fetchedPoints;

  useEffect(() => {
    let isMounted = true;

    import('react-globe.gl')
      .then((globeModule) => {
        if (!isMounted) return;
        setGlobeComponent(() => globeModule.default);
      })
      .catch(() => {
        if (!isMounted) return;
        setHasError(true);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || isLoading || !GlobeComponent) return;

    const updateSize = () => {
      setContainerSize({
        width: node.clientWidth,
        height: node.clientHeight
      });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });

    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, [GlobeComponent, isLoading]);

  useEffect(() => {
    if (pointsOverride) {
      setIsLoading(false);
      setHasError(false);
      return;
    }

    let isMounted = true;

    fetch(CURRENT_REGION_DATA_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch current region data');
        }

        return response.json();
      })
      .then((data: RegionPoint[]) => {
        if (!isMounted) return;
        setFetchedPoints(data);
        setHasError(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setHasError(true);
      })
      .finally(() => {
        if (!isMounted) return;
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [pointsOverride]);

  useEffect(() => {
    let isMounted = true;

    fetch(COUNTRIES_GEOJSON_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch world geojson');
        }

        return response.json();
      })
      .then((data: CountryFeatureCollection) => {
        if (!isMounted) return;
        setCountryFeatures(Array.isArray(data.features) ? data.features : []);
      })
      .catch((error) => {
        console.error('CurrentRegionGlobe geojson error:', error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!globeRef.current || points.length === 0) return;

    try {
      if (typeof globeRef.current.pointOfView === 'function') {
        globeRef.current.pointOfView({ lat: 36.2, lng: 127.8, altitude: 1.9 }, 1200);
      }

      const controls = globeRef.current.controls?.();
      if (controls) {
        controls.autoRotate = false;
        controls.autoRotateSpeed = 0;
      }

      const material = globeRef.current.globeMaterial?.();
      if (material) {
        material.color.set('#0b1220');
        material.emissive.set('#22d3ee');
        material.emissiveIntensity = 0.24;
        material.shininess = 2;
      }
    } catch (error) {
      console.error('CurrentRegionGlobe setup error:', error);
      setHasError(true);
    }
  }, [points]);

  const pointData = useMemo(
    () => {
      if (!collapseToSeoul) {
        return points.map((item) => ({
          ...item,
          dotSize:
            item.count <= 2
              ? Math.max(0.54, Math.sqrt(item.count) * 0.228)
              : Math.max(0.18, Math.sqrt(item.count) * 0.076),
          ringSize:
            item.count <= 2
              ? Math.max(1.74, Math.sqrt(item.count) * 0.84)
              : Math.max(1.16, Math.sqrt(item.count) * 0.56),
          color: item.region === '서울' ? '#7dd3fc' : item.count >= 5 ? '#a78bfa' : '#f9a8d4'
        }));
      }

      const totalCount = points.reduce((sum, item) => sum + item.count, 0);

      return [
        {
          region: '서울',
          lat: SEOUL_COORDINATES.lat,
          lng: SEOUL_COORDINATES.lng,
          count: totalCount,
          dotSize: Math.max(0.22, Math.sqrt(totalCount) * 0.072),
          ringSize: Math.max(1.44, Math.sqrt(totalCount) * 0.6),
          color: '#7dd3fc'
        }
      ];
    },
    [collapseToSeoul, points]
  );

  const globeLayout = useMemo(
    () => getResponsiveGlobeLayout(containerSize.width, containerSize.height),
    [containerSize.height, containerSize.width]
  );

  useEffect(() => {
    if (!globeRef.current || points.length === 0 || containerSize.width === 0 || containerSize.height === 0) return;

    try {
      globeRef.current.pointOfView?.(globeLayout.view, 0);
    } catch (error) {
      console.error('CurrentRegionGlobe responsive view error:', error);
    }
  }, [containerSize.height, containerSize.width, globeLayout, points.length]);

  if (isLoading || !GlobeComponent) {
    return (
      <div className="flex h-[420px] items-center justify-center rounded-[1.75rem] border border-sky-100 bg-[radial-gradient(circle_at_top,#eff6ff_0%,#dbeafe_48%,#bfdbfe_100%)] text-sm text-slate-600">
        지구본 데이터를 불러오는 중입니다.
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex h-[420px] items-center justify-center rounded-[1.75rem] border border-rose-100 bg-rose-50 text-sm text-rose-700">
        현재 거주 지역 지구본을 불러오지 못했습니다.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative h-[360px] w-full min-w-0 overflow-hidden rounded-[1.75rem] border border-cyan-200/40 bg-[radial-gradient(circle_at_top,#164e63_0%,#0f172a_38%,#020617_100%)] shadow-[0_24px_70px_rgba(34,211,238,0.18)] sm:h-[420px] md:h-[520px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(103,232,249,0.2)_0%,rgba(103,232,249,0)_26%),radial-gradient(circle_at_78%_28%,rgba(165,180,252,0.16)_0%,rgba(165,180,252,0)_24%),radial-gradient(circle_at_50%_100%,rgba(45,212,191,0.1)_0%,rgba(45,212,191,0)_32%),linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)]" />
      <GlobeErrorBoundary
        fallback={
          <div className="flex h-full items-center justify-center text-sm text-sky-100">
            지구본 렌더링 중 문제가 발생했습니다.
          </div>
        }
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `translate(${globeLayout.offsetX}px, ${globeLayout.offsetY}px)` }}
        >
          <GlobeComponent
            ref={globeRef}
            backgroundColor="rgba(0,0,0,0)"
            animateIn={false}
            width={globeLayout.globeWidth || undefined}
            height={globeLayout.globeHeight || undefined}
            showGlobe={true}
            showGraticules={true}
            graticulesColor="rgba(125,211,252,0.24)"
            polygonsData={countryFeatures}
            polygonCapColor={() => 'rgba(8,47,73,0.08)'}
            polygonSideColor={() => 'rgba(8,47,73,0.04)'}
            polygonStrokeColor={() => 'rgba(186,230,253,0.82)'}
            polygonAltitude={0.004}
            polygonsTransitionDuration={300}
            pointsData={pointData}
            pointLat="lat"
            pointLng="lng"
            pointAltitude={0.0008}
            pointRadius="dotSize"
            pointColor="color"
            pointResolution={14}
            pointsMerge={false}
            ringsData={pointData}
            ringLat="lat"
            ringLng="lng"
            ringColor={() => ['rgba(255,255,255,0.96)', 'rgba(125,211,252,0.5)', 'rgba(167,139,250,0.2)', 'rgba(125,211,252,0)']}
            ringMaxRadius="ringSize"
            ringPropagationSpeed={0.65}
            ringRepeatPeriod={1600}
            atmosphereColor="#38bdf8"
            atmosphereAltitude={0.12}
            pointLabel={(d: object) => `<b>${(d as RegionPoint).region}</b><br/>응답 수: ${(d as RegionPoint).count}`}
          />
        </div>
      </GlobeErrorBoundary>
    </div>
  );
};

export default CurrentRegionGlobe;
