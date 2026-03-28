import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, AlertTriangle } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const mockNews = [
  { id: 1, title: 'Global Markets Rally on AI Breakthrough', score: 92, label: 'Real', source: 'reuters.com' },
  { id: 2, title: 'Secret Miracle Cure Found by Local Teen!', score: 15, label: 'Fake', source: 'health-secrets-4u.biz' },
  { id: 3, title: 'New Election Polling Shows Surprising Turnout', score: 55, label: 'Suspicious', source: 'politics-daily-hub.info' },
  { id: 4, title: 'Space Telescope Captures Image of Unknown Object', score: 88, label: 'Real', source: 'nasa.gov' },
  { id: 5, title: 'They Don\'t Want You To Know This 1 Weird Trick', score: 5, label: 'Fake', source: 'viral-clicks-now.net' }
];

const LatestNews: React.FC = () => {
  const getIcon = (score: number) => {
    if (score >= 70) return <CheckCircle size={20} color="var(--accent-emerald)" />;
    if (score >= 40) return <AlertTriangle size={20} color="#fbbf24" />;
    return <ShieldAlert size={20} color="var(--accent-rose)" />;
  };

  const getColor = (score: number) => {
    if (score >= 70) return 'var(--accent-emerald)';
    if (score >= 40) return '#fbbf24';
    return 'var(--accent-rose)';
  };

  return (
    <AnimatedPage>
      <div style={{ maxWidth: '1000px', margin: '3rem auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Latest <span className="text-gradient">Analysis</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          A live feed of recently analyzed articles and headlines.
        </p>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {mockNews.map((news, idx) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel hover-3d"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem' }}
            >
              <div style={{ flex: 1 }}>
                <a href="#" className="hover-3d" style={{ display: 'inline-block', fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                  {news.title}
                </a>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Source: {news.source}
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '150px', justifyContent: 'flex-end' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'Outfit', color: getColor(news.score) }}>
                    {news.score}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Score</div>
                </div>
                {getIcon(news.score)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default LatestNews;
