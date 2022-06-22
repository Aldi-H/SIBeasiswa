import axios from 'axios';

export async function getSiswa() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/api/siswa`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
