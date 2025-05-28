import {
    Instagram, Linkedin, Mail, Phone, MapPin, Github, Send
} from "lucide-react";
import {cn} from "../libs/utils";
import {useToast} from "../hooks/use-toast";
import { useState } from "react";
import emailjs from 'emailjs-com';

//Watch his other video to link email api

const Contact = () => {
    const {toast} = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
        .then((result) => {
            setTimeout(() => {
            toast({
                title: 'Message sent',
                description: 'Thanks for the message, TTYS!',
            });
            setFormData({name: "", email: "", message: ""});
            setIsSubmitting(false);
            console.log(serviceId)
            console.log(templateId)
            console.log(publicKey)

        }, 600);
        }).catch(() => {
            setTimeout(() => {
                toast({
                    title: 'Error',
                    description: 'Something went wrong, try again',
                })
            }, 600);
        })
    };
    
    /* Figure out later how to add
    <section id="contact" className="relative w-full h-full overflow-hidden py-24 px-4">
            <iframe 
                src="https://my.spline.design/claritystream-VA3ge7zOxLqqtzT5xO8XnQLY/" 
                frameBorder="0" 
                allowFullScreen 
                className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            ></iframe>

            <div className = "container mx-auto max-w-5xl relative z-10"></div>
    
    */





    return (
        <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
            <div className = "container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-foreground mt-4 text-lg font-semibold text-center mb-12 max-w-2xl mx-auto">
                    Always looking forward to new opportunities and collaborations. Feel free to reach out.
                    I'm only one message away!!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4> Email</h4>
                                    <a href="mailto:varunparekh18@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"> 
                                        varunparekh18@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4> Phone</h4>
                                    <a href="tel:+17032009340" className="text-muted-foreground hover:text-primary transition-colors"> 
                                        +1 (703) 200-9340
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors"> 
                                        Alexandria, VA, United States of America
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="pt-8">
                                <h4 className="font-medium mb-4">Connect with Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="https://www.linkedin.com/in/vparekhinfo" target="_blank" rel="noopener noreferrer">
                                        <Linkedin />
                                    </a>
                                    <a href="https://www.instagram.com/vparekh18?igsh=MWc2MWlnbmo0M3ZrbA==" target="_blank" rel="noopener noreferrer">
                                        <Instagram />
                                    </a>
                                    <a href="https://github.com/chromaDesi" target="_blank" rel="noopener noreferrer">
                                        <Github />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-4xl font-bold mb-6 text-primary-foreground"> Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value = {formData.name}
                                onChange={(e)=> setFormData({...formData, name: e.target.value})}
                                className = "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Varun Parekh..."/>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value = {formData.email}
                                onChange={(e)=> setFormData({...formData, email: e.target.value})}
                                className = "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="youremail@gmail.com"/>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                                <textarea
                                id="message"
                                name="message"
                                required
                                value = {formData.message}
                                onChange={(e)=> setFormData({...formData, message: e.target.value})}
                                className = "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Hi, I wanted to reach out to discuss..."/>
                            </div>

                            <button type="submit" disabled = {isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};


export default Contact;