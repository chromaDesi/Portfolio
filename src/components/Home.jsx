import { lazy, Suspense } from 'react';
import Navabar from "./Navabar";
import Hero from "./Hero";

// Lazy load non-critical components
const Contact = lazy(() => import("./Contact"));
const Skills = lazy(() => import("./Skills"));
const Projects = lazy(() => import("./projects"));
const Experience = lazy(() => import("./Experience"));
const Aboutme = lazy(() => import("./Aboutme"));
const Footer = lazy(() => import("./Footer"));

// Loading fallback
const LoadingSection = () => (
  <div className="w-full h-[50vh] flex items-center justify-center">
    <div className="animate-pulse bg-primary/10 rounded-lg w-full max-w-4xl h-full mx-4" />
  </div>
);

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navabar/>

            {/*content*/}
            <main>
                <Hero/>
                <Suspense fallback={<LoadingSection />}>
                    <Aboutme/>
                    <Skills/>
                    <Experience/>
                    <Projects/>
                    <Contact/>
                </Suspense>
            </main>
            
            {/*footing*/}
            <Suspense fallback={null}>
                <Footer/>
            </Suspense>
        </div>
    );
}

export default Home;