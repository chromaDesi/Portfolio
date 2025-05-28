import Navabar from "./Navabar";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./projects";

const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       {/*theme toggle*/} 
        
        {/*navabar*/}
        <Navabar/>

        {/*content*/}
        <main>
            <Projects/>
            <Skills/>
            <Contact/>
        </main>
        {/*footing*/}

    </div>
}

export default Home;