import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import { Toaster } from './components/ui/toaster';

const Home = lazy(() => import('./components/Home'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [splineReady, setSplineReady] = useState(false);
  const showPreloader = !(preloaderDone || splineReady);

  useEffect(() => {
    // Fallback: ensure preloader never blocks the UI indefinitely.
    const timer = setTimeout(() => setPreloaderDone(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster />
      {showPreloader && <Preloader onFinish={() => setPreloaderDone(true)} />}
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