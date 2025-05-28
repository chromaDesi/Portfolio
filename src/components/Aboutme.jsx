import { BriefcaseBusiness , User, Code} from 'lucide-react'
import React from 'react'

const Aboutme = () => {
  return (
    <section id="Aboutme" className='py-24 px-4 relative'>
        {" "}
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'> Me</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6 card-hover'>
                    <h3 className='font-bold text-2xl text-primary'>Passionate Software Developer and AI/ML Enthusiast</h3>

                    <p className='text-muted-foreground font-semibold'>
                        I’m a passionate and detail-oriented Computer Science student at George Mason University with a strong focus on full-stack development, data analytics, and AI/ML. My technical experience spans building scalable web applications with the MERN stack to designing custom machine learning pipelines for stock market analysis using tools like Scikit-Learn, pandas, and UMAP. I’m especially enthusiastic about the fields of quantitative analysis and algorithmic intelligence, constantly seeking opportunities to apply data-driven approaches to real-world challenges—whether it’s predicting market trends or optimizing backend systems.
                    </p>

                    <p className='text-muted-foreground font-semibold'>
                        Beyond technical work, I’ve taken on leadership roles in student organizations such as the Indian Student Association and Hindu Student Association, where I led project planning, team coordination, and large-scale event execution. These experiences sharpened my skills in project management and collaborative problem-solving, complementing my technical strengths. Whether I’m building intelligent systems, analyzing datasets, or managing cross-functional teams, I bring energy, clarity, and a deep commitment to giving it my all.
                    </p>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className="p-3 rounded-full bg-primary">
                                <Code Icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg text-primary-foreground text-glow'>AI/ML Development</h4>
                                <p className='text-primary-foreground'>Building scalable full-stack applications using React, Node.js, and MongoDB, with a focus on clean, maintainable code and performance optimization.</p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className="p-3 rounded-full bg-primary">
                                <User Icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg text-primary-foreground text-glow'>Project Management You Can Count On</h4>
                                <p className='text-primary-foreground'>Led and coordinated team initiatives across tech and student organizations, blending technical execution with communication and planning—key for delivering software projects on time. </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className="p-3 rounded-full bg-primary">
                                <BriefcaseBusiness Icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg text-primary-foreground text-glow'>AI/ML Development</h4>
                                <p className='text-primary-foreground'>Leveraging machine learning and data mining to extract patterns from financial datasets using Python, SQL, and scikit-learn — transforming raw data into actionable insights. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutme