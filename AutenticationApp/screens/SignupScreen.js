import { useState, useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../utils/http';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthenticationContex } from '../Store/AuthenticationContext';

function SignupScreen() {
  const [isAutenticate, setIsAutenticate] = useState(false);
  const AuthenticationData = useContext(AuthenticationContex);
  async function signUpDataHandler({email,password})
    {
        try{
          setIsAutenticate(true)
          const TokenId = await createUser(email,password);
          AuthenticationData.authentication(TokenId);
        }
        catch(error){
          console.log("failed")
          console.log(error)
          setIsAutenticate(false)
        }
    }
    if(isAutenticate)
    {
      return <LoadingOverlay message={"Creating user....."}/>
    }
  return <AuthContent onAuthenticate={signUpDataHandler}/>;
}

export default SignupScreen;
