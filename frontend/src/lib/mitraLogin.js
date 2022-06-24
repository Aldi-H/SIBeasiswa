import axios from 'axios';

export async function mitraLogin() {
  let data = '';

  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_BASE_URL}/api/mitra/login`,
    headers: {
      Authorization: 'Basic cmV6a3lAZW1haWwuY29tOjEyMzQ1Ng==',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
