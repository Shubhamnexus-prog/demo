export interface AnalysisResultType {
  score: number; // 0 to 100
  label: 'Real' | 'Suspicious' | 'Fake';
  confidence: number;
  breakdown: {
    sentiment: string;
    stylisticPatterns: number;
    sourceCredibility: number;
    clickbaitProbability: number;
  };
  keyFindings: string[];
}

// Simulated delay function
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const analyzeContent = async (textOrUrl: string): Promise<AnalysisResultType> => {
  await delay(2500); // Simulate network latency and processing
  
  const content = textOrUrl.toLowerCase();
  
  // Basic mock heuristics
  let score = 50; 
  let sentiment = 'Neutral';
  let clickbaitProbability = 30;
  let sourceCredibility = 50;
  let keyFindings: string[] = [];
  
  if (content.includes('http') || content.includes('www')) {
    sourceCredibility = content.includes('.gov') || content.includes('.edu') ? 95 : 60;
    if (content.includes('shocking') || content.includes('you won\'t believe')) {
      clickbaitProbability = 90;
      sourceCredibility = 20;
    }
  }

  const redFlags = ['shocking', 'secret', 'truth', 'they don\'t want you to know', 'miracle', 'cure', 'hoax'];
  let flagsFound = 0;
  
  redFlags.forEach(flag => {
    if (content.includes(flag)) flagsFound++;
  });

  if (flagsFound > 0) {
    score -= (flagsFound * 15);
    clickbaitProbability += (flagsFound * 15);
    sentiment = 'Sensationalist';
    keyFindings.push(`Detected ${flagsFound} sensationalist keywords typically found in unreliable sources.`);
  } else {
    score += 25;
    keyFindings.push("Vocabulary used is balanced and lacks emotional manipulation.");
  }
  
  if (content.length > 500) {
    score += 15;
    keyFindings.push("Content length is substantial, indicating detailed reporting.");
  } else if (content.length > 0 && content.length < 50) {
    score -= 20;
    keyFindings.push("Text is very short. Difficult to determine authenticity without more context.");
  }
  
  // Normalize
  score = Math.max(5, Math.min(98, score));
  clickbaitProbability = Math.min(99, clickbaitProbability);
  
  let label: 'Real' | 'Suspicious' | 'Fake' = 'Suspicious';
  if (score >= 70) label = 'Real';
  else if (score < 40) label = 'Fake';
  
  return {
    score,
    label,
    confidence: Math.floor(Math.random() * 15) + 80, // 80-95%
    breakdown: {
      sentiment,
      stylisticPatterns: 100 - clickbaitProbability,
      sourceCredibility,
      clickbaitProbability
    },
    keyFindings
  };
};
