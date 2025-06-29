import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Badge } from '@/components/ui/badge.jsx';
import { Camera, Film, Edit3 } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Pre-Production",
      description: "Comprehensive planning, scripting, storyboarding, and location scouting to ensure your vision comes to life perfectly."
    },
    {
      icon: <Film className="w-10 h-10" />,
      title: "Production",
      description: "Professional filming with state-of-the-art equipment, experienced crew, and meticulous attention to detail."
    },
    {
      icon: <Edit3 className="w-10 h-10" />,
      title: "Post-Production",
      description: "Expert editing, color grading, sound design, and visual effects to create polished, impactful content."
    }
  ];

  return (
    <AnimatedSection id="services" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive video production services 
            tailored to your unique needs and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="neu-glass-card p-8 text-center group">
              <div className="text-primary mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass-card p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Additional Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Live Event Coverage', 'Drone Cinematography', 'Motion Graphics', 'Sound Design',
              'Color Grading', 'Social Media Content', 'Training Videos', 'Promotional Content'
            ].map((service, index) => (
              <Badge key={index} variant="secondary" className="p-3 text-center justify-center text-base">
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;