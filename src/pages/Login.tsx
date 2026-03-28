import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Lock, ExternalLink } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if(email && password) navigate('/detector');
  };

  return (
    <AnimatedPage>
      <div style={{ maxWidth: '450px', margin: '4rem auto' }}>
        <motion.div 
          className="glass-panel" 
          style={{ padding: '2.5rem' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Welcome Back</h1>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>Log in to access advanced tools</p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input 
                type="email" 
                className="glass-input" 
                placeholder="Email Address" 
                style={{ paddingLeft: '2.5rem' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div style={{ marginBottom: '2rem', position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input 
                type="password" 
                className="glass-input" 
                placeholder="Password" 
                style={{ paddingLeft: '2.5rem' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1.5rem' }}>
              Log In <ExternalLink size={16} />
            </button>

            <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
              Don't have an account? <Link to="/signup" style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Sign Up</Link>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Login;
