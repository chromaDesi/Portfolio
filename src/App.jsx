import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import { Toaster } from './components/ui/toaster';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the window has finished loading
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => setIsLoading(false));
      return () => window.removeEventListener('load', () => setIsLoading(false));
    }
  }, []);

  return (
    <>
      <Toaster />
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
