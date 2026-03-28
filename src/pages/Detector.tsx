import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, AlertTriangle, CheckCircle, ShieldAlert } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import { analyzeContent, type AnalysisResultType } from '../lib/analyzer';

const Detector: React.FC = () => {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResultType | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);
    
    try {
      const res = await analyzeContent(input);
      setResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'var(--accent-emerald)';
    if (score >= 40) return '#fbbf24'; // Amber
    return 'var(--accent-rose)';
  };

  const getLabelIcon = (label: string) => {
    switch (label) {
      case 'Real': return <CheckCircle color="var(--accent-emerald)" size={32} />;
      case 'Suspicious': return <AlertTriangle color="#fbbf24" size={32} />;
      case 'Fake': return <ShieldAlert color="var(--accent-rose)" size={32} />;
    }
  };

  return (
    <AnimatedPage>
      <div style={{ maxWidth: '800px', margin: '3rem auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>
          Content <span className="text-gradient">Detector</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2.5rem' }}>
          Paste an article, headline, or URL to analyze its authenticity.
        </p>

        <form onSubmit={handleAnalyze} className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <textarea
            className="glass-input"
            rows={6}
            placeholder="Paste text or URL here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginBottom: '1.5rem', resize: 'vertical' }}
          />
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', fontSize: '1.1rem' }}
            disabled={isAnalyzing || !input.trim()}
          >
            {isAnalyzing ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                <Loader2 size={24} />
              </motion.div>
            ) : (
              <><Search size={20} /> Analyze Content</>
            )}
          </button>
        </form>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="glass-panel"
              style={{ padding: '2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {getLabelIcon(result.label)}
                  <div>
                    <h2 style={{ fontSize: '1.8rem', color: getScoreColor(result.score) }}>
                      {result.label}
                    </h2>
                    <span style={{ color: 'var(--text-secondary)' }}>{result.confidence}% Confidence</span>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: getScoreColor(result.score), fontFamily: 'Outfit' }}>
                    {result.score}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Authenticity Score</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                  <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Stylistic Rating</h4>
                  <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{result.breakdown.stylisticPatterns}/100</div>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                  <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Sentiment</h4>
                  <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{result.breakdown.sentiment}</div>
                </div>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '0.5rem' }}>
                <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Key Findings</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                  {result.keyFindings.map((finding, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{finding}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedPage>
  );
};

export default Detector;
