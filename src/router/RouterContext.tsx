import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface RouteState {
  path: string;
  params: Record<string, string>;
  query: Record<string, string>;
}

interface RouterContextType {
  route: RouteState;
  navigate: (path: string, options?: { replace?: boolean }) => void;
  openBookingModal: (prefill?: { doctorId?: string; specialtyId?: string; packageId?: string }) => void;
  closeBookingModal: () => void;
  isBookingModalOpen: boolean;
  bookingPrefill: { doctorId?: string; specialtyId?: string; packageId?: string } | null;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parseHash(hash: string): RouteState {
  // Hash format: #/path/to/page?key=val
  const cleanHash = hash.replace(/^#\/?/, '') || '';
  const [pathname, queryString] = cleanHash.split('?');

  const query: Record<string, string> = {};
  if (queryString) {
    const searchParams = new URLSearchParams(queryString);
    searchParams.forEach((val, key) => {
      query[key] = val;
    });
  }

  const segments = pathname.split('/').filter(Boolean);
  const path = '/' + segments.join('/');

  const params: Record<string, string> = {};

  // Parse known dynamic paths
  if (segments[0] === 'doctors' && segments[1]) {
    params.doctorId = segments[1];
  } else if (segments[0] === 'specialties' && segments[1]) {
    params.specialtyId = segments[1];
  } else if (segments[0] === 'articles' && segments[1]) {
    params.articleId = segments[1];
  }

  return {
    path: path === '/' || path === '' ? '/' : path,
    params,
    query,
  };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<RouteState>(() => parseHash(window.location.hash));
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{ doctorId?: string; specialtyId?: string; packageId?: string } | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseHash(window.location.hash);
      setRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // If initial hash is empty, set default hash to #/
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/';
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((path: string, options?: { replace?: boolean }) => {
    const targetHash = '#' + (path.startsWith('/') ? path : '/' + path);
    if (options?.replace) {
      window.location.replace(targetHash);
    } else {
      window.location.hash = targetHash;
    }
  }, []);

  const openBookingModal = useCallback((prefill?: { doctorId?: string; specialtyId?: string; packageId?: string }) => {
    setBookingPrefill(prefill || null);
    setIsBookingModalOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsBookingModalOpen(false);
    setBookingPrefill(null);
  }, []);

  return (
    <RouterContext.Provider
      value={{
        route,
        navigate,
        openBookingModal,
        closeBookingModal,
        isBookingModalOpen,
        bookingPrefill,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
