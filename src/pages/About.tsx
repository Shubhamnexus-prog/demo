import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <AnimatedPage>
      <div style={{ maxWidth: '800px', margin: '3rem auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          About <span className="text-gradient">Fake News Detector</span>
        </h1>
        
        <motion.div 
          className="glass-panel" 
          style={{ padding: '2.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>Our Mission</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
            In an era of rapid information spread, distinguishing fact from fiction is more critical than ever. 
            Fake News Detector is dedicated to providing users with an instantaneous, highly accurate tool to evaluate 
            the authenticity of news articles, headlines, and general content.
          </p>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>How It Works</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Our engine utilizes heuristic analysis to examine multiple facets of provided text:
          </p>
          <ul style={{ color: 'var(--text-secondary)', listStyleType: 'disc', paddingLeft: '2rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            <li><strong style={{color: 'white'}}>Sensationalism Detection:</strong> Flags highly emotive or clickbait vocabulary.</li>
            <li><strong style={{color: 'white'}}>Stylistic Analysis:</strong> Evaluates sentence structure and professional tone.</li>
            <li><strong style={{color: 'white'}}>Source Credibility:</strong> Cross-references against a dataset of known credible and malicious domains.</li>
          </ul>

          <div style={{ padding: '1.5rem', background: 'rgba(6, 182, 212, 0.1)', borderLeft: '4px solid var(--accent-cyan)', borderRadius: '0 0.5rem 0.5rem 0' }}>
            <p style={{ color: 'var(--text-primary)', fontStyle: 'italic' }}>
              "Truth is not what you want it to be; it is what it is, and you must bend to its power or live a lie."
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default About;
