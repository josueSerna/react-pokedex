import axios from 'axios'

const getDataService = async (url) => {
    const response = await axios.get (url);
    return response.data;
}

export default getDataService
