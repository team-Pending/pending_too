// Import required packages and modules
import axios from 'axios';

// Define server URL and endpoints
const SERVER_URL = 'http://localhost:3001';
const LOGIN_ENDPOINT = '/auth/login';
const SUB_ADMIN_ENDPOINT = '/sub-admin';

// Define function to authenticat user
async function authenticateUser(email, password) {
    try {
        // make POST request to the authentication endpoint
        const response = await axios.post('/api/authenticate', {
            email, 
            password,
        });

        // extract the JWET from the response
        const token = response.data.token;

        // save JWT in local storage
        localStorage.setItem('token', token);

        //return the JWT
        return token;
    } catch (error) {
        console.error(error);
    }
}

// Define login function that sends credentials to server and stores JWT token
async function login(username, password) {
  try {
    const response = await axios.post(`${SERVER_URL}${LOGIN_ENDPOINT}`, { username, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Define function that retrieves sub-admin data from server using JWT token
async function getSubAdminData() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${SERVER_URL}${SUB_ADMIN_ENDPOINT}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Use login function to authenticate user and store JWT token
login('myusername', 'mypassword')
  .then(success => {
    if (success) {
      // Use getSubAdminData function to retrieve sub-admin data using JWT token
      getSubAdminData()
        .then(subAdminData => console.log(subAdminData))
        .catch(error => console.error(error));
    }
  })
  .catch(error => console.error(error));
