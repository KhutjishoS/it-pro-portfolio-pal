
import { Github, ExternalLink, Code, Server, Shield } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment processing integration.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
      icon: <Server size={20} />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Task Management System",
      description: "A collaborative project management tool with real-time updates, task assignments, and progress tracking capabilities.",
      image: "/placeholder.svg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      icon: <Code size={20} />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "A dashboard for monitoring network security metrics, vulnerability reports, and system performance analytics.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Python", "D3.js", "Flask"],
      github: "https://github.com",
      demo: "https://example.com",
      icon: <Shield size={20} />,
      color: "from-green-500 to-emerald-400"
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-accent/80 mb-2 block tracking-widest uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">My Projects</h2>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-500 border-none bg-gradient-to-br from-background to-muted relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-accent"></div>
              
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500 -z-10`}></div>
              
              <div className={`h-3 w-full bg-gradient-to-r ${project.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <div className="aspect-video bg-muted relative overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center text-white shadow-lg" style={{background: `linear-gradient(to bottom right, var(--${project.color.split(' ')[1].split('-')[0]}-500), var(--${project.color.split(' ')[2].split('-')[0]}-400))`}}>
                    {project.icon}
                  </div>
                </div>
                
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center transform transition-transform duration-500 animate-fade-in">
                    <div className="text-center">
                      <div className="space-x-2 mb-3">
                        <Button variant="outline" size="sm" className="bg-background/20 backdrop-blur-sm hover:bg-background/40 border-white/20 text-white" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={14} className="mr-1" />
                            Code
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="bg-background/20 backdrop-blur-sm hover:bg-background/40 border-white/20 text-white" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-1" />
                            Live
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-muted/50">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-2 border-t border-muted-foreground/10">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors hover:underline"
          >
            View more projects on GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Projects;
