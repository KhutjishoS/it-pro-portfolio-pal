
import { Book, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section bg-muted/50">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm an enthusiastic IT student currently pursuing my Bachelor's degree in 
              Computer Science, with a focus on software development and cybersecurity. 
              My academic journey has equipped me with strong technical skills and 
              theoretical knowledge that I'm eager to apply in professional settings.
            </p>
            
            <p className="text-lg">
              Beyond coursework, I actively participate in coding competitions, hackathons, 
              and open-source projects to broaden my practical experience. I'm particularly 
              interested in web development, cloud computing, and artificial intelligence.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to tech forums, or enhancing my problem-solving skills through various 
              programming challenges.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Education & Experience</h3>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <GraduationCap className="text-tech-blue" size={22} />
                <h4 className="font-semibold text-lg">Bachelor of Science in Computer Science</h4>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">University of Technology</p>
                <p className="text-sm text-muted-foreground">2020 - Present</p>
                <p className="mt-2">Specializing in Software Engineering and Cybersecurity</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Briefcase className="text-tech-blue" size={22} />
                <h4 className="font-semibold text-lg">Tech Support Intern</h4>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">InnoTech Solutions</p>
                <p className="text-sm text-muted-foreground">Summer 2022</p>
                <p className="mt-2">Provided technical support, maintained systems, and assisted with network troubleshooting</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Book className="text-tech-blue" size={22} />
                <h4 className="font-semibold text-lg">Web Development Course</h4>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tech Academy Online</p>
                <p className="text-sm text-muted-foreground">2021</p>
                <p className="mt-2">Completed comprehensive training in modern web development technologies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
