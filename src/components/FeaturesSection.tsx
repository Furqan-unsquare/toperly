import { Brain, Zap, Target, Users, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized learning paths adapted to your pace and style using advanced machine learning algorithms.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Real-Time Feedback",
      description: "Instant AI-generated feedback on your progress with actionable insights to accelerate your learning.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: Target,
      title: "Precision Training",
      description: "Laser-focused modules targeting specific AI skills that matter most in today's job market.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Connect with AI professionals and mentors who guide you through your learning journey.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "From fundamentals to advanced topics, covering the full spectrum of AI and machine learning.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Career Acceleration",
      description: "Skills that directly translate to career growth and higher-paying opportunities in AI.",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Power of AI
            </span>{" "}
            Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge platform leverages artificial intelligence to create 
            the most effective and engaging learning experience possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-glow-soft transition-all duration-500 border-0 bg-gradient-secondary animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} transform group-hover:scale-110 transition-transform duration-300 shadow-glow-secondary`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Visualization */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="flex items-center justify-center space-x-4 p-8 bg-gradient-accent rounded-3xl animate-pulse-glow">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <Brain className="w-8 h-8 text-primary mx-4" />
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              AI-powered neural network processing your learning data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;