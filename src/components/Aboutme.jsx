import { BriefcaseBusiness, User, Code } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

const cardData = [
  {
    icon: Code,
    title: 'AI/ML Development',
    desc: 'Building scalable full-stack applications using React, Node.js, and MongoDB, with a focus on clean, maintainable code and performance optimization.',
  },
  {
    icon: User,
    title: 'Project Management You Can Count On',
    desc: 'Led and coordinated team initiatives across tech and student organizations, blending technical execution with communication and planning—key for delivering software projects on time.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Data-Driven Insights',
    desc: 'Leveraging machine learning and data mining to extract patterns from financial datasets using Python, SQL, and scikit-learn — transforming raw data into actionable insights.',
  },
];

const Aboutme = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section id="Aboutme" className="py-24 px-4 relative overflow-hidden bg-black">
      {/* Spline Background with Fade In/Out */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      >
        <Spline scene="/black_hole.spline"/>
      </motion.div>

    <div className="relative z-10 container mx-auto max-w-5xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary-foreground">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="space-y-6 card-hover rounded-2xl gradient-border">
            <h3 className="font-bold text-2xl text-primary">
              Passionate Software Developer and AI/ML Enthusiast
            </h3>

            <p className="text-background font-semibold">
              I’m a passionate and detail-oriented Computer Science student at George Mason University with a strong
              focus on full-stack development, data analytics, and AI/ML. My technical experience spans building scalable
              web applications with the MERN stack to designing custom machine learning pipelines for stock market
              analysis. I’m especially enthusiastic about the fields of quantitative analysis and algorithmic intelligence.
            </p>

            <p className="text-background font-semibold">
              Beyond technical work, I’ve held leadership roles in student organizations such as the Indian Student
              Association and Hindu Student Association, where I led project planning, team coordination, and large-scale
              event execution—strengthening my project management and team collaboration skills.
            </p>
          </div>

          {/* Cards Column */}
          <div className="grid grid-cols-1 gap-6">
            {cardData.map((card, index) => (
              <div key={index} className="gradient-border p-6 card-hover rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary">
                    <card.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-primary-foreground text-glow">{card.title}</h4>
                    <p className="text-primary-foreground">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
    </section>
  );
};

export default Aboutme;
