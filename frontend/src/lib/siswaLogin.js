import axios from 'axios';

export async function siswaLogin() {
  let data = '';

  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_BASE_URL}/api/siswa/login`,
    headers: {
      Authorization: 'Basic ZGVubnlAZW1haWwuY29tOjEyMzQ1Ng==',
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
