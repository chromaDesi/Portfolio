import {
    Instagram, Linkedin, Mail, Phone, MapPin, Github, Send
} from "lucide-react";
import {cn} from "../libs/utils";
import {useToast} from "../hooks/use-toast";
import { useState } from "react";
import emailjs from 'emailjs-com';
import Spline from '@splinetool/react-spline';
import {motion} from 'framer-motion';

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

    return (
        <section id="Contact" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
  {/* Spline background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
        <Spline scene="/world.spline" />
      </motion.div>

  <div className="container mx-auto max-w-5xl relative z-10">
    <motion.h2 
    whileInView={{ opacity: 1, y: 0 }}
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary-foreground">
      Get In <span className="text-primary">Touch</span>
    </motion.h2>
    <motion.p 
    whileInView={{ opacity: 1, y: 0 }}
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
    className="text-foreground mt-4 text-lg font-semibold text-center mb-12 max-w-2xl mx-auto text-primary-foreground">
      Always looking forward to new opportunities and collaborations. Feel free to reach out.
      I'm only one message away!!
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Contact Info Section */}
      <div className="space-y-8">
        <h3 className="text-2xl font-semibold mb-6 text-primary-foreground">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-background/40">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-primary-foreground">Email</h4>
              <a href="mailto:varunparekh18@gmail.com" className="text-primary-foreground hover:text-primary transition-colors">
                varunparekh18@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-background/40">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-primary-foreground">Phone</h4>
              <a href="tel:+17032009340" className="text-primary-foreground hover:text-primary transition-colors">
                +1 (703) 200-9340
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-background/40">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="text-primary-foreground">Location</h4>
              <p className="text-primary-foreground">Alexandria, VA, United States</p>
            </div>
          </div>
        </div>

        <div className="pt-8 text-primary-foreground">
          <h4 className="font-medium mb-4">Connect with Me</h4>
          <div className="flex space-x-4 justify-center font-large">
            <a href="https://www.linkedin.com/in/vparekhinfo" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/vparekh18" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://github.com/chromaDesi" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </div>
        </div>
      </div>

      {/* Message Form */}
      <div className="bg-card p-8 rounded-lg shadow-xs">
        <h3 className="text-4xl font-bold mb-6 text-primary-foreground">Send a Message</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Varun Parekh..."
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Hi, I wanted to reach out to discuss..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
          >
            {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    );
};


export default Contact;