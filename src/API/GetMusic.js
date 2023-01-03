import axios from "axios";


const BASE_URL =  'https://api.napster.com/v2.0/'
const API_KEY = process.env.REACT_APP_NAPSTER_KEY


//http://api.napster.com/v2.0/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&limit=5
export async function GetMusic(){
    const response = await axios.get(`${BASE_URL}tracks/top?apikey=${API_KEY}&limit=50`)
    return response
}
