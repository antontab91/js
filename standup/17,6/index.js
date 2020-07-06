const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1';

export function getUserData(userId) {
  return fetch(`${baseUrl}/users/${userId}`)
    .then((response) => {
      console.log('Hello');
      if (!response.ok) {
        throw new Error('Can not find a user');
      }
      return response.json();
    })
    .then((userData) => {
      console.log(userData);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
getUserData('1');
