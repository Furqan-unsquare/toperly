import { Brain, Zap, Target, Users, BookOpen, TrendingUp, Cpu, Database, Network, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Neural Learning Paths",
      description: "AI algorithms analyze your progress and adapt the curriculum in real-time, creating personalized learning experiences that maximize retention.",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      stats: "50K+ adaptive paths generated"
    },
    {
      icon: Zap,
      title: "Instant AI Feedback",
      description: "Get immediate, contextual feedback powered by advanced language models that understand your code and provide actionable insights.",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      stats: "Real-time code analysis"
    },
    {
      icon: Target,
      title: "Precision Skill Targeting",
      description: "Laser-focused modules that identify skill gaps and provide targeted exercises to build exactly the competencies you need.",
      gradient: "from-emerald-500 via-teal-500 to-emerald-600",
      stats: "95% skill acquisition rate"
    },
    {
      icon: Network,
      title: "Neural Network Simulation",
      description: "Hands-on experience with neural network architectures through interactive simulations and visual learning tools.",
      gradient: "from-orange-500 via-red-500 to-orange-600",
      stats: "Interactive AI models"
    },
    {
      icon: Database,
      title: "Big Data Mastery",
      description: "Work with real-world datasets and learn to extract insights using cutting-edge machine learning techniques.",
      gradient: "from-indigo-500 via-blue-500 to-indigo-600",
      stats: "1M+ data points processed"
    },
    {
      icon: Cpu,
      title: "Advanced AI Architecture",
      description: "Deep dive into transformer models, GANs, and the latest AI architectures powering today's breakthroughs.",
      gradient: "from-violet-500 via-purple-500 to-violet-600",
      stats: "Latest AI frameworks"
    }
  ];

  return (
    <section id="features" className="py-section bg-background relative overflow-hidden">
      {/* Neural Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r="0.5"
              fill="hsl(215 100% 50%)"
              className="animate-neural-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-neural rounded-full text-sm font-semibold text-primary mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4 mr-2 animate-bounce-subtle" />
            AI-Powered Learning Technology
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Experience the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Future of Learning
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our revolutionary AI platform doesn't just teach—it thinks, adapts, and evolves with you, 
            creating the most effective learning experience ever built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-elevated transition-all duration-700 border-0 bg-gradient-secondary backdrop-blur-sm animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center relative">
                <div className="relative mb-6">
                  <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${feature.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow-secondary`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="text-sm font-semibold text-primary bg-primary/10 rounded-full px-4 py-2">
                  {feature.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Processing Visualization */}
        <div className="text-center bg-gradient-accent/40 backdrop-blur-sm rounded-3xl p-12 border border-primary/20">
          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded-full animate-neural-pulse"></div>
              <div className="w-16 h-1 bg-gradient-ai-flow rounded-full"></div>
              <Brain className="w-12 h-12 text-primary animate-pulse-glow" />
              <div className="w-16 h-1 bg-gradient-ai-flow rounded-full"></div>
              <div className="w-4 h-4 bg-primary rounded-full animate-neural-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">Neural Processing Active</h3>
          <p className="text-muted-foreground">
            Our AI is continuously analyzing millions of data points to optimize your learning experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;