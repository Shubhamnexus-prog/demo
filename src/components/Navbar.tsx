import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShieldCheck, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo-container">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <ShieldCheck size={32} color="var(--accent-cyan)" />
          </motion.div>
          <span className="text-gradient hover-3d">Fake News Detector</span>
        </Link>
        
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/detector" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Detector
          </NavLink>
          <NavLink to="/news" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Latest News
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
        </nav>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/login" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <User size={18} />
            Login
          </Link>
          <Link to="/signup" className="btn btn-primary shadow-glow">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
