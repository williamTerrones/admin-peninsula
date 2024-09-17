import axios from 'axios'

const firebaseApi = axios.create({
    baseURL:'https://us-central1-alianzas-crediviaja.cloudfunctions.net/api'
})

export default firebaseApi