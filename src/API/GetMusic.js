import axios from "axios";


const BASE_URL =  'https://api.napster.com/v2.0/'
const API_KEY = process.env.REACT_APP_NAPSTER_KEY


export async function GetMusic(){
    const response = await axios.get(`${BASE_URL}tracks/top?apikey=${API_KEY}&limit=50`)
    return response
}
