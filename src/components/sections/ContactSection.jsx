import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Mail, Phone, MapPin, ArrowRight, ChevronRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="neu-glass-card p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input className="neu-input p-3" placeholder="First Name" />
                <Input className="neu-input p-3" placeholder="Last Name" />
              </div>
              <Input className="neu-input p-3" type="email" placeholder="Your Email" />
              <select className="neu-input p-3 w-full text-foreground/70">
                <option>Select a service</option>
                <option>Commercial Video</option>
                <option>Documentary</option>
                <option>Music Video</option>
                <option>Corporate Content</option>
                <option>Other</option>
              </select>
              <Textarea 
                className="neu-input p-3 min-h-[120px]" 
                placeholder="Tell us about your project..."
              />
              <Button className="neu-button w-full p-3 bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="neu-button p-3"><Mail className="w-6 h-6 text-primary" /></div>
                  <div>
                    <div className="font-medium text-foreground">hello@retrospectent.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="neu-button p-3"><Phone className="w-6 h-6 text-primary" /></div>
                  <div>
                    <div className="font-medium text-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="neu-button p-3"><MapPin className="w-6 h-6 text-primary" /></div>
                  <div>
                    <div className="font-medium text-foreground">Los Angeles, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "10+ years of industry experience", "Award-winning creative team",
                  "State-of-the-art equipment", "On-time, on-budget delivery"
                ].map(item => (
                  <li key={item} className="flex items-center space-x-2">
                    <ChevronRight className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;