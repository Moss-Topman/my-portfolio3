// Simple in-memory rate limiting
const rateLimitMap = new Map();

export function rateLimit(options: { interval: number; uniqueTokenPerInterval: number }) {
  return {
    check: (identifier: string, limit: number) => {
      const now = Date.now();
      const windowStart = now - options.interval;
      const requests = rateLimitMap.get(identifier) || [];
      
      // Remove requests that are outside the current window
      const validRequests = requests.filter((time: number) => time > windowStart);
      validRequests.push(now);
      rateLimitMap.set(identifier, validRequests);
      
      return validRequests.length > limit;
    },
  };
}