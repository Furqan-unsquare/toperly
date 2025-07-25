import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Play, ArrowRight } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      title: "Machine Learning Fundamentals",
      description: "Master the core concepts of ML with hands-on projects and real-world applications.",
      level: "Beginner",
      duration: "8 weeks",
      students: "12.5K",
      rating: 4.9,
      price: "$199",
      features: ["Python Programming", "Data Analysis", "Model Building", "Project Portfolio"],
      popular: false
    },
    {
      title: "Deep Learning & Neural Networks",
      description: "Dive deep into neural networks, CNNs, RNNs, and build sophisticated AI models.",
      level: "Intermediate",
      duration: "12 weeks",
      students: "8.2K",
      rating: 4.8,
      price: "$299",
      features: ["TensorFlow", "PyTorch", "Computer Vision", "NLP Projects"],
      popular: true
    },
    {
      title: "AI for Business Leaders",
      description: "Strategic AI implementation and decision-making for executives and managers.",
      level: "Executive",
      duration: "6 weeks",
      students: "5.1K",
      rating: 4.9,
      price: "$399",
      features: ["AI Strategy", "ROI Analysis", "Team Management", "Implementation"],
      popular: false
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Executive": return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section id="courses" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Transform Your Career with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Expert-Led Courses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive collection of AI courses, designed by industry experts 
            and tailored for all skill levels.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card 
              key={course.title}
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-glow-soft border-0 bg-card animate-scale-in ${
                course.popular ? 'ring-2 ring-primary shadow-glow-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-primary text-primary-foreground animate-pulse-glow">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge 
                    variant="outline" 
                    className={getLevelColor(course.level)}
                  >
                    {course.level}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-primary">
                    {course.price}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="group/btn">
                      <Play className="w-4 h-4 group-hover/btn:text-primary" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary hover:shadow-glow-primary transform hover:scale-105 transition-all"
                    >
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-accent/50 rounded-full text-sm font-medium text-accent-foreground mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            New courses added monthly
          </div>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10"
          >
            View All Courses
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;