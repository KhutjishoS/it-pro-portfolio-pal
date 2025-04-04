
import { Book, Briefcase, GraduationCap, User, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-accent/80 mb-2 block tracking-widest uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">My Journey</h2>
            <div className="mt-3 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-primary/30 to-accent/30 rounded-full"></div>
            
            <div className="relative pl-6">
              <div className="absolute -left-6 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <p className="text-xl leading-relaxed">
                I'm an enthusiastic IT student currently pursuing my Bachelor's degree in 
                Computer Science, with a focus on software development and cybersecurity.
              </p>
            </div>
            
            <div className="relative pl-6">
              <div className="absolute -left-6 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <ChevronRight size={16} className="text-white" />
              </div>
              <p className="text-lg">
                My academic journey has equipped me with strong technical skills and 
                theoretical knowledge that I'm eager to apply in professional settings.
              </p>
            </div>
            
            <div className="relative pl-6">
              <div className="absolute -left-6 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <ChevronRight size={16} className="text-white" />
              </div>
              <p className="text-lg">
                Beyond coursework, I actively participate in coding competitions, hackathons, 
                and open-source projects to broaden my practical experience. I'm particularly 
                interested in web development, cloud computing, and artificial intelligence.
              </p>
            </div>
            
            <div className="relative pl-6">
              <div className="absolute -left-6 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <ChevronRight size={16} className="text-white" />
              </div>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to tech forums, or enhancing my problem-solving skills through various 
                programming challenges.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-accent/10 text-accent p-2 rounded-lg mr-3">
                <GraduationCap size={24} />
              </span>
              Education & Experience
            </h3>
            
            <Card className="overflow-hidden tilt-card border-t-4 border-t-primary transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-3 pb-2 bg-gradient-to-r from-primary/5 to-transparent">
                <GraduationCap className="text-primary" size={22} />
                <h4 className="font-semibold text-lg">Bachelor of Science in Computer Science</h4>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-primary font-medium">University of Technology</p>
                <p className="text-sm text-muted-foreground">2020 - Present</p>
                <p className="mt-2">Specializing in Software Engineering and Cybersecurity</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden tilt-card border-t-4 border-t-accent transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-3 pb-2 bg-gradient-to-r from-accent/5 to-transparent">
                <Briefcase className="text-accent" size={22} />
                <h4 className="font-semibold text-lg">Tech Support Intern</h4>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-accent font-medium">InnoTech Solutions</p>
                <p className="text-sm text-muted-foreground">Summer 2022</p>
                <p className="mt-2">Provided technical support, maintained systems, and assisted with network troubleshooting</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden tilt-card border-t-4 border-t-primary/80 transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-3 pb-2 bg-gradient-to-r from-primary/5 to-transparent">
                <Book className="text-primary/80" size={22} />
                <h4 className="font-semibold text-lg">Web Development Course</h4>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-primary/80 font-medium">Tech Academy Online</p>
                <p className="text-sm text-muted-foreground">2021</p>
                <p className="mt-2">Completed comprehensive training in modern web development technologies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default About;
