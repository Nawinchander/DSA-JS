// Storage Layer (DB simulation)

// In-memory database
const db = {
  urlMap: {},      // short -> long
  reverseMap: {}   // long -> short
};


/// Utility Functions

function generateShortCode(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}


/// Service Layer (Business Logic)

function createShortUrl(longUrl) {
  // if already exists, return same short url
  if (db.reverseMap[longUrl]) {
    return db.reverseMap[longUrl];
  }

  let short;
  do {
    short = generateShortCode();
  } while (db.urlMap[short]);

  db.urlMap[short] = longUrl;
  db.reverseMap[longUrl] = short;

  return short;
}

function getLongUrl(short) {
  return db.urlMap[short] || null;
}


///// Controller Layer (API Simulation)

function shortenUrlHandler(longUrl) {
  if (!longUrl) return { error: "URL required" };

  const short = createShortUrl(longUrl);

  return {
    message: "Short URL created",
    shortUrl: `https://short.ly/${short}`
  };
}

function redirectHandler(shortCode) {
  const longUrl = getLongUrl(shortCode);

  if (!longUrl) return { error: "URL not found" };

  return {
    message: "Redirecting...",
    redirectTo: longUrl
  };
}


//// Simulating Requests

console.log(shortenUrlHandler("https://google.com"));
console.log(shortenUrlHandler("https://openai.com"));

console.log(redirectHandler("abc123")); // maybe not exist


