import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Performance Athletic Wear",
    brand: "WRLDS Sport",
    description: "Smart sports apparel with integrated textile sensors that track movement patterns, muscle fatigue, and form correction to optimize athletic performance and prevent injury.",
    tags: ["Sports", "Performance Analytics", "Injury Prevention", "Motion Tracking"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Tactical Military Uniforms",
    brand: "WRLDS Defense",
    description: "Advanced textile sensor integration in military gear that monitors vital signs, environmental hazards, and provides real-time battlefield awareness with secure data encryption.",
    tags: ["Military", "Health Monitoring", "Environmental Detection", "Secure Comms"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Industrial Safety Workwear",
    brand: "WRLDS Industrial",
    description: "Construction and factory workwear with embedded sensors that detect environmental hazards, monitor worker fatigue, and alert to potential safety risks before accidents occur.",
    tags: ["Industrial", "Safety", "Fatigue Monitoring", "Hazard Detection"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Adaptive Comfort Footwear",
    brand: "WRLDS Step",
    description: "Smart shoes with textile sensors that analyze gait, pressure distribution, and automatically adjust cushioning and support based on activity and terrain.",
    tags: ["Footwear", "Adaptive Support", "Gait Analysis", "Comfort"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Office Wellness Apparel",
    brand: "WRLDS Professional",
    description: "Business casual clothing with subtle integrated sensors that encourage proper posture, remind of movement breaks, and monitor stress indicators for white-collar professionals.",
    tags: ["Office", "Wellness", "Posture", "Stress Management"],
    imageUrl: "/placeholder.svg"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate carousel unless user is interacting
  useEffect(() => {
    if (isInView && !isHovering) {
      const interval = setInterval(() => {
        setActiveProject(prev => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, {
      threshold: 0.2
    });
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Animation for cards
  const getCardAnimationClass = (index: number) => {
    if (index === activeProject) return "scale-100 opacity-100 z-20";
    if (index === (activeProject + 1) % projects.length) return "translate-x-[40%] scale-95 opacity-60 z-10";
    if (index === (activeProject - 1 + projects.length) % projects.length) return "translate-x-[-40%] scale-95 opacity-60 z-10";
    return "scale-90 opacity-0";
  };
  
  return <section id="projects" ref={projectsRef} className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Industry Applications
          </div>
          <h2 className="text-3xl font-bold mb-3">
            Textile Sensors Across Diverse Sectors
          </h2>
          <p className="text-gray-600">
            Explore how our textile sensor technology is revolutionizing multiple industries with intelligent fabric solutions tailored to specific needs.
          </p>
        </div>
        
        <div className="relative h-[550px] overflow-hidden" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          {/* Main Carousel - New Dynamic Display */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {projects.map((project, index) => <div key={project.id} className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${getCardAnimationClass(index)}`} style={{
            transitionDelay: `${index * 50}ms`
          }}>
                <Card className="overflow-hidden h-[500px] border border-blue-100 shadow-sm hover:shadow-md flex flex-col">
                  <div className="bg-blue-50 p-6 flex items-center justify-center h-48">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center transform transition-all duration-500 animate-pulse-slow">
                      <span className="text-blue-500 text-4xl font-bold">{project.id}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-blue-500 text-sm font-medium">{project.brand}</p>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs animate-pulse-slow" style={{
                      animationDelay: `${idx * 300}ms`
                    }}>
                            {tag}
                          </span>)}
                      </div>
                      
                      <a href="#contact" className="text-blue-500 flex items-center hover:underline relative overflow-hidden group">
                        <span className="relative z-10">Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>)}
          </div>
          
          {/* Controls */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {projects.map((_, idx) => <button key={idx} className={`w-3 h-3 rounded-full transition-all duration-300 ${activeProject === idx ? 'bg-blue-500 w-6' : 'bg-blue-200 hover:bg-blue-300'}`} onClick={() => setActiveProject(idx)} />)}
          </div>
          
          {/* Navigation Arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-blue-500 hover:bg-white z-30" onClick={() => setActiveProject(prev => (prev - 1 + projects.length) % projects.length)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          
          <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-blue-500 hover:bg-white z-30" onClick={() => setActiveProject(prev => (prev + 1) % projects.length)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>;
};

export default Projects;
