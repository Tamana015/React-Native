import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { loginUser } from '../utils/http';
import { useState, useContext } from 'react';
import { AuthenticationContex } from '../Store/AuthenticationContext';

function LoginScreen() {
  const [isAutenticate, setIsAutenticate] = useState(false);
  const AuthenticationData = useContext(AuthenticationContex);
  async function SignInDataHandler({email,password})
    {
       try{
          setIsAutenticate(true)
          const TokenId = await loginUser(email,password);
          AuthenticationData.authentication(TokenId)
       }
       catch(error)
       {
          console.log(error)
          setIsAutenticate(false)
       }
    }
    if(isAutenticate)
    {
      return <LoadingOverlay message={"Login the User....."}/>
    }
  return <AuthContent isLogin onAuthenticate={SignInDataHandler} />;
}

export default LoginScreen;
