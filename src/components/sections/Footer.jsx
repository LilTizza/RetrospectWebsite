import React from 'react';

const Footer = () => {
  return (
    <footer className="glass-header py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Retrospect Entertainment</h3>
          <p className="text-muted-foreground mb-4">
            Professional video production services that bring your vision to life.
          </p>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Retrospect Entertainment. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;