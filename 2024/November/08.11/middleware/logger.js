// middleware/logger.js
const requestLogger = (req, res, next) => {
    console.log(`Request Method: ${req.method} | URL: ${req.url}`);
    next(); // המשך ל-middleware הבא
  };
  
  export default requestLogger;
  