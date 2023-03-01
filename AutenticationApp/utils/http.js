import axios from "axios";

const API_KEY="AIzaSyAWrd-FMPUZaKcumkxVlAhFGFrES2z7sh4";
async function authenticate(mode,email,password)
{
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=`+API_KEY,
    {
        email:email,
        password:password,
        returnSecureToken:true
    });
    console.log(response)
    return response.data.idToken;
}

export function createUser(email,password)
{
    const resposne = authenticate('signUp',email,password)
    return resposne;
}

export function loginUser(email,password)
{
    const response = authenticate('signInWithPassword',email,password)
    return response;
}