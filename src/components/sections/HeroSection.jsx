import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="neu-glass-card p-12 max-w-4xl mx-auto animate-float">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Retrospect
              <span className="block text-primary">Entertainment</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Bringing your creative vision to life through professional video production, 
              storytelling, and cinematic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="neu-button px-8 py-3 text-lg bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="glass-button px-8 py-3 text-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;