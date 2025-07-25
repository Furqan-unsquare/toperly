import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Data Scientist at Google",
      content: "Toperly's AI courses completely transformed my career. The hands-on approach and real-world projects gave me the confidence to transition into machine learning.",
      rating: 5,
      initials: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Product Manager at Microsoft",
      content: "The business-focused AI course helped me understand how to implement AI strategies effectively. Now I lead AI initiatives at my company.",
      rating: 5,
      initials: "MR"
    },
    {
      name: "Emily Johnson",
      role: "ML Engineer at Tesla",
      content: "The deep learning course was incredible. The instructors are world-class and the curriculum is cutting-edge. Highly recommend!",
      rating: 5,
      initials: "EJ"
    },
    {
      name: "David Kim",
      role: "AI Researcher at OpenAI",
      content: "Toperly doesn't just teach theory - they show you how to build real AI applications. The project-based learning is unmatched.",
      rating: 5,
      initials: "DK"
    },
    {
      name: "Lisa Wang",
      role: "Chief Technology Officer",
      content: "As a CTO, I needed to understand AI's business impact. Toperly's executive course gave me the strategic insights I needed.",
      rating: 5,
      initials: "LW"
    },
    {
      name: "James Miller",
      role: "AI Consultant",
      content: "The courses are so well-structured and the AI-powered learning system adapts perfectly to my learning style. Amazing experience!",
      rating: 5,
      initials: "JM"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Professionals
            </span>{" "}
            Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful graduates who've accelerated their careers 
            with our AI-powered learning platform.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center animate-scale-in">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Course Completion</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Career Advancement</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Students</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-glow-soft transition-all duration-500 border-0 bg-gradient-secondary animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar className="group-hover:ring-2 group-hover:ring-primary/20 transition-all">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-accent/50 rounded-full text-sm font-medium text-accent-foreground mb-6 animate-pulse-glow">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            Join our community of AI professionals
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;