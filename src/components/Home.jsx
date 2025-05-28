import Navabar from "./Navabar";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./projects";
import Experience from "./Experience";
import Aboutme from "./Aboutme";
import Hero from "./Hero";
import Footer from "./Footer";

const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <Navabar/>

        {/*content*/}
        <main>
            <Hero/>
            <Aboutme/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
        </main>
        
        {/*footing*/}
        <Footer/>

    </div>
}

export default Home;