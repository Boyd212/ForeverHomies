const getToken = () => {
  const KEY = 'RrNddqeioQ3THkcX7vUOsGcpWR8zKyOPGlNPXiYJD2Sv0BxUPT';
  const SECRET = 'NXqvybwruYTzWgglMtqqbTJOUqqyUdiAb6mGFQdb';
  const NOW = Math.round((new Date()).getTime() / 1000);

  let cachedToken = JSON.parse(localStorage.getItem('token'));
  if (cachedToken && cachedToken.expiresAt > NOW) {
    return Promise.resolve(cachedToken.token);
  }

  localStorage.removeItem('token');

  return fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    body: `grant_type=client_credentials&client_id=${KEY}&client_secret=${SECRET}`,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(response => response.json())
    .then(json => {
      cachedToken = {
        token: json.access_token,
        expiresAt: NOW + json.expires_in,
      };

      localStorage.setItem('token', JSON.stringify(cachedToken));

      return json.access_token;
    });
};

export default getToken;
