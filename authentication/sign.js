const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Replace with your actual secret key

// Login endpoint
const login = (req) => {
  // Get the username and password from the request body
  const user = req

  // Perform your authentication logic here
  // ...

  // Assuming authentication is successful, generate a JWT token
  const token = jwt.sign( {user} , secretKey, { expiresIn: '1h'});

  // Return the token as a response

  return  token
};

module.exports = login
