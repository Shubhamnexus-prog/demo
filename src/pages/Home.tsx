import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, Search, Database } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const features = [
  {
    icon: <Search size={24} className="text-gradient" />,
    title: "Deep Text Analysis",
    desc: "Advanced NLP heuristics analyze styling, sentiment, and vocabulary."
  },
  {
    icon: <Activity size={24} className="text-gradient" />,
    title: "Real-time Verification",
    desc: "Get instant results detailing the probability of fake news."
  },
  {
    icon: <Database size={24} className="text-gradient" />,
    title: "Source Checking",
    desc: "Cross-reference against known credible and suspicious domains."
  }
];

const Home: React.FC = () => {
  return (
    <AnimatedPage className="container">
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              <ShieldCheck size={80} color="var(--accent-cyan)" />
            </motion.div>
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Detect truth with <span className="text-gradient">precision.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Leverage advanced linguistic analysis and real-time heuristics to identify misinformation and clickbait before it spreads.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/detector" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Start Detecting
            </Link>
            <Link to="/about" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '3rem 0', 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                        gap: '2rem' }}>
        {features.map((feat, idx) => (
          <motion.div 
            key={idx}
            className="glass-panel hover-3d"
            style={{ padding: '2rem', textAlign: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
          >
            <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              {feat.icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feat.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{feat.desc}</p>
          </motion.div>
        ))}
      </section>
    </AnimatedPage>
  );
};

export default Home;
