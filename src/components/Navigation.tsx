import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, BookOpen, Users, Star, Zap, Search } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Courses", href: "#courses", icon: BookOpen },
    { name: "AI Learning", href: "#features", icon: Brain },
    { name: "Community", href: "#community", icon: Users },
    { name: "Reviews", href: "#reviews", icon: Star },
  ];

  return (
    <>
      {/* AI Neural Network Background */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-gradient-neural opacity-30 pointer-events-none z-40"></div>
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-premium' 
          : 'bg-background/80 backdrop-blur-lg'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Premium Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-primary animate-pulse-glow">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-20 animate-neural-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Toperly
                </span>
                <span className="text-xs text-muted-foreground -mt-1">AI Learning Platform</span>
              </div>
            </div>

            {/* Desktop Navigation with AI Indicators */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 relative"
                >
                  <div className="p-1.5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
                  {/* AI pulse indicator */}
                  <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-neural-pulse transition-opacity"></div>
                </a>
              ))}
            </div>

            {/* Search & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-primary/30 hover:border-primary/60 hover:shadow-glow-secondary"
              >
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary/30 hover:border-primary/60"
              >
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-primary hover:shadow-glow-primary transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="w-4 h-4 mr-2" />
                Start Learning
              </Button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2 rounded-xl hover:bg-accent/50 transition-colors group"
            >
              <div className="w-6 h-6 relative">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-6 border-t border-border bg-gradient-secondary/50 backdrop-blur-xl animate-slide-up">
              <div className="flex flex-col space-y-6">
                {/* Mobile Nav Items */}
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors py-3 animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{item.name}</span>
                      <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity ml-auto"></div>
                    </a>
                  ))}
                </div>

                {/* Mobile Actions */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <Button 
                    variant="outline" 
                    className="border-primary/30 hover:border-primary/60 justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search Courses
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary/30 hover:border-primary/60 justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="bg-gradient-primary hover:shadow-glow-primary justify-start" 
                    onClick={() => setIsOpen(false)}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Start Learning AI
                  </Button>
                </div>

                {/* AI Network Visualization */}
                <div className="flex items-center justify-center pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-neural-pulse"></div>
                    <div className="w-8 h-px bg-gradient-ai-flow"></div>
                    <Brain className="w-5 h-5 text-primary animate-pulse-glow" />
                    <div className="w-8 h-px bg-gradient-ai-flow"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-neural-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;