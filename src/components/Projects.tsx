
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment processing integration.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Task Management System",
      description: "A collaborative project management tool with real-time updates, task assignments, and progress tracking capabilities.",
      image: "/placeholder.svg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Cybersecurity Dashboard",
      description: "A dashboard for monitoring network security metrics, vulnerability reports, and system performance analytics.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Python", "D3.js", "Flask"],
      github: "https://github.com",
      demo: "https://example.com"
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-heading">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-tech-dark flex items-center justify-center">
                  <p className="text-white text-center px-4">Project Screenshot</p>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-tech-blue transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-tech-blue transition-colors"
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
            className="text-tech-blue hover:underline inline-flex items-center"
          >
            View more projects on GitHub
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
