
export function isSpam(content: string): boolean {
    // Convert content to lowercase for case-insensitive checks
    const lowerContent = content.toLowerCase();
  
    // Check for repetitive words or phrases
    const words = lowerContent.split(/\s+/);
    const uniqueWords = new Set(words);
    if (uniqueWords.size / words.length < 0.5) {
      return true; // More than half of the words are repetitive
    }
  
    // List of promotional/spammy keywords
    const spamKeywords = [
      "buy now", "promo", "discount", "free", "offer", 
      "click here", "order now", "limited time"
    ];
    for (const keyword of spamKeywords) {
      if (lowerContent.includes(keyword)) {
        return true; // Content contains spammy keyword
      }
    }
  
    return false;
  }
  