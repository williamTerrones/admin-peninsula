import axios from 'axios'

const serverApi = axios.create({
    baseURL:'https://api-prospectos.us-east-1.elasticbeanstalk.com'
})

export default serverApi