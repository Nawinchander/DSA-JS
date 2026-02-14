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


