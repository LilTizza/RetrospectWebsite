import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Award, Users, Play } from 'lucide-react';

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of storytellers, creators, and technical experts 
            dedicated to producing exceptional video content that resonates with audiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="neu-glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Story</h3>
            <p className="text-muted-foreground mb-6">
              Founded with a vision to bridge the gap between creative storytelling and technical excellence, 
              Retrospect Entertainment has been crafting compelling visual narratives for over a decade. 
              Our team combines artistic vision with cutting-edge technology to deliver content that not only 
              looks stunning but also drives results for our clients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="neu-card-inset p-4 text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="neu-card-inset p-4 text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To create visual content that not only captures attention but also creates lasting emotional 
              connections between brands and their audiences. We believe every story deserves to be told 
              with passion, precision, and purpose.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-foreground">Award-winning creative team</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-foreground">Collaborative approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <Play className="w-6 h-6 text-primary" />
                <span className="text-foreground">Cutting-edge technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;