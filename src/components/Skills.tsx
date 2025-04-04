
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { 
  Laptop, 
  Server, 
  ShieldCheck, 
  Database, 
  Github, 
  Code2, 
  Braces, 
  LayoutGrid,
  Library
} from "lucide-react";

const Skills = () => {
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const frontendSkills = [
    { name: "HTML/CSS", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "React", value: 80 },
    { name: "TypeScript", value: 75 }
  ];
  
  const backendSkills = [
    { name: "Node.js", value: 75 },
    { name: "Python", value: 70 },
    { name: "SQL", value: 85 },
    { name: "NoSQL", value: 65 }
  ];

  const otherSkills = [
    { name: "Git/GitHub", value: 80 },
    { name: "Docker", value: 65 },
    { name: "Linux", value: 75 },
    { name: "AWS", value: 60 }
  ];

  return (
    <section id="skills" className="section bg-gradient-to-b from-background to-accent/5">
      <div className="container max-w-5xl">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Frontend Development</h3>
              </div>
              
              <div className="space-y-5">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <Progress 
                      value={showProgress ? skill.value : 0} 
                      className="progress-bar"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Server className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Backend Development</h3>
              </div>
              
              <div className="space-y-5">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <Progress 
                      value={showProgress ? skill.value : 0} 
                      className="progress-bar"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Other Technical Skills</h3>
              </div>
              
              <div className="space-y-5">
                {otherSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <Progress 
                      value={showProgress ? skill.value : 0}
                      className="progress-bar"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Key competencies */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 border-b pb-4 border-accent/20">Key Competencies</h3>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="glass-card p-5 rounded-lg">
                <ShieldCheck className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-bold mb-1">Cybersecurity</h4>
                <p className="text-sm text-muted-foreground">Network security, vulnerability assessment, penetration testing</p>
              </div>
              
              <div className="glass-card p-5 rounded-lg">
                <Database className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold mb-1">Database Design</h4>
                <p className="text-sm text-muted-foreground">Schema design, optimization, data modeling, migrations</p>
              </div>
              
              <div className="glass-card p-5 rounded-lg">
                <Code2 className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold mb-1">Clean Code</h4>
                <p className="text-sm text-muted-foreground">DRY principles, code refactoring, best practices</p>
              </div>
              
              <div className="glass-card p-5 rounded-lg">
                <LayoutGrid className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-bold mb-1">UI/UX Design</h4>
                <p className="text-sm text-muted-foreground">Wireframing, prototyping, responsive design</p>
              </div>
              
              <div className="glass-card p-5 rounded-lg col-span-2">
                <Library className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-bold mb-1">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">Always exploring new technologies and methodologies to stay current in the fast-evolving tech landscape</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Braces className="text-accent" />
            Tech Stack
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "MongoDB", "Git", "Docker", "AWS", "Linux", "Figma"].map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/5 hover:border-accent/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
