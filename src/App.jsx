import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Home from './components/Home';
import Resume from './components/Resume';
import NotFound from './components/NotFound';
import { Toaster } from './components/ui/toaster';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // show for 4s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster />

      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
