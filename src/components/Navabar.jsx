import { useState } from "react"
import {cn} from "../libs/utils"

const items = [
    {name: "Home", href: "#Hero"},
    {name: "About", href: "#About"},
    {name: "Skills", href: "#Skills"},
    {name: "Projects", href: "#Projects"},
    {name: "Research", href: "#Research"},
    {name: "Contact", href: "#Contact"}
]
const navabar = () =>{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return <nav className = {cn("fixed w-full z-40 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>

        <div className="container flex items-center justify-between">
            <a className="color-red">
                <span className="text-2xl font-bold text-primary">
                    {" "}
                    <span>Varun Parekh</span> Portfolio
                </span>
            </a>
            </div>   
    </nav>
}

export default navabar