import { withAuthenticationRequired } from "@auth0/auth0-react";


//Authentication Guard takes in a components as an argument
export const AuthenticationGuard = ({ component }) => {

  //function will make Component inaccessible if user is not authenticated 
  const Component = withAuthenticationRequired(component);

  return <Component />;
};