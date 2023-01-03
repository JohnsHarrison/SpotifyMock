import axios from "axios"

export async function GetRandomUsers(){
    const response = await axios.get("https://randomuser.me/api/?results=6")
    return response
}
