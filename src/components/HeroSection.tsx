import { Button } from "@/components/ui/button";
import { Brain, Zap, TrendingUp, ArrowRight } from "lucide-react";
import heroImage from "@/assets/toperly-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-secondary relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-accent rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-accent rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-primary rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-accent/50 rounded-full text-sm font-medium text-accent-foreground mb-6 animate-fade-in">
              <Zap className="w-4 h-4 mr-2 text-primary" />
              Powered by Advanced AI Technology
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                AI
              </span>{" "}
              Skills for the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Future
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your career with cutting-edge AI courses designed by industry experts. 
              Learn practical skills that drive real-world results.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-primary transform hover:scale-105 transition-all duration-300"
              >
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl sm:text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-2xl sm:text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-2xl sm:text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-glow-soft">
              <img 
                src={heroImage} 
                alt="AI Technology Visualization" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-glow"></div>
            </div>
            
            {/* Floating AI Icons */}
            <div className="absolute -top-4 -right-4 bg-card shadow-glow-secondary rounded-xl p-3 animate-float">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card shadow-glow-secondary rounded-xl p-3 animate-float" style={{ animationDelay: '1s' }}>
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;