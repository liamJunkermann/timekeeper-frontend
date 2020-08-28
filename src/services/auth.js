import { getRefreshToken } from "./tokenStorage"
import { useHistory } from "react-router";

export const authenticate = async () => {
    if(getRefreshToken()){
        try {const tokens = await refreshTokens();

        const expires = (tokens.expires_in || 60 * 60) * 1000
        const inOneHour = new Date(new Date().getTime() + expires )

        Cookies.set('access_token', tokens.access_token, { expires: inOneHour });
        Cookies.set('refresh_token', tokens.refresh_token);

        return true;
    } catch(error){
        redir
    }
    }
}

const redirectToLogin = () => {
    let history = useHistory();
    history.push("/login")
}