import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import { Toaster } from './components/ui/toaster';

const Home = lazy(() => import('./components/Home'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [splineReady, setSplineReady] = useState(false);
  const showPreloader = !preloaderDone || !splineReady;

  useEffect(() => {
    const timer = setTimeout(() => setPreloaderDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster />
      {showPreloader && <Preloader />}
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route index element={<Home onSplineReady={() => setSplineReady(true)} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;