import { useState, useEffect } from "react"
import {cn} from "../libs/utils"



//this is a list to declare the the options that will be displayed in the navbar
const items = [
    {name: "Home", href: "#Hero"},
    {name: "About", href: "#About"},
    {name: "Skills", href: "#Skills"},
    {name: "Projects", href: "#Projects"},
    {name: "Research", href: "#Research"},
    {name: "Contact", href: "#Contact"}
]


const Navabar = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a className="text-bold text-xl items-center flex font-bold" href="#Hero">
                <span className="relative z-10">
                    Varun Parekh's 
                    <span span className="text-primary text-glow"> Portfolio</span>
                </span>
            </a>
            
            {/*Desktop Version*/}
            <div className="hidden md:flex space-x-8">
                {items.map((item, key) => (
                    <a key = {key}>
                        {item.name}
                    </a>

                ))}
            </div>

            {/*Mobile Version*/}
                <div className={cn("fixed inset-0 bg-background-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                >
                    <div className="hideen md:flex space-x-8">
                        {items.map((item, key) => (
                            <a key = {key}>
                                {item.name}
                            </a>

                        ))}
                    </div>
                </div>
        </div>   
    </nav>
}

export default Navabar;