import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValid = await validateToken(userAuth.token);

    if (isTokenValid) {
        Cookies.set('token', userAuth.token, { expires: 1 });
        localStorage.setItem('name', userAuth.name);
    }
    
    return userAuth;
}
export default handlerAcessUser;

