import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, Star, Play, ArrowRight, Brain, Code, TrendingUp, Award, Zap, CheckCircle, Timer, Globe } from "lucide-react";
import courseMlImage from "@/assets/course-ml.jpg";
import courseDeepLearningImage from "@/assets/course-deep-learning.jpg";
import courseBusinessAiImage from "@/assets/course-business-ai.jpg";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Machine Learning Fundamentals",
      subtitle: "Complete Guide to ML Mastery",
      description: "Master the core concepts of machine learning with hands-on projects, real-world applications, and industry best practices from Google engineers.",
      image: courseMlImage,
      level: "Beginner",
      duration: "8 weeks",
      totalHours: "40 hours",
      students: "12,547",
      rating: 4.9,
      reviews: 2834,
      price: "$199",
      originalPrice: "$299",
      discount: "33% OFF",
      instructor: "Dr. Sarah Chen",
      instructorTitle: "Former Google AI Researcher",
      features: [
        "Python Programming Mastery",
        "Supervised & Unsupervised Learning",
        "Model Building & Evaluation",
        "Real-world Project Portfolio",
        "Industry Certification",
        "1-on-1 Mentorship Sessions"
      ],
      skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      outcomes: ["Build ML models", "Data analysis", "Career transition", "Certification"],
      aiFeatures: ["Smart Learning Path", "AI Tutor", "Progress Tracking"],
      popular: false,
      newContent: true,
      difficulty: 65,
      completionRate: 94
    },
    {
      id: 2,
      title: "Deep Learning & Neural Networks",
      subtitle: "Advanced AI Model Development",
      description: "Dive deep into neural networks, CNNs, RNNs, and Transformers. Build sophisticated AI models using TensorFlow and PyTorch.",
      image: courseDeepLearningImage,
      level: "Advanced",
      duration: "12 weeks",
      totalHours: "75 hours",
      students: "8,293",
      rating: 4.8,
      reviews: 1847,
      price: "$399",
      originalPrice: "$599",
      discount: "33% OFF",
      instructor: "Prof. Marcus Rodriguez",
      instructorTitle: "Senior AI Engineer at OpenAI",
      features: [
        "TensorFlow & PyTorch Mastery",
        "Computer Vision Projects",
        "Natural Language Processing",
        "Generative AI Models",
        "MLOps & Deployment",
        "Capstone Project Portfolio"
      ],
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "GANs"],
      outcomes: ["Build neural networks", "Deploy AI models", "Research skills", "Expert certification"],
      aiFeatures: ["Adaptive Curriculum", "AI Code Assistant", "Real-time Feedback"],
      popular: true,
      newContent: false,
      difficulty: 95,
      completionRate: 89
    },
    {
      id: 3,
      title: "AI for Business Leaders",
      subtitle: "Strategic AI Implementation",
      description: "Strategic AI implementation and decision-making for executives, managers, and entrepreneurs looking to transform their organizations.",
      image: courseBusinessAiImage,
      level: "Executive",
      duration: "6 weeks",
      totalHours: "25 hours",
      students: "5,147",
      rating: 4.9,
      reviews: 1234,
      price: "$499",
      originalPrice: "$799",
      discount: "38% OFF",
      instructor: "Emily Johnson",
      instructorTitle: "Chief AI Officer at Microsoft",
      features: [
        "AI Strategy Development",
        "ROI Analysis & Metrics",
        "Team Leadership in AI",
        "Implementation Roadmaps",
        "Risk Assessment",
        "Executive Networking"
      ],
      skills: ["Strategy", "Leadership", "ROI Analysis", "Risk Management", "Innovation"],
      outcomes: ["AI strategy", "Team leadership", "ROI optimization", "Industry recognition"],
      aiFeatures: ["Executive Insights", "Industry Analytics", "Peer Networking"],
      popular: false,
      newContent: true,
      difficulty: 45,
      completionRate: 96
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Advanced": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Executive": return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 50) return "bg-emerald-500";
    if (difficulty <= 80) return "bg-blue-500";
    return "bg-purple-500";
  };

  return (
    <section id="courses" className="py-section bg-gradient-secondary relative overflow-hidden">
      {/* Background AI Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-accent rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 bg-accent/40 backdrop-blur-sm rounded-full text-sm font-semibold text-accent-foreground mb-6 border border-primary/20">
            <Brain className="w-4 h-4 mr-2 text-primary animate-pulse-glow" />
            AI-Powered Course Catalog
            <div className="w-2 h-2 bg-primary rounded-full ml-2 animate-neural-pulse"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Transform Your Career with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Expert-Led AI Courses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Choose from our comprehensive collection of AI courses, designed by industry experts 
            and enhanced with AI-powered learning technology for maximum effectiveness.
          </p>
        </div>

        {/* Premium Course Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              className={`group relative overflow-hidden transition-all duration-700 hover:shadow-elevated border-0 bg-card/80 backdrop-blur-sm animate-scale-in ${
                course.popular ? 'ring-2 ring-primary shadow-glow-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Premium Badges */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                {course.popular && (
                  <Badge className="bg-gradient-primary text-primary-foreground animate-pulse-glow shadow-glow-primary">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                {course.newContent && (
                  <Badge variant="outline" className="border-emerald-300 text-emerald-600 bg-emerald-50">
                    <Zap className="w-3 h-3 mr-1" />
                    New Content
                  </Badge>
                )}
                {course.discount && (
                  <Badge variant="outline" className="border-red-300 text-red-600 bg-red-50">
                    {course.discount}
                  </Badge>
                )}
              </div>

              {/* Course Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span className="font-semibold">{course.totalHours}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                {/* Level & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant="outline" 
                    className={getLevelColor(course.level)}
                  >
                    {course.level}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                    <span>({course.reviews.toLocaleString()})</span>
                  </div>
                </div>
                
                {/* Course Title */}
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-1">
                  {course.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-2">{course.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Instructor */}
                <div className="flex items-center space-x-3 mb-4 p-3 bg-accent/30 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{course.instructor}</div>
                    <div className="text-xs text-muted-foreground">{course.instructorTitle}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Timer className="w-4 h-4" />
                    <span>{course.completionRate}% completion</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    <span>Global access</span>
                  </div>
                </div>

                {/* Difficulty Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Difficulty Level</span>
                    <span className="text-muted-foreground">{course.difficulty}%</span>
                  </div>
                  <Progress 
                    value={course.difficulty} 
                    className="h-2"
                  />
                </div>

                {/* Skills Tags */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-primary/30 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">What you'll master:</h4>
                  <ul className="space-y-1">
                    {course.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center">
                        <CheckCircle className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {course.features.length > 4 && (
                    <p className="text-xs text-primary font-medium">+{course.features.length - 4} more features</p>
                  )}
                </div>

                {/* AI Features */}
                <div className="bg-gradient-neural p-3 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-sm mb-2 flex items-center text-primary">
                    <Brain className="w-4 h-4 mr-2" />
                    AI-Enhanced Learning
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {course.aiFeatures.map((feature) => (
                      <Badge key={feature} className="bg-primary/10 text-primary text-xs border-0">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="text-3xl font-black text-primary">
                        {course.price}
                      </div>
                      {course.originalPrice && (
                        <div className="text-lg text-muted-foreground line-through">
                          {course.originalPrice}
                        </div>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="group/btn hover:shadow-glow-secondary">
                      <Play className="w-4 h-4 group-hover/btn:text-primary group-hover/btn:scale-110 transition-all" />
                    </Button>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow-primary transform hover:scale-105 transition-all duration-300 group shadow-premium"
                  >
                    <Award className="w-4 h-4 mr-2 group-hover:animate-bounce-subtle" />
                    Enroll Now & Start Learning
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center bg-gradient-accent/40 backdrop-blur-sm rounded-3xl p-12 border border-primary/20 shadow-glow-secondary">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6 animate-pulse-glow">
              <Brain className="w-4 h-4 mr-2 animate-neural-pulse" />
              AI-Powered Learning Experience
              <div className="w-2 h-2 bg-primary rounded-full ml-2 animate-pulse"></div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Revolution?
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              New courses added monthly. Join our community of AI professionals and 
              accelerate your career with cutting-edge skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-primary transform hover:scale-105 transition-all duration-300"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Explore All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/60"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;