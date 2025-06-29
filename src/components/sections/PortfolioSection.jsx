import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Badge } from '@/components/ui/badge.jsx';
import { Play, Star } from 'lucide-react';

const PortfolioSection = () => {
    const portfolioItems = [
    {
      title: "Corporate Brand Film",
      category: "Commercial",
      description: "A compelling brand story that increased client engagement by 300%",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Documentary Series",
      category: "Documentary",
      description: "Award-winning series exploring modern entrepreneurship",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Music Video",
      category: "Music",
      description: "Cinematic music video with over 2M views",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Product Launch",
      category: "Commercial",
      description: "Dynamic product showcase driving 150% sales increase",
      image: "/api/placeholder/400/300"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Retrospect Entertainment transformed our vision into reality. Their attention to detail and creative approach exceeded all expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Creative Agency",
      text: "Working with Retrospect was seamless. They delivered exceptional quality on time and within budget.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Brand",
      text: "The team's professionalism and creativity brought our brand story to life in ways we never imagined.",
      rating: 5
    }
  ];

  return (
    <AnimatedSection id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent work and see how we've helped brands tell their stories 
            through compelling visual content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <div key={index} className="neu-glass-card overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-16 h-16 text-white transform group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="p-6">
                <Badge variant="outline">{item.category}</Badge>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="neu-glass-card p-8">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="neu-card-inset p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PortfolioSection;