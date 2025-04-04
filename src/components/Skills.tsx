
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, Database, Monitor, Server, 
  LineChart, Globe, LayoutGrid, ShieldCheck 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = {
    frontend: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "Angular", level: 60 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
      { name: "Express", level: 75 },
      { name: "SQL", level: 80 },
    ],
    other: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
      { name: "Linux", level: 75 },
      { name: "Cybersecurity", level: 70 },
    ]
  };

  const technologies = [
    { icon: Globe, name: "Web Development", description: "Building responsive, accessible websites and web applications" },
    { icon: Database, name: "Database Design", description: "Creating efficient database schemas and writing optimized queries" },
    { icon: ShieldCheck, name: "Security", description: "Implementing secure authentication and authorization solutions" },
    { icon: Server, name: "Backend APIs", description: "Developing RESTful and GraphQL APIs with proper documentation" },
    { icon: LayoutGrid, name: "UI/UX Design", description: "Creating intuitive, user-friendly interfaces" },
    { icon: LineChart, name: "Data Analysis", description: "Analyzing and visualizing data to derive actionable insights" },
    { icon: Monitor, name: "DevOps", description: "CI/CD pipelines, containerization, and deployment" },
    { icon: Code, name: "Version Control", description: "Managing code with Git, following best practices" },
  ];

  return (
    <section id="skills" className="section bg-muted/50">
      <div className="container">
        <h2 className="section-heading">Skills & Technologies</h2>

        <Tabs defaultValue="skills" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="skills">Technical Skills</TabsTrigger>
            <TabsTrigger value="tech">Technologies</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Frontend</h3>
                <div className="space-y-6">
                  {skillCategories.frontend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" indicatorClassName="bg-tech-blue" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Backend</h3>
                <div className="space-y-6">
                  {skillCategories.backend.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" indicatorClassName="bg-tech-blue" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">Other</h3>
                <div className="space-y-6">
                  {skillCategories.other.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" indicatorClassName="bg-tech-blue" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tech">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech) => (
                <Card key={tech.name} className="h-full">
                  <CardHeader className="pb-2">
                    <tech.icon className="text-tech-blue mb-2" size={28} />
                    <CardTitle className="text-lg">{tech.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
