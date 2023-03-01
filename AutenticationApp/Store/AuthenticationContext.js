import { createContext, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthenticationContex = createContext(
{
    token : '',
    authentication : (token) => {},
    isAuthenticate : false,
    logOut : () => {}
})

export default function AuthenticationContexProvider({children})
{
    const [authenticateToken, SetAuthenticateToken] = useState();
    function authentication(token)
    {
        SetAuthenticateToken(token)
        AsyncStorage.setItem('token',token)
    }
    function logOut()
    {
        SetAuthenticateToken(null)
        AsyncStorage.removeItem('token')
    }
    const value = {
        token : authenticateToken,
        authentication : authentication,
        isAuthenticate : !!authenticateToken,
        logOut : logOut
    }

    return <AuthenticationContex.Provider value={value}>{children}</AuthenticationContex.Provider>
}