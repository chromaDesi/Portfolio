import Navabar from "./components/Navabar";
import Contact from "./components/Contact";

const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       {/*theme toggle*/} 
        
        {/*navabar*/}
        <Navabar/>

        {/*content*/}
        <main>
            <Contact/>
        </main>
        {/*footing*/}

    </div>
}

export default Home;